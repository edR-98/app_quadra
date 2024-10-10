const express = require(`express`)
const router = express.Router()

const cevent = require('../controllers/evento')

router.post('/create', cevent.create_event)
 
router.get( '/read/', cevent.read_event)
  
router.get( '/show/:id', cevent.show_event)
    
router.put( '/update/:id', cevent.update_event)

router.delete('/delete/:id', cevent.delete_event)

module.exports = router 





   
