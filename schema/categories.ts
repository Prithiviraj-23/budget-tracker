import { z } from "zod";

export const CreateCategorySchema=z.object(
	{
		name:z.string().min(3).max(30),
		icon:z.string().max(20),
		type:z.enum(["income","expense"]),
	}

)

export type CreateCategorySchematype=z.infer<typeof CreateCategorySchema>


export const DeleteCategorySchema=z.object(
	{
	name:z.string().min(3).max(30),
		type:z.enum(["income","expense"]),
	}
);

export type DeleteCategorySchemaType =z.infer<typeof DeleteCategorySchema>;