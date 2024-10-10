var vevent = []

function create_event(pevento, pposicao, ptime, plocal, pidusuario){
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

 Module.exports = {
    create_event,
    delete_event,
    update_event,
 }