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