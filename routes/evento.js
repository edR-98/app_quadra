const express = require(`express`)
const router = express.Router()
 
router.use( express.json() )


 

 
router.post('/user', cevent.create_user)
  
    let{evento, posicao, time, local, usuario} = req.body

     create_event(evento, posicao, time, local, usuario)

    return res.status(201).json({
        message: "Usuario criado",
        
    })

 
    router.get( '/user/', cevent.read_user)
  
    let { id } = req.params;

 
    const idx = vevent.findIndex(u => u.id == id)
 
    if(idx === -1)
    return res.status(404).json({
        message: "nao encontrado",
        db: null
    })

 
router.get( '/user/:id', cevent.get_user_by_id)
    
   

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 router.put( '/user/:id', cevent.put_user_by_id){
  let { id } = req.params;

  const idx = vevent.findIndex(u => u.id = id)

  if(idx === -1)
      return res.status(404).json({
    message: "Nao encontrado",
    db: null
    })
    
    let{posicao, time, local} = req.body

    if(posicao) vusers[idx].posicao = posicao
    if(time)  vusers[idx].time = time
    if(local)   vusers[idx].local = local

    return res.status(404).json({
        message: "Nao encontrado",
        db: null
        })
        
 }




        
module.exports = router 





   
