
import type { NutritionalFactsContent } from "../types/products.types";

type NutritionalFactsProps = {
  data: NutritionalFactsContent;
};

export const NutritionalFacts = ({ data }: NutritionalFactsProps) => {
  return (
    <div className="nutritional-facts">
      <div className="serving-size">
        <strong>Serving Size:</strong> {data.servingSize}
      </div>
      <div className="amount-per-serving">
        <span>Amount Per Serving</span>
      </div>
      <div className="calories">
        <span>Calories</span>
        <span className="calories-value">{data.calories}</span>
      </div>

      <div className="nutrients">
        <div className="daily-value">
          <span>% Daily Value*</span>
        </div>
        <div className="nutrient">
          <span className="st">Total Fat</span>
          <span>{data.totalFat}g</span>
          <span className="st">{data.totalFatPercent}%</span>
        </div>
        <div className="nutrient sub">
          <span >Saturated Fat</span>
          <span>{data.saturatedFat}g</span>
          <span className="st">{data.saturatedFatPercent}%</span>
        </div>
        <div className="nutrient sub">
          <span>Trans Fat</span>
          <span>{data.transFat}g</span>
        </div>
        <div className="nutrient">
          <span className="st">Cholesterol</span>
          <span>{data.cholesterol}mg</span>
          <span className="st">{data.cholesterolPercent}%</span>
        </div>
        <div className="nutrient">
          <span className="st">Total Carbohydrate</span>
          <span>{data.totalCarbs}g</span>
          <span className="st">{data.totalCarbsPercent}%</span>
        </div>
        <div className="nutrient sub">
          <span>Dietary Fiber</span>
          <span>{data.dietaryFiber}g</span>
          <span className="st">{data.dietaryFiberPercent}%</span>
        </div>
        <div className="nutrient sub">
          <span>Total Sugar</span>
          <span>{data.totalSugar}g</span>
        </div>
        <div className="nutrient sub">
          <span>Includes Added Sugar</span>
          <span>{data.addedSugar}g</span>
          <span className="st">{data.addedSugarPercent}%</span>
        </div>
        <div className="nutrient mbl">
          <span className="st">Protein</span>
          <span>{data.protein}g</span>
          <span className="st">{data.proteinPercent}%</span>
        </div>
        <div className="nutrient">
          <span>Vitamin D</span>
          <span>{data.vitaminD}mcg</span>
          <span>{data.vitaminDPercent}%</span>
        </div>
        <div className="nutrient">
          <span>Calcium</span>
          <span>{data.calcium}mg</span>
          <span>{data.calciumPercent}%</span>
        </div>
        <div className="nutrient">
          <span>Iron</span>
          <span>{data.iron}mg</span>
          <span>{data.ironPercent}%</span>
        </div>
        <div className="nutrient">
          <span>Potassium</span>
          <span>{data.potassium}mg</span>
          <span>{data.potassiumPercent}%</span>
        </div>
      </div>
      <p className="disclaimer">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of food
        contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
      </p>
    </div>
  );
};