import React from 'react'

function layout({childern}:{childern:React.ReactNode}) {
  return (
	<div className='relative flex h-screen w-full flex flex-col'>
	  <div className='w-full'>{childern}</div>
	</div>
  )
}

export default layout
