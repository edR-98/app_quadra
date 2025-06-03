import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; // Importação única do body-parser
import { PrismaClient } from "../generated/prisma/index.js";

const app = express();
const port = 4000;
const prisma = new PrismaClient();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Olá!');
});

app.use(bodyParser.json()); 


// Quadras ------------------------------------------------------------------------------------------------------------------------------------------------ // 

app.get('/quadras', async (req, res) => {
  
  // if ((req.query.arquibancada !== "true") && (req.query.arquibancada !== "false")) {
  //   return res.status(400).send("Valor de filtro não permitido");
    
  const precoMin = parseFloat(req.query.preco_min);
  const precoMax = parseFloat(req.query.preco_max);
  const tipoQuadra = (req.query.tipo_quadra === '') ? undefined : req.query.tipo_quadra;
  const iluminacao = (req.query.iluminacao === undefined) ? undefined : req.query.iluminacao == '1';
  const vestiario = (req.query.vestiario === undefined) ? undefined : req.query.vestiario == '1';
  const bebedouro = (req.query.bebedouro === undefined) ? undefined : req.query.bebedouro == '1';
  const estacionamento = (req.query.estacionamento === undefined) ? undefined : req.query.estacionamento == '1';
  const arquibancada = (req.query.arquibancada === undefined) ? undefined : req.query.arquibancada == '1';
  const coberta = (req.query.coberta === undefined) ? undefined : req.query.coberta == '1';
  const acessibilidade = (req.query.acessibilidade === undefined) ? undefined : req.query.acessibilidade == '1';
  const wifi = (req.query.wifi === undefined) ? undefined : req.query.wifi == '1';
  
  if (isNaN(precoMin) || isNaN(precoMax)) {
    return res.status(400).json({ error: "Preço inválido" });
  }

  const quadras = await prisma.quadra.findMany({ where: {
    tipoQuadra,
    iluminacao,
    vestiario,
    bebedouro,
    estacionamento,
    arquibancada,
    coberta,
    acessibilidade,
    wifi,
    preco: { // Filtra quadras com preço entre precoMin e precoMax
      gte: precoMin,  // gte = "greater than or equal", ou seja, maior ou igual ao preço mínimo 
      lte: precoMax   // lte = "less than or equal", ou seja, menor ou igual ao preço máximo
    }
  }}); 

  res.json(quadras); 
});


app.get("/quadras/:id", async (req, res) => {

  const id = parseInt(req.params.id); 
  const quadra = await prisma.quadra.findUnique({ where: {id} });

    if (quadra === null) {
      res.status(404).json({ error: "Quadra não encontrada" }); 
    } else {
      res.json(quadra); 
    }
});


app.get("/quadras/:id/usuarios", async (req, res) => {
  const idQuadra = parseInt(req.params.id); 

  try {
    const locacoes = await prisma.locacao.findMany({
      where: { id_quadra: idQuadra },
      include: {
        usuario: true, // Inclui os dados do usuário
      },
    });

    if (locacoes.length === 0) {
      return res.status(404).json({ error: "Nenhum usuário alugou essa quadra." });
    }

    const usuarios = locacoes.map((locacao) => locacao.usuario);

    res.json(usuarios); 
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os usuários que alugaram essa quadra" });
  }
});

app.delete("/quadras/:id", async (req, res) => {
  const id = parseInt(req.params.id); 
  
  try {
    await prisma.quadra.delete({
      where: { id }
    });
    res.status(202).send();
  } catch(error) {
    res.status(404).send("Produto não encontrado");
  }
});


// Usuários ------------------------------------------------------------------------------------------------------------------------------------------ //

app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany(); 
  res.json(usuarios); 
});

app.get("/usuarios/:id", async (req, res) => {

  const id = parseInt(req.params.id); 
  const usuario = await prisma.usuario.findUnique({ where: {id} });

    if (usuario === null) {
      res.status(404).json({ error: "Usuario não encontrado" }); 
    } else {
      res.json(usuario);
    }
});

