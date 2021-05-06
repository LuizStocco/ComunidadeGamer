import {Request, Response } from "express";
import {GamesModel} from "../models/games";

class GamesController{
async create(request:Request,response:Response){
  const game = request.body;
  console.log(game);
  const gameCadastrado = await GamesModel.create(game);
  response.status(200);
  response.json(gameCadastrado);
}

async getGamesbyCategoria(request:Request,response:Response){
  const categoria = request.params.categoria;
  const games = await GamesModel.find({categoria: categoria})
  response.json(games)
  response.status(200) 
  }

}
export {GamesController,} 