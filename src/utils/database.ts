import { Recipes } from "@/entity/recipe";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Tripti907@",
    database: "recipe",
    synchronize: true,
    logging: true,
    entities: [Recipes]
    // subscribers: [],
    // migrations: [],
})
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