app.get("/usuarios/:id/quadras", async (req, res) => {
  const idUsuario = parseInt(req.params.id);

  try {
    const locacoes = await prisma.locacao.findMany({
      where: { idUsuario: idUsuario },
      include: {
        quadra: true,
      },
    });

    if (locacoes.length === 0) {
      return res.status(404).json({ error: "Este usuário não alugou nenhuma quadra." });
    }

    //const quadras = locacoes.map(locacao => locacao.quadra);

    res.json(locacoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao obter as quadras alugadas pelo usuário." });
  }
});

app.post("/usuarios", async (req, res) => {

  if ((req.body.nome === undefined) || (req.body.nascimento === undefined) || (req.body.email === undefined) || (req.body.telefone === undefined) || (req.body.cpf === undefined) || (req.body.senha === undefined) ) { 
    res.status(400).send("Campos obrigatórios faltantes");
  } else {
    const novoUsuario = await prisma.usuario.create({ data: {
      nome: req.body.nome,
      nascimento: req.body.nascimento,
      email: req.body.email,
      telefone: req.body.telefone,
      cpf: req.body.cpf,
      senha: req.body.senha
    }});
    
    res.status(201).location(`/usuarios/${novoUsuario.id}`).send();
  }
});

app.post("/autenticar", async (req, res) => {
  const { cpf, senha } = req.body;

  const usuario = await prisma.usuario.findFirst({
    where: { cpf, senha }
  });

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  res.json(usuario);
});


// Locações ----------------------------------------------------------------------------------------------------------------------------------------- //

app.get('/locacoes', async (req, res) => {
  const locacoes = await prisma.locacao.findMany();
  res.json(locacoes); 
});

app.get("/locacoes/:id", async (req, res) => {

  const id = parseInt(req.params.id); 
  const locacao = await prisma.locacao.findUnique({ where: {id} });

    if (locacao === null) {
      res.status(404).json({ error: "Locação não encontrada" }); 
    } else {
      res.json(locacao); 
    }
});

app.post("/locacoes", async (req, res) => {

  if (!req.body.id_usuario || !req.body.id_quadra || req.body.data_hora == null) { 
    res.status(400).send("Campos obrigatórios faltantes");
  } else {
    const novaLocacao = await prisma.locacao.create({ data: {
      idUsuario: req.body.id_usuario,
      idQuadra: req.body.id_quadra,
      dataHora: req.body.data_hora.toString()
    }});
    res.status(201).location(`/locacoes/${novaLocacao.id}`).send();
  }
});

// fazer um get em locacoes buscando as quadras pelo id do usário

// Favoritos --------------------------------------------------------------------------------------------------------------------------------------------- //

app.get('/favoritos', async (req, res) => {
  const favoritos = await prisma.favorito.findMany();
  res.json(favoritos); 
});

app.get("/favoritos/:id", async (req, res) => {
  
  const id = parseInt(req.params.id); 
  const favorito = await prisma.favorito.findUnique({ where: {id} });

    if (favorito === null) {
      res.status(404).json({ error: "favorito não encontrado" }); 
    } else {
      res.json(favorito);
    }
  });
  
app.post("/favoritos", async (req, res) => {
    const { id_usuario, id_quadra, favoritado_em } = req.body;

    if (!id_usuario || !id_quadra || !favoritado_em) {
        return res.status(400).send("Campos obrigatórios faltantes");
    }

    try {
        const favoritoExistente = await prisma.favorito.findFirst({
            where: {
                idUsuario: id_usuario,
                idQuadra: id_quadra
            }
        });

        if (favoritoExistente) {
            return res.status(409).json({ error: "Já está favoritado" });
        }

        const novoFavorito = await prisma.favorito.create({
            data: {
                idUsuario: id_usuario,
                idQuadra: id_quadra,
                favoritadoEm: new Date(favoritado_em)
            }
        });

        res.status(201).json(novoFavorito);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/favoritos/:id", async (req, res) => {
  const id = parseInt(req.params.id); 
  
  try {
    await prisma.favorito.delete({
      where: { id }
    });
    res.status(202).send();
  } catch(error) {
    res.status(404).send("favorito não encontrado");
  }
});


// Avaliações -------------------------------------------------------------------------------------------------------------------------------------------- //

app.get('/avaliacoes', async (req, res) => {
  const avaliacoes = await prisma.avaliacao.findMany();
  res.json(avaliacoes); 
});

app.get('/avaliacoes/media/:id_quadra', async (req, res) => {
    const id = parseInt(req.params.id_quadra);

    const avaliacoes = await prisma.avaliacao.findMany({
        where: { idQuadra: id },
        select: { nota: true }
    });

    const total = avaliacoes.length;
    const media = total > 0 
        ? avaliacoes.reduce((acc, cur) => acc + cur.nota, 0) / total 
        : 0;

    res.json({ media: media.toFixed(1), total });
});


app.post("/avaliacoes", async (req, res) => {
    const { id_usuario, id_quadra, nota, comentario } = req.body;

    if (!id_usuario || !id_quadra || nota == null) {
        return res.status(400).send("Campos obrigatórios faltantes");
    }

    try {
        // Verifica se já existe avaliação desse usuário para essa quadra
        const avaliacaoExistente = await prisma.avaliacao.findFirst({
            where: {
                idUsuario: id_usuario,
                idQuadra: id_quadra
            }
        });

        if (avaliacaoExistente) {
            // Atualiza a avaliação existente
            const avaliacaoAtualizada = await prisma.avaliacao.update({
                where: { id: avaliacaoExistente.id },
                data: {
                    nota,
                    comentario: comentario || ""
                }
            });

            return res.status(200).send("Avaliação atualizada com sucesso!");
        }

        // Se não existir, cria nova avaliação
        const novaAvaliacao = await prisma.avaliacao.create({
            data: {
                idUsuario: id_usuario,
                idQuadra: id_quadra,
                nota,
                comentario: comentario || ""
            }
        });

        res.status(201).send("Avaliação criada com sucesso!");

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno no servidor");
    }
});



// -------------------------------------------------------------------------------------------------------------------------------------------- //


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


// Datepicker