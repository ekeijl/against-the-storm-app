import type {
  Building as BuildingType,
  Recipe as RecipeType,
  Amount,
} from "../data/1.5/buildings";
import "./Building.css";
import { Stars } from "./Stars";
import { GoodsImage } from "./GoodsImage";
import { T } from "../components/T";
import { Specialization } from "../components/Specialization";
import { SpeciesImage } from "./SpeciesImage";

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
}
const Recipe = ({ recipe }: RecipeProps) => {
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
}
export const Building = ({
  building: { recipes = [], id, specialization, speciesRequired },
  stars,
}: BuildingProps): JSX.Element => {
  const filteredRecipes = stars
    ? recipes?.filter((r) => r.stars === stars)
    : recipes;
  const products = recipes?.map((r) => r.product) ?? [];

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
          {products.map((p) => (
            <GoodsImage size="small" type="square" key={p.id} id={p.id} />
          ))}
        </span>
      </summary>
      <div className="building-recipes">
        {filteredRecipes.map((r, index) => (
          <Recipe recipe={r} key={index} />
        ))}
        {recipes.length === 0 ? <p>Building has no recipes!</p> : ""}
      </div>
    </details>
  );
};
