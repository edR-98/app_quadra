var vevent = []

function create_event(req, res){
    let {evento, posicao, time, local, id } = req.body    
    var oevent = {
            "id" : vusers.length+1,
            "evento" : evento,
            "posicao" : posicao,
            "time" : time,
            "local" : local,
            "deletedAt": null      

        }
        vusers.push(oevent)

        return res.status(201).json({
            message: "Usuário criado.",
            db: vevent
        })

}
function delete_event(req, res){
    
    let (id) = req.params
    
    const idx = vevent.findIndex(u => u.id == id)
    if(idx != -1){
        vevent[idx].deletedAT = new Date()
        return res.status(203).json({
            message: "Foi de Base"
            
        })
    }
    
    return res.status(203).json({
        message: "evento encontrado"       
    })
 }
function update_event(req, res){
            let (id) = req.params
    
            const idx = vevent.findIndex(u => u.id == id)
             if(idx == -1){
              vevent[idx].deletedAT != new Date()
              return res.status(404).json({
                    message: "nao encontrado",
                  
                })
             }
           return res.status(404).json({
        message: "evento encontrado"
           })
                
 }
 function show_event (req, res) {

    let { id } = req.params;

    const idx = vpayments.findIndex(u => u.id == id)

    if (idx === -1 || vpayments[idx].deletedAt != null){
        return res.status(404).json({
        message: "Evento não encontrado",
        db: null
    })
}

    return res.status(200).json({
        message: "evento encontrado",
        db: vevent[idx]
    })
}
function read_event(req, res) {

    return res.status(202).json({
        message: "evento",
    //  db: vevent[idx]
        db: vevent.filter( u => u.deletedAt == null)
    })
}
 module.exports = {
    create_event,
    delete_event,
    update_event,
    show_event,
    read_event
 }