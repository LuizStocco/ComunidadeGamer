import { getModelForClass, prop } from "@typegoose/typegoose";

class Publicacao{

  @prop ({ required: [true, "A categoria é obrigatoria "] })
  public categoria!: String;

  @prop ({ required: [true, "O titulo é Obrigatorio"] })
  public titulo!: String;

  @prop ({ required: [true, "O conteudo é Obrigaturio"] })
  public conteudo!:String;
  
  @prop ({default:Date.now})
  public criadoEm!: Date;
  
  @prop ({required: [true,"O Usuario é Obrigatorio" ]})
  public usuarioId!:String;
}

const PublicacaoModel = getModelForClass(Publicacao)

export { PublicacaoModel, Publicacao, }