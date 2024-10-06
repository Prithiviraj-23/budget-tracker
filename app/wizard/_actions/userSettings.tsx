"use server"

import prisma from "@/lib/prisma";
import { UpdateUserCurrencySchema } from "@/schema/userSetting"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async  function UpdateUserCurrency(currency:string) {
const pareBody =UpdateUserCurrencySchema.safeParse({
	currency,
})

//console.log(" upda"+currency);



if(!pareBody.success){
	throw pareBody.error;
}

const user = await currentUser();
if(!user){
	redirect('/sign-in');
}

const userSetting= await prisma.userSetting.update({
	where:{
		userId:user.id,
	},
	data:{
		currency,
	},
})
return userSetting;
} 