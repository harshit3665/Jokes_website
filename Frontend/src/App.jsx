import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <div div className="bg-gray-700 h-[80vh]">
     <h1 className='text-3xl font-bold text-white text-center items-center hover:bg-yellow-400  py-11 border w-[50vw] ml-48 h-7 mb-5'>Jokes{jokes.length}</h1> 
     <div className=' gap-3 grid grid-cols-3 px-4'>
     {
      jokes.map((joke,index)=>(
        <div key={joke.id} className='border  hover:bg-yellow-200 flex flex-col w-48 h-40 text-slate-200 
        text-center py-4'>
          <h2 className='text-lg text-balance text-orange-400 '>{joke.title}</h2>
          <p className='py-5 text-emerald-400'>{joke.content}</p>
        </div>
      ))
     }
     </div>
    </div>
  )
}

export default App
