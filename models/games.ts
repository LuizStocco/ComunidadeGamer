import { getModelForClass, prop } from "@typegoose/typegoose";


class Games{

  @prop ({required:[true,"Nick Name é obrigatorio"] })
  public nickname!: String;

  @prop ({required: [true,"O genero é obrigatorio"]})
  public genero!:String;

  @prop ({default:Date.now})
  public criadoEm!: Date;
 
  @prop ()
  public desenvolvedora!: String;
 
 
  @prop ()
  public anoLancamento!: Number;

}

const GamesModel = getModelForClass(Games)
export { GamesModel , Games ,}

