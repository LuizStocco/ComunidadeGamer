import { getModelForClass, prop } from "@typegoose/typegoose";
  class Forum {
    @prop ({ required:[ true,"O nome do Topico é Obrigatorio" ]})
    public nome!: String;

    @prop ({required: [true, "A categoria é Obrigado"]})
    public categoria!: String;

  }

const ForumModel = getModelForClass(Forum)
export { ForumModel , Forum ,}