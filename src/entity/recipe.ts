import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipes {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    prepTimeMinutes: number

    @Column()
    cookTimeMinutes: number

    @Column()
    servings: number

    @Column()
    caloriesPerserving: number

    @Column('decimal', { precision: 5, scale: 2 })
    rating: number

    @Column()
    reviewCount: number

     @Column()
    image: string

     @Column()
    difficulty: string

    @Column()
    cuisine: string 

    @Column("text", { array: true })
    ingredients: string[] 

    @Column("text", { array: true })
    instructions: string[]

    @Column("text", { array: true })
    tags: string[]
    
    @Column("text",{ array: true })
    mealtype: string[]


}