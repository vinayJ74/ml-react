import React from 'react'

function Displayaudio({file,audio,reset}) {
  return  (<main className='flex-1  mx-auto  p-4 flex flex-col text-center  gap-3 md:gap-5  justify-center'>
  <h1 className="   font-semibold leading-1 tracking-tight text-5xl md:text-6xl">
   Your <span className="text-blue-400 font-bold">File</span>
  </h1>
  <div className='mt-2  mx-auto flex flex-col my-4 '>
    <h1 className=' text-left font-bold'>File-Name</h1>
    <p>{file? file?.name:"custom- audio"}</p>
  </div>
  <div className='flex items-center gap-44 justify-between '>
    <button className='text-slate font-semibold ' onClick={(reset)}>Reset</button>
    <button className="text-blue-400 flex gap-2 text-base font-semibold
rounded-xl bg-white shadow-md px-4 py-1  shadow-blue-500/10  hover:shadow-blue-600/20 hover:shadow-lg">Transcribe    <span><i class="fa-solid fa-pen"></i></span>   </button>

  </div>
  </main>)

}

export default Displayaudio
