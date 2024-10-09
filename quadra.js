const express = require('express')
const router = express.Router()

//var vquadras = ["Quadra1", "Quadra2", "Quadra3", "Quadra4", "Quadra5", "Quadra6"]
//for(let i=0; i< vquadras.length; i++ ){
  // console.log(vquadras[i])
//}

//var vquadras = []

//function create_quadra(pquadra, pdisponivel,ptempo, plargura,pcomprimento, pequipamentos){
    //var ouser = {
    //    "quadra": pquadra,
        //"disponiveis":pdisponivel,
       // "tempo":ptempo,
       // "largura":plargura,
       // "comprimento":pcomprimento,
       // "equipamentos":pequipamentos
     // }
     // vquadras.push(ouser)
//}

//create_quadra("quadra1", true, 50, 50, 100, ["bola,rede"])
//create_quadra("quadra2", false, 50, 45, 90, ["bola,rede"])
//create_quadra("quadra3", true, 50, 55, 110, ["bola,rede"])
//create_quadra("quadra4", false, 50, 35, 80, ["bola,rede"])
//create_quadra("quadra5", true, 50, 25, 40, ["bola,rede"])
//create_quadra("quadra6", false, 50, 30, 70, ["bola,rede"])

//console.log(vquadras)


var vquadras = []

function create_quadra(pquadra, pdisponivel,ptempo, plargura,pcomprimento, pequipamentos){
    var ouser = {
      "id":vquadras.length,
      "quadra": pquadra,
      "disponiveis":pdisponivel,
      "tempo":ptempo,
      "largura":plargura,
      "comprimento":pcomprimento,
      "equipamentos":pequipamentos,
      "deletedAt": null
    }
    vquadras.push(ouser)
}



router.post('/quadra', (req, res) => {
  let{quadra, disponivel,tempo, largura,comprimento, equipamentos} = req.body
  create_quadra(quadra, disponivel,tempo, largura,comprimento, equipamentos)
    return res.status(201).json({
     message: "Quadra ",
     db: vquadras
    }) 
})

function read_quadra(req, res) {
  return res.status(201).json({
    message: "Todas as Quadras",
    db: vquadras.filter(u => u.deletedAt == null)
  })  
}

router.get('/quadras', (req, res) => {
  return res.status(202).json({
     message: "todos",
     db: vquadras
  })
})


router.get('/quadras/:id', (req, res) => {
  let {id} = req.params

  const idx = vquadras.findIndex(u => u.id == id)

 if(idx == -1){

  return res.status(404).json({

    message: "Não encontrado",
    db:null
  })
 } 

  return res.status(202).json({
     message: "Encontrei",
     db: vquadras[idx]

    })
})

router.put('/quadras/:id', (req, res) => {
  let {id} = req.params
  
  const idx = vquadras.findIndex(u => u.id == id)
  
  if(idx== -1){
    return res.status(404).json({
  
      message: "Não encontrado",
      db:null
    })
  } 

   let {quadra, disponivel,tempo, largura,comprimento, equipamentos}=req.body

   if(quadra) vquadras[idx].quadra= quadra
   if(disponivel)vquadras[idx].disponivel= disponivel
   if(tempo)vquadras[idx].tempo= tempo
   if(largura)vquadras[idx].largura= largura 
   if(comprimento)vquadras[idx].comprimento= comprimento
   if(equipamentos) vquadras[idx].equipamentos= equipamentos

    return res.status(202).json({
       message: "Encontrei",
       db: vquadras[idx]
  
      })
})

function show_quadra(req, res){
  let {id} = req.params

  const idx= vquadras.findIndex(u=> u.id == id)

  if(idx == -1 || vquadras[idx].deletedAt != null){
    return res.status(404).json({
      message:"Não encontrado",
      db: null
    })  
  }

}
router.get('/user/:id', show_quadra)


function update_quadra(req, res){
    let {id}= req.params

    const idx = vquadras.findIndex(u => u.id == id)

    if(idx == -1 || vquadras[idx].deletedAt != null){
      return res.status(404).json({
          message:"Não encontrado",
          db: null

      })
    }

    return res.status(202).json({
        message:"Encontrei",
        db:vquadras[idx]
    })    

}

router.put('/quadra/:id/', update_quadra)

function delete_quadra(req,res){
  let{id} =req.params

  const idx = vquadras.findIndex(u => u.id == id)
  if(idx != -1 || vquadras.deletedAt != null){
      return res.status(203).json({
        message: "Foi de base"
      })
  }      
  return res.status(404).json({
        message:"Não encontrado"
  })
}
router.delete('/quadra/:id', delete_quadra)

module.exports = router