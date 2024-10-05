import React, {useState ,useRef, useEffect } from 'react'

function Homepage({setaudio,setfile}) {

  const[record,setrecor]=useState('inactive')
  const [audiochunk,setaudiochunk]=useState([])
  const[duration,setduration]=useState(0)
  const mediaRecorder=useRef(null)
  const mimetype='audio/webm'
const  startRecording= async()=>{
let temp;
try{
  const streamdata=await navigator.mediaDevices.getUserMedia({
    audio:true,
    video:false
  })
  temp=streamdata
}
catch(e){
  console.log(e)
  return 

}
setrecor("recording")
const media=new MediaRecorder(temp,{type:mimetype})

mediaRecorder.current=media
mediaRecorder.current.start()

let localaudio=[]
mediaRecorder.current.ondataavailable=(event)=>{
  if(typeof event.data==='undefined'){ return }
  if( event.data.size===0 ){return }
  localaudio.push(event.data)

}
setaudiochunk(localaudio)


}
 function stoprecording(){
  setrecor('inactive')
  mediaRecorder.current.stop()
  mediaRecorder.current.onstop=()=>{
    const audioblob= new Blob(audiochunk,{type:mimetype})
   
    setaudio(audioblob)
    setaudiochunk([])
    setduration(0)
  }

}

useEffect(()=>{
  if(record==='inactive') {return }
  const interval=setInterval(()=>{
    setduration(curr=>curr+1)
  },1000)
  return ()=>clearInterval(interval)
})


  return (
    <main className='flex-1  p-4 flex flex-col text-center  gap-3 md:gap-5  justify-center'>
   <h1 className="   font-semibold leading-1 tracking-tight text-5xl md:text-6xl">
    Free <span className="text-blue-400 font-bold">Scribe</span>
   </h1>
   <h3 className="font-medium md:text-lg mt-1">Record <span className='text-blue-400 text-xl font-bold'>  &rarr;</span> Transcribe<span  className='text-blue-400 text-xl font-bold'> &rarr;</span>Translate</h3>

<button onClick={record=='recording'?stoprecording:startRecording} className="flex items-center justify-between mx-auto w-72  max-w-full   gap-4 text-base
rounded-xl bg-white shadow-md px-5 py-1  shadow-blue-500/10  hover:shadow-blue-600/20 hover:shadow-lg  "   >
  <p className="text-blue-400"> {record==='inactive'?"Record" : "Stop recording"}</p>
  <div className="flex gap-2">
    {duration!=0 &&
 <p>{duration}s</p>
    }
   
 
  <i className={`fa-solid fa-microphone ${record==='recording'?"text-rose-300":""}`}></i> </div>
</button>
<p className='tex-base mt-8 font-medium'>Or <label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200"> upload <input onChange={(e)=>   {  const target=e.target.files[0] ;setfile(target)}} className='hidden' type="file" accept=".mp3,.wave"></input></label> a mp3. file</p>
<p className="text-base mt-1 italic text-slate-500">free now free forever</p>
            </main>
  ) 
}

export default Homepage
