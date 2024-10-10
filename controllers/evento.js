var vevent = []

function create_event(req, res){
    var event = {
    "evento" : pevento,
     "posicao" : pposicao,
     "time" : ptime,
     "local" : plocal,
     "id" : vevent.length+1,
    "deletedta" :null
    }
    vevent.push(event)
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
    
    function show_event(req, res){
        
        let {id} = req.params
        
        const idx = vusers.findIndex(u => u.id == id)
        
        if(idx == -1){
            
            return res.status(404).json({
                message: "nao encontrado",
                db: null       
            })
            app.delete('/event/:id', delete_event)
            
            app.listen(3000, () => {
                 console.log ('http://localhost:3000')
            
            })
            
            }
            } 
            
            
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
    read_event,
 }