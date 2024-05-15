# Integração do Prisma com MySQL

Este guia fornece os passos necessários para integrar o Prisma com um banco de dados MySQL em um projeto Node.js.

## Passos para Integração

### 1. Instalar Dependências

Primeiro, adicione as dependências do Prisma e do cliente MySQL:

```bash
npm install @prisma/client
npm install prisma --save-dev
npm install mysql2
```

### 2. Inicializar o Prisma

Inicialize o Prisma no projeto:

```bash
npx prisma init
``` 

Isso criará a pasta prisma com o arquivo schema.prisma e adicionará o arquivo .env ao seu projeto.

### 3. Configurar o schema.prisma
No arquivo schema.prisma, configure a conexão com o MySQL e defina o modelo de dados:

```bash
// schema.prisma

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Define o modelo de dados para a tabela UserOrder
model UserOrder {
  id     String @id @default(uuid()) // Define o campo id como chave primária
  name   String // Define o campo name como tipo String
  order  String // Define o campo order como tipo String
}

``` 

### 4. Configurar o .env
No arquivo .env, configure a URL de conexão com o MySQL:

```bash
DATABASE_URL="mysql://root:root@localhost:3000/my_database"
``` 

5. Migrar o Banco de Dados
Execute a migração para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev --name "nome-da-migracao"
```

## Explicação
Instalação das Dependências:

* `@prisma/client`: Cliente Prisma para interagir com o banco de dados.
* `prisma`: Ferramenta de CLI do Prisma para gerenciar o esquema do banco de dados.
* `mysql2`: Cliente MySQL para Node.js.

### Inicialização do Prisma:

* `npx prisma init`: Inicializa a configuração do Prisma no projeto.



## Endpoints da API
### Adicionar um novo pedido
#### Requisição:

``` bash
POST http://localhost:3000/usersOrder
Content-Type: application/json

{
  "name": "John Doe",
  "order": "Burger with fries"
}
```
#### #### Resposta:

``` bash
{
  "id": "uuid-gerado",
  "name": "John Doe",
  "order": "Burger with fries"
}
```



### Obter todos os pedidos
#### Requisição:

``` bash
GET http://localhost:3000/usersOrder
```

#### Resposta:

``` bash
[
  {
    "id": "uuid-gerado",
    "name": "John Doe",
    "order": "Burger with fries"
  },
  {
    "id": "outro-uuid-gerado",
    "name": "Jane Doe",
    "order": "Veggie Burger"
  }
]
```



### Atualizar um pedido existente
#### Requisição:

``` bash
PUT http://localhost:3000/usersOrder/{id}

{
  "name": "John Doe",
  "order": "Burger with extra fries"
}
``` 
#### Resposta:

```bash
{
  "id": "uuid-gerado",
  "name": "John Doe",
  "order": "Burger with extra fries"
}
```



### Deletar um pedido existente
#### Requisição:

``` bash
DELETE http://localhost:3000/usersOrder/{id}
``` 
#### Resposta:

``` bash
{
  "message": "Sucesso Delete"
}
``` 

## Verificação de Requisições HTTP

Para verificar requisições HTTP diretamente do editor, você pode utilizar a extensão REST Client junto com um arquivo com a extensão .http. Para melhor identificação, use um arquivo chamado api.http onde você pode escrever suas rotas. 

Para enviar uma requisição, coloque o cursor na linha da requisição que você deseja executar e clique em Send Request que aparecerá acima da linha, ou use o atalho Ctrl+Alt+R.

### Conclusão
Seguindo esses passos, você terá integrado com sucesso o Prisma com um banco de dados MySQL em seu projeto Node.js, e poderá gerenciar suas tabelas e dados de maneira eficiente. Use a extensão REST Client para facilitar o teste de suas rotas diretamente no VS Code.







