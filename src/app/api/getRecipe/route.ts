import { DataType } from "@/app/api/route";
import { Recipes } from "@/entity/recipe";
import { AppDataSource } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    const repository = AppDataSource.getRepository(Recipes)
    const response = await repository.find();
    // console.log(response);
    
    return NextResponse.json(response)
}