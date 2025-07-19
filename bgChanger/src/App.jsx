import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  // function changeColor(color){
  //   setColor(color)
  // }
  return (
    <div className='w-full h-screen duration-200' style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2 rounded-3xl'>
          <button onClick = {() => setColor('red')} className='cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg'>Red</button>
          <button onClick = {() => setColor('blue')} className='cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg'>Blue</button>
          <button onClick = {() => setColor('green')} className='cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg'>Green</button>
          <button onClick = {() => setColor('purple')} className='cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg'>purple</button>
          <button onClick = {() => setColor('grey')} className='cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg'>grey</button>
          <button onClick = {() => setColor('pink')} className='cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg'>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
