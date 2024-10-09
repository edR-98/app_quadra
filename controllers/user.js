var vusers = []

function create_user(req, res){
    let {genero, idade, nome} = req.body    
    var ouser = {
            "id" : vusers.length+1,
            "genero" : genero,
            "idade" : idade,
            "nome" : nome,
            "deletedAt": null      

        }
        vusers.push(ouser)

        return res.status(201).json({
            message: "Usuário criado.",
            db: vusers
        })

}

function read_user(req, res) {
    return res.status(200).json({
        message: "Listando todos os usuários...", 
        db : vusers.filter(u => u.deletedAt == null)  // Aula 6
    } )
}

function get_user_by_id(req, res) {  /// Função que recupera usuário por ID específica.
    //let id = req.params.id - Código alternativo.
     let { id } = req.params;

     const idx = vusers[idx].findIndex(u => u.id == id)

        if(idx == -1 || vusers.deletedAt != null){  //Aula 6

            return res.status(404).json({
                message: "Usuário não encontrado.",
                db: null
            })
        }

            return res.status(202).json ({
                message: "Usuário encontrado.",
                db: vusers[idx]
         })
    
} 

function put_user_by_id(req, res){
    //let id = req.params.id
    let { id } = req.params;
            
    const idx = vusers.findIndex(u => u.id == id)

       if(idx === -1 || vusers[idx].deletedAt != null){  //Aula 6
       

           return res.status(404).json({
               message: "Usuário não encontrado",
               db: null
           })
       }

       let {genero, idade, nome}= req.body

       if(genero) vusers[idx].genero = genero
       if(idade) vusers[idx].idade = idade
       if(nome) vusers[idx].nome = nome

           return res.status(202).json ({
               message: "Usuário encontrado e modificado.",
               db: vusers[idx]
})    
}

function delete_user(req, res){ 
    let {id} = req.params

    const idx = vusers.findIndex(u => u.id == id)
    if(idx != -1){
        vusers[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Foi de base",
        })
    }

    return res.status(404).json({
        message: "Não encontrado",
    })
}

module.exports = {
    create_user,
    read_user,
    get_user_by_id,
    put_user_by_id,
    delete_user
}