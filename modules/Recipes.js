import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
const RecipesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
    variety: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imageId: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
RecipesSchema.plugin(slug);

export default mongoose.model("Recipes", RecipesSchema);
