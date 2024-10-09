const express = require('express')
const router = express.Router()

const cuser = require('../controllers/user')

router.post('/create', cuser.create_user)
    

router.get( '/read', cuser.read_user)


router.get( '/show/:id', cuser.get_user_by_id)


router.put( '/update/:id', cuser.put_user_by_id)


router.delete('delete/:id', cuser.delete_user)
            
module.exports = router


