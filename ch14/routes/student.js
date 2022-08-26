import  express  from "express";
import { studentController } from "../controllers/studentController.js";
import myLogger from "../middleware/logger-middleware.js";

const router = express.Router()

//  router level middleware

// router.use(myLogger)
router.use('/student',myLogger)

router.get('/student',studentController)


export default router