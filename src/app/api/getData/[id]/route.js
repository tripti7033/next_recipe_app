// import { Recipes } from "@/entity/recipe";
// import { AppDataSource } from "@/utils/database";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";

// import { Recipes } from "@/entity/recipe"
// import { AppDataSource } from "@/utils/database"
// import { NextResponse } from "next/server";
// import { DataType } from "../route";
// import { NextApiRequest } from "next";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
    
//     // if (!req.url) {
//     //     return res.json({ msg: "URL is not provided" });
//     // }
//     // const {searchParams} = new URL(req.url)
//     // const recipe_id = searchParams.get('id');
//     // console.log(typeof recipe_id)
//     const recipe_id = req.query;
//     console.log(recipe_id);
    
//     const parsed_id = recipe_id? parseInt(recipe_id as string): undefined;
//     const repository = AppDataSource.getRepository(Recipes)
//     let response
//     if(parsed_id){
//         response = await repository.find({where: {id: parsed_id}});
//         return res.json({response})
//     } else{
//         return res.json({"msg": "Recipe id is not correct"})
//     }

// }

import { DataType } from "@/app/api/route";
import { Recipes } from "@/entity/recipe";
import { AppDataSource } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export async function GET(req: NextApiRequest) {
//     const {id} = req.query
// console.log(id)
//     const repository = AppDataSource.getRepository(Recipes)
//     // const response = await repository.find({where:{id: id}});
//     // console.log(response);
    
//     // return NextResponse.json(response)
// }
export async function GET(request, { params}) {
 
 
    var data = {
      id: params?.id,
      message: 'result from get'
    }
    const repository = AppDataSource.getRepository(Recipes)
        const response = await repository.find({where:{id: data.id}});
        console.log(response);
        
   
  return Response.json(response )
  }


// export async function GET(request: NextApiRequest, { params }: { params: { id: string } }){
    
//     try{
//         console.log(params.id)
//         const slug = params.id
//         const parsed_id = parseInt(slug)
//     console.log(parsed_id);
//         if (isNaN(parsed_id)) {
//             throw new Error('Invalid ID format');
//         }
//         const repo = AppDataSource.getRepository(Recipes);
//         const data = await repo.find({where: {id: parsed_id}})
//         console.log(data, "id") 
//         if (!data) {
//             throw new Error('Recipe not found');
//         }  
//         return NextResponse.json(data)

//     } catch(err){
//         console.log("err");
//         return NextResponse.json({"msg" :" faild to fetch"})
        
//     }
// }
