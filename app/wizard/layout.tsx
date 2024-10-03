import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
	<div>
	  <div className="relative flex h-screen w-full flex-col items-center justify-center">
		{children}
	  </div>
	</div>
  )
}

export default layout
