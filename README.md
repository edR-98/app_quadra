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

# Insert banco de dados SQL

INSERT INTO `usuarios` (`id`, `nome`, `nascimento`, `email`, `cpf`, `senha`, `criado_em`) VALUES
(1, 'João da Silva', '1990-05-15 00:00:00.000', 'joao@example.com', '12345678900', 'senha123', '2025-05-13 20:52:47.987'),
(2, 'Maria Oliveira', '1985-09-22 00:00:00.000', 'maria@example.com', '98765432100', 'senha456', '2025-05-13 20:52:47.987'),
(3, 'Carlos Souza', '1992-12-01 00:00:00.000', 'carlos@example.com', '45678912300', 'senha789', '2025-05-13 20:52:47.987'),
(4, 'Alex Mineiro', '1995-08-15 00:00:00.000', 'joao.silva@email.com', '123.456.789-00', 'senhaSegura123', '2025-05-14 00:25:07.890'),
(5, 'Bruno Ferreira', '1992-11-05 00:00:00.000', 'bruno.ferreira@email.com', '56789012344', 'senha789', '2025-05-16 19:34:13.221'),
(6, 'Letícia Martins', '1988-07-12 00:00:00.000', 'leticia.martins@email.com', '67890123455', 'minhasenha123', '2025-05-16 19:34:13.221'),
(7, 'Rafael Costa', '1997-02-25 00:00:00.000', 'rafael.costa@email.com', '78901234566', '123rafael', '2025-05-16 19:34:13.221'),
(8, 'Paula Andrade', '1994-09-18 00:00:00.000', 'paula.andrade@email.com', '89012345677', 'senha321', '2025-05-16 19:34:13.221');

INSERT INTO `quadras` (`id`, `nome_local`, `tipo_quadra`, `localizacao`, `imagem_principal`, `imagem_pri`, `imagem_seg`, `imagem_ter`, `telefone`, `preco`, `dimensoes`, `iluminacao`, `vestiario`, `bebedouro`, `estacionamento`, `arquibancada`, `coberta`, `acessibilidade`, `wi_fi`, `criado_em`) VALUES
(1, 'Arena Sol Azul', 'basquete', 'Rua das Palmeiras, 123 - Centro', 'https://i.imgur.com/fgqYnsz.jpeg', 'https://i.imgur.com/DkwzUkd.jpeg', 'https://i.imgur.com/O66Dwe3.jpeg', 'https://i.imgur.com/0PNCSOo.jpeg', '(11) 99999-1234', 300, '28x15m', 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-12 20:08:32.000'),
(2, 'Quadra Estrela do Norte', 'futsal', 'Av. Brasil, 456 - Zona Norte', 'https://i.imgur.com/fgqYnsz.jpeg', 'https://i.imgur.com/DkwzUkd.jpeg', 'https://i.imgur.com/O66Dwe3.jpeg', 'https://i.imgur.com/0PNCSOo.jpeg', '(11) 98888-1111', 300, '25x15m', 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-12 20:08:32.000'),
(3, 'Clube Raquete Dourada', 'tenis', 'Rua das Flores, 789 - Jardim', 'https://i.imgur.com/fgqYnsz.jpeg', 'https://i.imgur.com/DkwzUkd.jpeg', 'https://i.imgur.com/O66Dwe3.jpeg', 'https://i.imgur.com/0PNCSOo.jpeg', '(11) 97777-2222', 180, '23.77x8.23m', 0, 0, 0, 0, 0, 0, 0, 0, '2025-05-12 20:08:32.000'),
(4, 'Ginásio Vôlei+', 'volei', 'Rua da Rede, 321 - Centro', 'https://i.imgur.com/fgqYnsz.jpeg', 'https://i.imgur.com/DkwzUkd.jpeg', 'https://i.imgur.com/O66Dwe3.jpeg', 'https://i.imgur.com/0PNCSOo.jpeg', '(11) 96666-3333', 140, '18x9m', 1, 0, 1, 0, 1, 0, 1, 0, '2025-05-12 20:08:32.000'),
(5, 'Arena Basquete 360', 'basquete', 'Av. dos Atletas, 1000 - Sul', 'https://i.imgur.com/fgqYnsz.jpeg', 'https://i.imgur.com/DkwzUkd.jpeg', 'https://i.imgur.com/O66Dwe3.jpeg', 'https://i.imgur.com/0PNCSOo.jpeg', '(11) 95555-4444', 160, '28x15m', 0, 0, 1, 0, 1, 1, 1, 0, '2025-05-12 20:08:32.000'),
(10, 'Futsal Clube Centro', 'futsal', 'Rua Central, 999 - Centro', 'https://i.imgur.com/fgqYnsz.jpeg', 'https://i.imgur.com/DkwzUkd.jpeg', 'https://i.imgur.com/O66Dwe3.jpeg', 'https://i.imgur.com/0PNCSOo.jpeg', '(11) 90000-0001', 110, '25x15m', 1, 1, 0, 1, 1, 1, 1, 1, '2025-05-13 20:07:51.000'),
(11, 'Arena Futsal Pro', 'futsal', 'Av. Esportiva, 1234 - Zona Leste', 'https://i.imgur.com/fgqYnsz.jpeg', 'https://i.imgur.com/DkwzUkd.jpeg', 'https://i.imgur.com/O66Dwe3.jpeg', 'https://i.imgur.com/0PNCSOo.jpeg', '(11) 90000-0002', 130, '24x14m', 1, 1, 1, 1, 0, 0, 1, 0, '2025-05-13 20:07:51.000'),
(12, 'Centro Vôlei Forte', 'volei', 'Rua do Esporte, 222 - Oeste', 'https://i.imgur.com/fgqYnsz.jpeg', 'https://i.imgur.com/DkwzUkd.jpeg', 'https://i.imgur.com/O66Dwe3.jpeg', 'https://i.imgur.com/0PNCSOo.jpeg', '(11) 90000-0003', 125, '18x9m', 0, 1, 1, 0, 1, 0, 0, 1, '2025-05-13 20:07:51.000');


INSERT INTO `locacoes` (`id`, `id_usuario`, `id_quadra`, `data_hora`) VALUES
(16, 1, 2, '1998-12-24 06:22:33.444'),
(17, 1, 1, '2025-05-20 18:00:00.000'),
(18, 2, 2, '2025-05-21 19:00:00.000'),
(19, 3, 3, '2025-05-22 20:00:00.000'),
(20, 1, 2, '2025-05-23 17:00:00.000'),
(21, 4, 1, '2025-05-24 16:00:00.000'),
(22, 2, 3, '2025-05-25 19:30:00.000'),
(23, 3, 1, '2025-05-26 20:00:00.000'),
(24, 4, 2, '2025-05-27 18:00:00.000'),
(25, 1, 3, '2025-05-28 17:00:00.000'),
(26, 2, 1, '2025-05-29 19:00:00.000'),
(27, 1, 2, '1998-12-24 06:22:33.444');