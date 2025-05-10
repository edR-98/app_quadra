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

// ------------------------------------------------------------------------------------------------------------------------------------------------ // 


app.post("/produtos", async (req, res) => {

  if ((req.body.nome === undefined) || (req.body.preco === undefined) ) { 
    res.status(400).send("Campos obrigatórios faltantes");
  } else {
    const novoProduto = await prisma.produto.create({ data: {
      nome: req.body.nome,
      preco: req.body.preco
    }});
    res.status(201).location(`/produtos/${novoProduto.id}`).send();
  }
});

app.put("/produtos/:id", async (req, res) => {
  const id = parseInt(req.params.id); 

  if ((req.body.nome === undefined) || (req.body.preco === undefined) ) { 
    res.status(400).send("Campos obrigatórios faltantes");
  } else {
  try {
    await prisma.produto.update({
      where: { id },
      data: { 
        nome: req.body.nome,
        preco: req.body.preco
      } 
    });
    res.status(204).send();
  } catch(error) {
    res.status(404).send("Produto não encontrado");
  }
}
});

app.delete("/produtos/:id", async (req, res) => {
  const id = parseInt(req.params.id); 
  
  try {
    await prisma.produto.delete({
      where: { id }
    });
    res.status(202).send();
  } catch(error) {
    res.status(404).send("Produto não encontrado");
  }
});


// Quadras ------------------------------------------------------------------------------------------------------------------------------------------------ // 

app.get('/quadras', async (req, res) => {
  
  // if ((req.query.arquibancada !== "true") && (req.query.arquibancada !== "false")) {
  //   return res.status(400).send("Valor de filtro não permitido");
    
  // const precoMin = req.query.preco_min; <--- Essa linha é para o preço --->
  // const precoMax = req.query.preco_max;

  const tipoQuadra = (req.query.tipo_quadra === '') ? undefined : req.query.tipo_quadra;
  const iluminacao = (req.query.iluminacao === undefined) ? undefined : req.query.iluminacao === "true";
  const vestiarios = req.query.vestiarios === "true";
  const bebedouro = req.query.bebedouro === "true";
  const estacionamento = req.query.estacionamento === "true";
  const arquibancada = req.query.arquibancada === "true";
  const coberta = req.query.coberta === "true";
  const acessibilidade = req.query.acessibilidade === "true";
  const wifi = req.query.wifi === "true";


  const quadras = await prisma.quadra.findMany({ where: {
    tipoQuadra,
    iluminacao,
    // vestiarios,
    // bebedouro,
    // estacionamento,
    // arquibancada,
    // coberta,
    // acessibilidade,
    // wifi
  }}); 
  res.json(quadras); 
});

// app.get('/quadras', async (req, res) => {
//   const {
//     tipoQuadra,
//     iluminacao,
//     vestiarios,
//     bebedouro,
//     estacionamento,
//     arquibancada,
//     coberta,
//     acessibilidade,
//     wifi
//   } = req.query;

//   const filtros = {};

//   if (tipoQuadra) filtros.tipo_quadra = tipo_quadra;
//   if (iluminacao !== undefined) filtros.iluminacao = iluminacao === "true";
//   if (vestiarios !== undefined) filtros.vestiarios = vestiarios === "true";
//   if (bebedouro !== undefined) filtros.bebedouro = bebedouro === "true";
//   if (estacionamento !== undefined) filtros.estacionamento = estacionamento === "true";
//   if (arquibancada !== undefined) filtros.arquibancada = arquibancada === "true";
//   if (coberta !== undefined) filtros.coberta = coberta === "true";
//   if (acessibilidade !== undefined) filtros.acessibilidade = acessibilidade === "true";
//   if (wifi !== undefined) filtros.wi_fi = wifi === "true";

//   try {
//     const quadras = await prisma.quadra.findMany({
//       where: filtros
//     });
//     res.json(quadras);
//   } catch (error) {
//     console.error('Erro ao buscar quadras:', error);
//     res.status(500).json({ error: 'Erro ao buscar quadras' });
//   }
// });


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


// Usuários ------------------------------------------------------------------------------------------------------------------------------------------------ //

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
      where: { id_usuario: idUsuario },
      include: {
        quadra: true, 
      },
    });

    if (locacoes.length === 0) {
      return res.status(404).json({ error: "Este usuário não alugou nenhuma quadra." });
    }

    const quadras = locacoes.map((locacao) => locacao.quadra);

    res.json(quadras); 
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter as quadras alugadas pelo usuário" });
  }
});

// FAzer um post para criar conta

// fazer um post para autenticar o usuário


// Locações ------------------------------------------------------------------------------------------------------------------------------------------------ //

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

// fazer um post em locacoes

// fazer um get em locacoes buscando as quadras pelo id do usário

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
