import { Router } from "express";
import PubliController from "../controllers/publiController";
import UserController from "../controllers/UserController";
import ForumController from "../controllers/forumController";
import NoticiaController from "../controllers/noticiaController";
import { GamesController } from "../controllers/gamesController";


const router = Router();
// const cicloController = new CicloController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor
// router.get("/ciclo/listar", cicloController.listar);
// router.get("/ciclo/listar/:rg/:telefone", cicloController.listarPorId);
// router.post("/ciclo/cadastrar", cicloController.cadastrar);

const userController = new UserController();
const publiController = new PubliController();
const forumController = new ForumController();
const noticiaController = new NoticiaController();
const gamesController = new GamesController();

router.post("/user", userController.create);
router.get("/user/:userId", userController.getUserById);
router.post("/publicacoes", publiController.create);
router.get("/publicacoes/:categoria",publiController.getpublibyCategoria);
router.post("/noticias", noticiaController.create);
router.get("/noticias/:usuarioId", noticiaController.getNoticiasByUsuarioId);
router.get("/noticias/:categoria", noticiaController.getNoticiasByCategoria);
// trás o usuário buscado pelo Id (userId)
// GET HTTP://LocalHost:3000/user/6084b391e9af8444f4dcfc38
// aonde "/6084b391e9af8444f4dcfc38" corresponde ao userId
router.post("/foruns", forumController.create);
router.get("/foruns/:categoria", forumController.getForunsByCategoria);
router.post("/games", gamesController.create);
router.get("/games/:categoria",gamesController.getGamesbyCategoria );

export { router };
