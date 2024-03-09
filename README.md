# Tripleten web_project_around_express

# API para Frontend com Node.js e Express.js

Este é um exemplo de uma API simples criada com Node.js e Express.js para fornecer dados para um frontend. A API possui rotas para manipular dados de usuários e cards.

Este projeto faz parte dos estudos do curso de Web Development oferecido pela Tripleten.

## Requisitos

Certifique-se de ter o Node.js instalado em seu sistema antes de executar este projeto.

## Instalação

1. Clone este repositório para o seu sistema local.
2. Navegue até o diretório do projeto no terminal.
3. Execute o seguinte comando para instalar as dependências:

```bash
npm install

Configuração dos Dados
Os dados dos usuários e dos cards são armazenados em arquivos JSON localizados na pasta data. Certifique-se de que esses arquivos existem e contêm os dados apropriados antes de iniciar o servidor.

Uso Para iniciar o servidor, execute o seguinte comando:
npm run dev
Isso iniciará o servidor na porta 3000 por padrão.

Rotas

Usuários
GET /users: Retorna uma lista de todos os usuários.
GET /users/:userId: Retorna os detalhes de um usuário com o ID especificado.

Cards
GET /cards: Retorna uma lista de todos os cards.
