import { Router } from "express";
import UserController from "../controller/userController";
import { validateToken,verifyToken } from '../Middleware/userMiddleware'

const router = Router();

router.get('/perfil', verifyToken, UserController.perfilUsuario);
router.get('/login', UserController.login);
router.get('/ordenes', verifyToken, UserController.allOrdenes);
router.get('/infoOrden/:orderId', verifyToken, UserController.detalleOrden);
router.get('/orden/:orderId', verifyToken, UserController.ordenBynumero);
router.get('/ordenesPorFecha', verifyToken, UserController.consultaRangoFecha);

export default router;