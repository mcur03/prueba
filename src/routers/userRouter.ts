import { Router } from "express";
import UserController from "../controller/userController";
import { validateToken } from "../Middleware/userMiddleware";


const router = Router();

router.get('/perfil/:id', validateToken,UserController.perfilUsuario);
router.get('/login', UserController.login)

export default router;