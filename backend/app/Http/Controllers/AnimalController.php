<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Animal;
use Aws\S3\S3Client;
use Aws\Exception\AwsException;

class AnimalController extends Controller
{

    public function index()
    {
        // Obter todos os animais cadastrados
        $animals = Animal::all();

        // Array para armazenar os dados dos animais com URLs das imagens
        $animalsWithImages = [];

        // URL base do seu servidor MinIO local
        $minioBaseUrl = env('MINIO_ENDPOINT');

        // Percorrer cada animal
        foreach ($animals as $animal) {
            // Obter o ID do usuário dono do animal
            $userId = $animal->owner_id;
            // Obter o ID do animal
            $animalId = $animal->id;

            // Obter as URLs das imagens do animal
            $imageUrls = $this->getImagesFromBucket($userId, $animalId, $minioBaseUrl);

            // Adicionar os dados do animal juntamente com as URLs das imagens ao array final
            $animalsWithImages[] = [
                'animal' => $animal,
                'image_urls' => $imageUrls,
            ];
        }

        // Retornar os dados dos animais com URLs das imagens
        return response()->json($animalsWithImages);
    }

    public function find($id)
    {
        // Buscar o animal pelo ID
        $animal = Animal::find($id);

        // Verificar se o animal foi encontrado
        if (!$animal) {
            return response()->json(['error' => 'Animal not found.'], 404);
        }

        // Obter o ID do usuário dono do animal
        $userId = $animal->owner_id;
        // Obter o ID do animal
        $animalId = $animal->id;

        // Obter as URLs das imagens do animal
        $imageUrls = $this->getImagesFromBucket($userId, $animalId, env('MINIO_ENDPOINT'));

        // Retornar os dados do animal com URLs das imagens
        return response()->json([
            'animal' => $animal,
            'image_urls' => $imageUrls,
        ]);
    }

    public function allAnimalsWithImages()
    {
        // Obter todos os animais cadastrados e ordenar por data de criação (mais novos primeiro)
        $animals = Animal::orderBy('created_at', 'desc')->get();
    
        // URL base do seu servidor MinIO local
        $minioBaseUrl = env('MINIO_ENDPOINT');
    
        // Array para armazenar os dados dos animais com URLs das imagens
        $animalsWithImages = [];
    
        // Percorrer cada animal
        foreach ($animals as $animal) {
            // Obter o ID do usuário dono do animal
            $userId = $animal->owner_id;
            // Obter o ID do animal
            $animalId = $animal->id;
    
            // Obter as URLs das imagens do animal
            $imageUrls = $this->getImagesFromBucket($userId, $animalId, $minioBaseUrl);
    
            // Adicionar os dados do animal juntamente com as URLs das imagens ao array final
            $animalsWithImages[] = [
                'animal' => $animal,
                'image_urls' => $imageUrls,
            ];
        }
    
        // Retornar os dados dos animais com URLs das imagens
        return response()->json($animalsWithImages);
    }
    
    

    public function animalsByOwner($ownerId)
    {
        // Obter todos os animais do proprietário específico
        $animals = Animal::where('owner_id', $ownerId)->get();

        // Array para armazenar os dados dos animais com URLs das imagens
        $animalsWithImages = [];

        // URL base do seu servidor MinIO local
        $minioBaseUrl = env('MINIO_ENDPOINT');

        // Percorrer cada animal
        foreach ($animals as $animal) {
            // Obter o ID do usuário dono do animal
            $userId = $animal->owner_id;
            // Obter o ID do animal
            $animalId = $animal->id;

            // Obter as URLs das imagens do animal
            $imageUrls = $this->getImagesFromBucket($userId, $animalId, $minioBaseUrl);

            // Adicionar os dados do animal juntamente com as URLs das imagens ao array final
            $animalsWithImages[] = [
                'animal' => $animal,
                'image_urls' => $imageUrls,
            ];
        }

        // Retornar os dados dos animais com URLs das imagens
        return response()->json($animalsWithImages);
    }

    protected function getImagesFromBucket($userId, $animalId, $minioBaseUrl)
    {
        $s3 = new S3Client([
            'version' => 'latest',
            'region'  => env('MINIO_REGION'),
            'endpoint' => env('MINIO_ENDPOINT'),
            'use_path_style_endpoint' => true,
            'credentials' => [
                'key'    => env('MINIO_ACCESS_KEY'),
                'secret' => env('MINIO_SECRET_KEY'),
            ],
        ]);
    
        $bucketName = env('MINIO_BUCKET');
        $prefix = "user/{$userId}/animal/{$animalId}/";
    
        try {
            $objects = $s3->listObjectsV2([
                'Bucket' => $bucketName,
                'Prefix' => $prefix
            ]);
    
            $imageUrls = [];
    
            if (isset($objects['Contents']) && is_array($objects['Contents'])) {
                foreach ($objects['Contents'] as $object) {
                    $imageUrl = "{$minioBaseUrl}/{$bucketName}/{$object['Key']}";
                    $imageUrls[] = $imageUrl;
                }
            }
    
            return $imageUrls;
        } catch (AwsException $e) {
            error_log("Error fetching objects from MinIO: " . $e->getMessage());
            return [];
        }
    }




    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'animal_name' => 'required|string|max:100',
            'age' => 'required|integer',
            'gender' => 'required|in:M,F',
            'description' => 'nullable|string',
            'size' => 'required|string|max:20',
            'weight' => 'required|numeric',
            'temperament' => 'nullable|string',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'status_id' => 'required',
            'species_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        try {

            $animal = $this->createAnimal($request);
            $result = $this->uploadImages($request, $animal);

            return response()->json(['message' => 'Animal created successfully!', 'animal' => $animal], 201);
        } catch (\Exception $e) {
            var_dump($e);
            return response()->json(['error' => 'Failed to create animal.'], 500);
        }
    }

    protected function createAnimal(Request $request)
    {
        return Animal::create([
            'animal_name' => $request->animal_name,
            'age' => $request->age,
            'gender' => $request->gender,
            'description' => $request->description,
            'size' => $request->size,
            'weight' => $request->weight,
            'temperament' => $request->temperament,
            'owner_id' => Auth::id(),
            'status_id' => $request->status_id,
            'species_id' => $request->species_id,

        ]);
    }

    protected function uploadImages(Request $request, Animal $animal)
    {
        $s3 = new S3Client([
            'version' => 'latest',
            'region'  => env('MINIO_REGION'),
            'endpoint' => env('MINIO_ENDPOINT'),
            'use_path_style_endpoint' => true,
            'credentials' => [
                'key'    => env('MINIO_ACCESS_KEY'),
                'secret' => env('MINIO_SECRET_KEY'),
            ],
        ]);

        $bucketName = env('MINIO_BUCKET');
        $userId = Auth::id();
        $animalId = $animal->id;

        if ($request->hasFile('images')) {
            $images = $request->file('images');

            $images = array_slice($images, 0, 5);

            foreach ($images as $index => $image) {
                $imageName = "user/{$userId}/animal/{$animalId}/image{$index}.{$image->getClientOriginalExtension()}";

                $s3->putObject([
                    'Bucket' => $bucketName,
                    'Key'    => $imageName,
                    'Body'   => fopen($image->getPathname(), 'r'),
                    'ACL'    => 'public-read',
                ]);
            }
        }
    }
}
