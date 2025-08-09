import type {
  Building as BuildingType,
  Recipe as RecipeType,
  Amount,
} from "../data/1.8/buildings";
import "./Building.css";
import { Stars } from "./Stars";
import { GoodsImage } from "./GoodsImage";
import { T } from "../components/T";
import { Specialization } from "../components/Specialization";
import { SpeciesImage } from "./SpeciesImage";
import classnames from "classnames";

interface IngredientProps {
  ingredient: Amount[];
}
const Ingredient = ({ ingredient }: IngredientProps) => {
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

interface ProductProps {
  product: Amount;
}
const Product = ({ product }: ProductProps) => {
  return (
    <div className="part product">
      <GoodsImage type="square" id={product.id} nr={product.amount} />
    </div>
  );
};

interface RecipeProps {
  recipe: RecipeType;
  highlightState: false | "on" | "off";
}
const Recipe = ({ recipe, highlightState }: RecipeProps) => {
  return (
    <div className={classnames("recipe", highlightState)}>
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

interface SpecializationsProps {
  specializations: string[];
}
const Specializations = ({ specializations }: SpecializationsProps) => {
  return (
    <>
      {specializations.map((spec) => (
        <Specialization key={spec}>{spec}</Specialization>
      ))}
    </>
  );
};

interface BuildingProps {
  building: BuildingType;
  stars?: number;
  highlightProduct?: string | false;
  highlightIngredient?: string | false;
}
export const Building = ({
  building: { recipes = [], id, specialization, speciesRequired, workers },
  stars,
  highlightProduct,
  highlightIngredient,
}: BuildingProps) => {
  const filteredRecipes = stars
    ? recipes?.filter((r) => r.stars === stars)
    : recipes;

  return (
    <details className="building">
      <summary className="building-header">
        <span className="building-title">
          <T>{id}</T>

          {speciesRequired && (
            <span className="building-required-species">
              <SpeciesImage
                size="small"
                species={speciesRequired}
                title={`This blueprint is only available with ${speciesRequired} in the settlement`}
              />
            </span>
          )}
          <Specializations specializations={specialization} />
        </span>
        <span className="building-products">
          {recipes?.map((r) => (
            <GoodsImage
              size="small"
              type="square"
              key={r.product.id}
              id={r.product.id}
              highlightState={
                (Boolean(highlightProduct) &&
                  r.product.id === highlightProduct) ||
                (Boolean(highlightIngredient) &&
                  r.ingredients
                    .flat()
                    .some((r) => r.id === highlightIngredient))
                  ? "on"
                  : "off"
              }
            />
          ))}
          {workers && (
            <div
              className="worker-img"
              data-workers={workers}
              title={`${workers} workers`}
            >
              <img src="img/worker.png" alt="Worker" />
            </div>
          )}
        </span>
      </summary>
      <div className="building-recipes">
        {filteredRecipes.map((r, index) => (
          <Recipe
            recipe={r}
            key={index}
            highlightState={
              (Boolean(highlightProduct) &&
                r.product.id === highlightProduct) ||
              (Boolean(highlightIngredient) &&
                r.ingredients.flat().some((r) => r.id === highlightIngredient))
                ? "on"
                : "off"
            }
          />
        ))}
        {recipes.length === 0 ? <p>Building has no recipes!</p> : ""}
      </div>
    </details>
  );
};
