import { getModelForClass, prop } from "@typegoose/typegoose";

import { Publicacao } from "./publicacao";


class User {
  @prop({ required: [true, "O campo Nick Name é Obrigatorio"] })
  public nickname!: String;

  @prop({ required: [true, "A idade é obrigatória"] })
  public idade!: Number;

  @prop({default:Date.now})
  public criadoEm!: Date;
  
  @prop()
  public publicacoes? : [Publicacao]
}

const UserModel = getModelForClass(User);

export {  UserModel }