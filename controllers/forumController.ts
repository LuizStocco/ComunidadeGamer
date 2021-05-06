import { Request, Response } from 'express';
import {ForumModel} from "../models/forum";

class ForumController {
    async create(request: Request, response: Response) {
        const forum = request.body;
        const forumCadastrado = await ForumModel.create(forum);
        response.status(200);
        response.json(forumCadastrado)
    }

    async getForunsByCategoria(request: Request , response: Response) {
        const categoria = request.params.categoria;
        const foruns = await ForumModel.find({categoria:categoria })
        response.json(foruns)
        response.status(200)
    }
}

export default ForumController;