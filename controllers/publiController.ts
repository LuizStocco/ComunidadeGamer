import { Request, Response } from "express";
import { PublicacaoModel } from "../models/publicacao";
import { UserModel } from "../models/user";

class PubliController {
    async create(request: Request, response: Response) {
        // Pega o objetoda publicação enviado no body da requisição
        const publi = request.body;

        // Cria a publicação no mongodb a partir do Model
        const publiCadastrada = await PublicacaoModel.create(publi);

        // Busca usuário a partir do usuarioId enviado na requisição
        const user = await UserModel.findById(publi.usuarioId);
        // verifica se o usuário existe na collection, se não existir, retorna Bad Request
        if (!user) {
            response.status(400).send("Usuário não encontrado");
            return;
        }

        // adiciona a publicação a lista de publicações do usuário
        //user?.publicacoes.push(publi);
        await user?.save();

        // retorna status de sucesso
        response.status(200);
        response.json(publiCadastrada);
    }


async getpublibyCategoria(request:Request,response:Response){
  const categoria = request.params.categoria;
  const publicacao= await PublicacaoModel.find({categoria: categoria})
  response.json(publicacao)
  response.status(200) 
  }
}

export default PubliController;