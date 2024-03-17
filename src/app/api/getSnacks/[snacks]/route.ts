// import { Recipes } from "@/entity/recipe";
// import { AppDataSource } from "@/utils/database";
// import { NextRequest } from "next/server";
// import { In } from "typeorm";

// export async function GET(request, { params}) {

//   var data = {
//     slug: params.slug,
//     message: 'result from get'
//   }
//   console.log(data.slug);
 
//   const path1 = data.slug?.charAt(0).toUpperCase()+data.slug?.slice(1);
//   console.log(path1);
//   const repository = AppDataSource.getRepository(Recipes)
//   const response = await repository.createQueryBuilder("recipe")
//   .where("(:path1) = ANY(recipe.mealtype)", { path1 })
//   .getMany();

// console.log(response);
      
 
// return Response.json(response)
// }

// app/api/getSnacks/[snacks]/route.ts

import { Recipes } from "@/entity/recipe";
import { AppDataSource } from "@/utils/database";
import { NextResponse } from "next/server";
import { Any } from "typeorm";
// import { Response } from "next";

export async function GET(request: Request, { params }: {params: {snacks: string}}) {
    try {
        console.log(params)
        const data = {
            snacks: params?.snacks,
            message: 'result from get'
        };

        const path = params.snacks;
 const path1 = path.charAt(0).toUpperCase() + path.slice(1);
        
        const repository = AppDataSource.getRepository(Recipes);

        // const response = await repository.find({
        //     where: {cuisine: `${path1}`}
        //   });
          const results = await repository.createQueryBuilder("recipes")
          .where(`:mealtype = ANY(recipes.mealtype)`, { mealtype: `${path1}` })
          
          .getMany();

        console.log("Query executed successfully:", results);

        return NextResponse.json(results);
    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}

