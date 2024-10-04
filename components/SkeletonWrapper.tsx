import React from 'react'
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

function SkeletonWrapper({
	children,
	isLoading,
	fullWidth=true,
}:{
	children:React.ReactNode,
	isLoading:boolean,
	fullWidth?:boolean;
}) {
	if(!isLoading)return children;
  return (
	<div>
		<Skeleton className={cn(fullWidth && "w-full")}>
			<div className="opacity-0">
				{children}
			</div>
		</Skeleton>
	  
	</div>
  )
}

export default SkeletonWrapper
