import {
  Building as BuildingType,
  Recipe as RecipeType,
  Amount,
} from "../data/buildings";
import "./Building.css";
import { Stars } from "./Stars";
import { GoodsImage } from "./GoodsImage";
import { T } from "../components/T";

type BuildingProps = {
  building: BuildingType;
  stars?: number;
};

const Ingredient = ({ ingredient }: { ingredient: Amount[] }) => {
  return (
    <div className="ingredient">
      {ingredient.map(({ id, amount }) => (
        <div key={id} className="part">
          <GoodsImage id={id} nr={amount} />
        </div>
      ))}
    </div>
  );
};

const Product = ({ product }: { product: Amount }) => {
  return (
    <div className="part product">
      <GoodsImage type="square" id={product.id} nr={product.amount} />
    </div>
  );
};

const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <div className="recipe">
      <h3 className="recipe-title">
        <GoodsImage size="small" id={recipe.product.id} type="square" />
        <T className="recipe-name">{recipe.product.id}</T>
        <Stars nr={recipe.stars} />
      </h3>
      <div className="recipe-ingredients">
        {recipe.ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
        <Product product={recipe.product} />
      </div>
    </div>
  );
};

export const Building = ({ building, stars }: BuildingProps) => {
  const recipes = stars
    ? building.recipes.filter((r) => r.stars === stars)
    : building.recipes;
  const products = recipes.map((r) => r.product);

  return (
    <details className="building">
      <summary className="building-title">
        {/* <img src={`img/buildings/${building.id}.png`} /> */}
        <T>{building.id}</T>
        <span className="building-products">
          {products.map((p) => (
            <GoodsImage size="small" type="square" key={p.id} id={p.id} />
          ))}
        </span>
      </summary>
      <div className="building-recipes">
        {building.recipes.map((r, index) => (
          <Recipe recipe={r} key={index} />
        ))}
        {building.recipes.length === 0 ? <p>Building has no recipes!</p> : ""}
      </div>
    </details>
  );
};
