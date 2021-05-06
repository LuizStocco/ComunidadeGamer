import { Request, Response } from "express";
import { UserModel } from "../models/user";
import { NoticiaModel } from "../models/noticia";

class NoticiaController {
  async create(request: Request, response: Response) {

    const noticia = request.body;

    //Cria uma noticia no mongodb a partir do model 
    const noticiaCadastrada = await NoticiaModel.create(noticia);

    // Busca a noticia a partir do UsuarioId enviado na requisição
    const Noticia = await NoticiaModel.findById(noticia);

    if (!noticia) {
      response.status(400).send("Noticia não encontrada");
      return;
    }


  }

  async getNoticiasByUsuarioId(request: Request, response: Response) {
    // request.headers.authorization
    const usuarioId = request.params.usuarioId;
    if (!usuarioId) {
      response.status(400).send("usuário inválido")
      return;
    }
    const noticias = await NoticiaModel.find({ usuarioId: usuarioId });

    response.status(200).json(noticias)
  }

  async getNoticiasByCategoria(request:Request, response: Response){

    const categoria = request.params.categoria;
    const noticias = await NoticiaModel.find({categoria: categoria})
    response.json(noticias)
    response.status(200)

  }



}
export default NoticiaController;
