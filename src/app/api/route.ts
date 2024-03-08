import { Recipes} from "@/entity/recipe";
import { AppDataSource } from "@/utils/database";

export interface DataType {
  id: number,
  name: string,
  ingredients: string[],
  instructions: string[],
  prepTimeMinutes: number,
  cookTimeMinutes: number,
  servings: number,
  difficulty: string,
  cuisine: string,
  caloriesPerServing: number,
  tags: string[],
  image: string,
  rating: number,
  reviewCount: number,
  mealType: string[],

}

export async function fetchData() {
  try{
    const response = await fetch('https://dummyjson.com/recipes?limit=0')
    
    
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data1 = await response.json()
    //  console.log( "fetched", data1.recipes[0]);
    const repository =  AppDataSource.getRepository(Recipes);
    // console.log(data);
    data1.recipes.map((data: DataType) =>{
      const recipe = new Recipes();

      recipe.name = data.name;
      recipe.ingredients = data.ingredients;
      recipe.instructions = data.instructions;
      recipe.prepTimeMinutes = data.prepTimeMinutes;
      recipe.cookTimeMinutes = data.prepTimeMinutes;
      recipe.servings = data.servings;
      recipe.difficulty = data.difficulty;
      recipe.cuisine = data.cuisine;
      recipe.caloriesPerserving = data.caloriesPerServing;
      recipe.tags = data.tags;
      recipe.image = data.image;
      recipe.rating = data.rating;
      recipe.reviewCount = data.reviewCount;
      recipe.mealType = data.mealType;
      
     repository.save(recipe)
    })
      console.log("data has been saved")
      
    } catch(err){
      console.log("error while fetching api"); 
  }
}



