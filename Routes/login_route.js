import { Router } from 'express';
import { index, check,register,log_out } from '../Controller/login.js';
import multer from "multer";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Upload/')
    },
    filename: function (req, file, cb) { 
      cb(null, file.fieldname + '-' +Date.now()+'.pdf')
    }
  })
  
  var upload = multer({ storage: storage })

const router = new Router();


router.get('/', index);
router.get('/log_out', log_out);

router.post('/check', check);
router.post('/register', upload.single('Tourguide_papers') , register);










export default router;