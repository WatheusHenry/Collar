<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>


## Sobre o projeto:

Aplicação MVC Laravel 10 para backend do projeto integrador 2024 - PetPedHelp:

#tecnologias utilizadas:
- `php 8.1`
- `Docker`
- `minio` para alocação de imagens em buckets
- `mysql` para banco de dados
- `JWT` para autenticação via token

## Para executar aplicação:

Ao clonar o projeto executar: `composer install` na raiz do projeto

Após criar um arquivo `.env` copiando o conteudo como o exemplo encontrado na raiz do projeto

configurar os seguintes campos conforme as informações do seu banco de dados:

`DB_CONNECTION=mysql` <br>
`DB_HOST=127.0.0.1`<br>
`DB_PORT=3306`<br>
`DB_DATABASE=laravel`<br>
`DB_USERNAME=root`<br>
`DB_PASSWORD= `<br>

Após configurar as variaveis de ambiente de seu banco, executar o seguinte comando parageração de app_key: <br>
`php artisan key:generate`

Para poder criar as tabelas do banco executar o comando: `php artisan migrate`

Criar um container docker com a imagem do minio: <br>
`docker run -p 9000:9000 -p 9001:9001 minio/minio server /data --console-address ":9001"`

Ao executar o minio acessar a url para configuração do bucket: `http://localhost:9001`

Efetuar login na aplicação com os inputs padroes: <br>
login: `minioadmin` <br>
senha: `minioadmin`

Em seguinda acessar a pagina Access Token: <br>
![image](https://github.com/WatheusHenry/backendProjetoIntegrador2024-1/assets/99191406/a15d4e17-f867-40ce-84a7-da3ff71fe92b)

Efetuar a criação da chave, guardar as keys para coloca-las no `.env` da aplicação pois não poderão ser acessadas pelo minio novamente

Após isso entrar na pagina de buckets: <br>
![image](https://github.com/WatheusHenry/backendProjetoIntegrador2024-1/assets/99191406/865b427f-cdbe-4ecf-8f3b-94d8282213c6)

apos criar um bucket novo com o nome de sua preferencia, acessar as informações do bucket: <br>
![image](https://github.com/WatheusHenry/backendProjetoIntegrador2024-1/assets/99191406/9c82ec41-70af-453d-80ce-dd5fbde114ce) <br>
![image](https://github.com/WatheusHenry/backendProjetoIntegrador2024-1/assets/99191406/47281e4d-2dc1-4f97-a27a-e804452bd853) <br>

Alterar a privacidade do bucket de privado para publico:
![image](https://github.com/WatheusHenry/backendProjetoIntegrador2024-1/assets/99191406/364660e7-3067-456d-806f-8004271c465b) <br>


Em seguida, Acessar o arquivo `.env` do projeto e inserir os seguintes campos:

`MINIO_ACCESS_KEY={Sua chave de acesso}` <br>
`MINIO_SECRET_KEY={Sua chave secreta}`<br>
`MINIO_REGION=us-east-1`<br>
`MINIO_ENDPOINT=http://localhost:9001`<br>
`MINIO_BUCKET={Nome do bucket criado}`<br>

Concluindo assim as configurações do minio para armazenamento de imagens.

Para executar sua aplicação para uso: `php artisan serve`


## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
