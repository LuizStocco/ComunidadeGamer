import { Request, Response } from "express";
import {UserModel} from "../models/user";

class UserController {
  async create(request: Request, response: Response) {
    const user = request.body;
    console.log(user);
    const userCadastrado = await UserModel.create(user);
    response.status(200);
    response.json(userCadastrado);
  }

  async getUserById(request: Request, response: Response) {
    // pega a variável userId que foi passada na requisição
    const userId = request.params.userId;

    // busca na collection "users" através da UserModel, um usuário aonde o id seja igual ao userId
    let user = await UserModel.findById(userId);
    
    response.json(user);
    response.status(200);
  }
}


export default UserController;