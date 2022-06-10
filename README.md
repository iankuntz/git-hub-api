# GITHUB API
Esse projeto contém a implementação do teste interagindo com API de organizações do GitHub.


## --Requisitos e Ferramentas--
Esse projeto utiliza os seguintes:

<ul>
  <li>ReactJs</li>
  <li>Styled-Components</li>
  <li>Axios</li>
</ul>

Só é necessário ter o NodeJS pré instalado para a execução do projeto. Outras dependências são gerenciadas pelo gerenciador de pacotes Yarn.


## --Execução--

Apos instalar o NodeJS,

Clone este repositório.

- **git clone https://github.com/iankuntz/git-hub-api**

Na pasta raíz do projeto, rode o comando abaixo para que o gerenciador de pacotes Yarn instale todas as dependências do projeto.

- **yarn**

Na mesma pasta, rode o comando abaixo:

- **yarn start**

Este comando compila o projeto em ReactJs.



## --Endpoints--

Todos os http requests precisam conter no header as credenciais de Basic Auth a seguir:

Token: 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

Os seguintes endpoints estão disponíveis:
<ul>
  <li>GET /organizations</li>
  <li>GET /orgs/{NameOrg}/members</li>
</ul>


**GET /organizations**

Retorna todas as organizações cadastradas na API.

**GET /orgs/{NameOrg}/members**

Retorna todos os membros de uma organização cadastrada na API.


## Segue alguns exemplos de organizações para o teste do projeto:

### --Contém membros--

<ul>
  <li>cgd</li>
  <li>cdr</li>
  <li>ministrycentered</li>
  <li>collectiveidea</li>
  <li>ogc</li>
  <li>entryway</li>
</ul>

### --Não contém membros--

<ul>
  <li>errfree</li>
  <li>engineyard</li>
  <li>sevenwire</li>
  <li>moneyspyder</li>
  <li>sproutit</li>
  <li>wrenchlabs</li>
</ul>
