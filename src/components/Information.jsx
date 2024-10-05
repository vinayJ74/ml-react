import React, { useState }   from 'react'
import Transcription from './Transcription'
import Translation from './Translation'

function Information() {
    const[tab,settab]=useState('transcription')
  return (
 <div className='text-center'>
        <main className='flex-1 py-24 mx-auto items-center   p-4 flex flex-col text-center  gap-3 md:gap-5  justify-center'>
    <h1 className="font-semibold leading-1 tracking-tight text-5xl md:text-6xl">
     Your <span className="text-blue-400 font-bold">Transcription</span>
    </h1>
    <div className=' mt-8 bg-white items-center overflow-hidden   grid grid-cols-2   mx-auto border-2 border-solid border-blue rounded-full '>
        <button onClick={()=>settab('transcription')} className={`  py-1 px-4   duration-200s   font-semibold ${tab==='transcription'?"bg-blue-400 text-white":"text-blue-500"}`}> Transcription</button>
        <button onClick={()=>settab('translation')} className={` py-1 px-4  duration-200s   font-semibold ${tab==='translation'?"bg-blue-400 text-white":"text-blue-500"}`}>Translation </button>
    </div> 
    </main>
    {
        tab=='transcription'?<Transcription></Transcription> :<Translation></Translation>
    }

 </div>
  )
}

export default Information
