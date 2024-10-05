import React from 'react'

function TranSribing({downloading}) {
  return (
    <div className="flex text-center flex-col max-w-screen-xl mx-auto items-center justify-center gap-10 md:gap-14 py-24">
      <div className='flex flex-col gap-2 md:gap-4'>
      <h1 className="   font-semibold leading-1 tracking-tight text-5xl md:text-6xl">
   <span className="text-blue-400 font-bold">Transcribing</span>
  </h1>
   <p>{!downloading ?"warming up":"cores are engaged"}</p>

      </div>
      <div className='flex flex-col gap-2 max-w-[800px] mx-auto w-full'>
        {[0,1,2].map((val)=>{
        return   <div key={val} className={'rounded-full h-2 sm:h-3 bg-slate-400 loading'+`loading${val}`}>  </div>
        }
         
        )}

      </div>
        
    </div>
  )
}

export default TranSribing
