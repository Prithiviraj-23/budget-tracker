import {z} from "zod"
import { Currencies } from "@/lib/currencies"

export const UpdateUserCurrencySchema=z.object({
     currency:z.custom(value=>{
		const found =Currencies.some(c=>c.value===value);
		if(!found){
			throw new Error (`invalid currency: ${value}`);
		}
		return value;
	 })
})