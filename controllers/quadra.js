var vquadras = []

function create_quadra(req, res){
  const {quadra, disponivel,tempo,largura,comprimento,equipamentos} = req.body
    var oquadra = {
      "id":vquadras.length,
      "quadra": quadra,
      "disponivel":disponivel,
      "tempo":tempo,
      "largura":largura,
      "comprimento":comprimento,
      "equipamentos":equipamentos,
      "deletedAt": null
    }
    vquadras.push(oquadra)
    return res.status(201).json({
      message: "Quadra criada",
      db:oquadra
    })  
}



function read_quadra(req, res) {
    return res.status(201).json({
      message: "Todas as Quadras",
      db: vquadras.filter(u => u.deletedAt == null)
    })  
  }

  function show_quadra(req, res){
    let {id} = req.params
  
    const idx= vquadras.findIndex(u=> u.id == id)
  
    if(idx == -1 || vquadras[idx].deletedAt != null){
      return res.status(404).json({
        message:"Não encontrado",
        db: null
      })  
    }

    return res.status(201).json({
      message: "Quadra encontrada",
      db:vquadras[idx]
    })  
}  

function update_quadra(req, res){
    let {id}= req.params

    const idx = vquadras.findIndex(u => u.id == id)

    if(idx == -1 || vquadras[idx].deletedAt != null){
      return res.status(404).json({
          message:"Não encontrado",
          db: null

      })
    }

    const {quadra,disponivel,tempo,largura,comprimento,equipamentos} = req.body

    if(quadra) vquadras[idx].quadra = quadra
    if(disponivel) vquadras[idx].disponivel= disponivel
    if(tempo) vquadras[idx].tempo=tempo
    if(largura) vquadras[idx].largura = largura
    if(comprimento) vquadras[idx].comprimento= comprimento
    if(equipamentos) vquadras[idx].equipamentos=equipamentos


    return res.status(202).json({
        message:"Encontrei",
        db:vquadras[idx]
    })    

}

function delete_quadra(req,res){
    let{id} =req.params
  
    const idx = vquadras.findIndex(u => u.id == id)
    if(idx != -1 || vquadras.deletedAt != null){

      vquadras[idx].deletedAt = new Date()

      return res.status(203).json({
        message: "Foi de base"
      })
    }

    return res.status(404).json({
          message:"Não encontrado"
    })
  }
  
  
  module.exports = {
    read_quadra,
    show_quadra,
    create_quadra,
    update_quadra,
    delete_quadra
  }