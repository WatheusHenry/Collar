<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class SearchEnderecoController extends Controller
{
    public function search(Request $request)
    {
        $endereco = $request->input('endereco');

        // Validação da entrada
        if (empty($endereco)) {
            return response()->json(['error' => 'Endereço não fornecido'], 400);
        }

        try {
            $client = new Client();
            $response = $client->get('https://nominatim.openstreetmap.org/search', [
                'query' => [
                    'q' => $endereco,
                    'format' => 'json'
                ]
            ]);
            $data = json_decode($response->getBody()->getContents(), true);

            // Verifique se há resultados
            if (!empty($data)) {
                return response()->json($data);
            } else {
                return response()->json(['error' => 'Nenhum resultado encontrado'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erro na busca'], 500);
        }
    }
}
