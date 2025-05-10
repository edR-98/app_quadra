# app_quadra

# Extensões para o VSCode

//////////////////////////////////////////////////// Extensões usadas na aula ///////////////////////////////////////////////////////////////////////

1. REST Client - Permite enviar requisições HTTP diretamente do Visual Studio Code e visualizar as respostas, facilitando o teste de APIs.

2. Git Graph - Fornece uma visualização gráfica do histórico de commits do repositório Git, permitindo uma navegação intuitiva pelos branches e commits.

3. Git History - Exibe o histórico de commits e alterações de arquivos em uma interface amigável, facilitando a revisão de mudanças no projeto.

4. GitLens - Git supercharged: Melhora a experiência com Git no VS Code, oferecendo informações detalhadas sobre commits, autoria e histórico de alterações em tempo real.

5. SLint - Ferramenta para identificar e corrigir problemas de estilo e qualidade em código JavaScript, promovendo práticas de codificação consistentes e evitando bugs.

//////////////////////////////////////////// Extensões para melhorar inteface (recomendação) ////////////////////////////////////////////////////////

Material Icon Theme - Substitui os ícones padrão do Visual Studio Code por uma coleção de ícones estilizados e modernos, melhorando a estética e a organização do seu workspace.

Omni Theme - Um tema de cores personalizável para o Visual Studio Code que oferece uma interface visual atraente e moderna, melhorando a experiência de codificação.


# Adicionando node e todos seus arquivos

Basta copiar e colar o arquivo chamado "package.json" na pasta do projeto e rodar o comando "npm install" no terminal. Isso irá adicionar uma pasta chamada "node_modules" com todos os aquivos necessários e um arquivo chamado "package-lock.json". Nesse caso, é recomendável que o arquivo "package-lock.json" não seja enviado para o GitHub. Para isso, abra o arquivo ".gitignore", vá até a última linha e digite ou cole o nome do arquivo "package-lock.json". Pronto!

# ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Todos os arquivos como "payment.js, user.js, quadra.js ----.js" precisa desse código para funcionar
const express = require('express')
const router = express.Router() --> E esse "R" de Router precisa ser maiúsculo

module.exports = router
# ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Aula Marcius - 09/10

Para melhor organização dos arquivos e código foram criadas as pastas "controllers", "routes", e "tests".

Pasta "tests" - Ficam os arquivos ".http"

Pasta "routes" - ficaram somente as rotas
    Ex: "router.get('/read', cuser.create_user)"

Pasta "controllers" - Onde ficara todas as funções




# Estruturando projeto

Montar todas páginas front-end, estilização e todo o ecossima do projeto, ex. da página inicial vai para todas, de tal página vai para tal e assim por diante.

Escrever e entregar no teams toda a documentação do projeto, explicando miudo por miudo

Tenho 20 dias para fazer tudo isso em CASA!

Enquanto isso revisar todo o Maui e fazer funcionar 100% e também estiliza-lo para melhor apresentação.

Popular bando de dados com pelo menos 12 quadras 

Categorias de quadras que vão entrar para o projeto:

- Campo Society (gramado sintético)	
- Quadra de basquete	
- Quadra de vôlei
- Quadra de Tênis

# Página inicial

Menu de navegação:
    - Todas as categorias
    - Entrar e Cadastrar
    - Perfil do usuario (dados)


Quadras em destaque:
    - No carrousel vou colocar a quadra id 1 para rodar as fotos
    - Essas imagens ficaram passando em carroussel e serão as quadras mais alugadas

Categorias de quadras:
    - As 4 categorias em cards 

Alguma coisa:? por enquanto não

Rodapé:
    - Conheça-nos (sobre nós)
    - Anuncie sua quadra (jogo para o Whatsaap)


Na aula pokedex, ele ensina a quando clicar em "perfil" ele entrega todas as informçãoes do pokemon ou seja entrega todas as informações do usuario, por uma rota.

# Segurança

Nesse caso o usuario pode tentar colocar algo diferente de "true" ou "false", e por isso é bom "forçar" para que valores diferentes desses dois seja barrado com uma mensagem de erro.
Código em questão:
    if ((req.query.arquibancada !== "true") && (req.query.arquibancada !== "false")) {
        return res.status(400).send("Valor de filtro não permitido");
    }

# Comandos explicação

- npx prisma generate = Quando precisar mudar o nome no "modelo" você atualiza usando esse comando.
- npx prisma migrate dev = Esse comando serve para criar tabelas no banco de dados e alterar nome de campos na tabela