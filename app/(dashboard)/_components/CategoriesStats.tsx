"use client";

import { UserSetting } from "@prisma/client";
import React from "react";


interface Props{
	userSettings:UserSetting;
	from:Date;
	to:Date;
}

function CategoriesStats({userSettings,from,to}:Props) {

	
  return <div>CategoriesStats</div>;
}

export default CategoriesStats;
