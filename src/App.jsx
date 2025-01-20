import { useState } from 'react'
import './App.css'
import './assets/style.css'
import CounterDisplay from './components/CounterDisplay'
import Button from './components/Button'
import logo from './assets/logo-light-new.png';

export default function App() {
  const [count, setCount] = useState(0)
  const [countTextColor, setCountTextColor] = useState('black')
  const [zoom, setZoom] = useState(false)
  const [alertMsg, setAlertMsg] = useState('')
  
  const onIncreament = () => {
    if (count >= 9) {
      setAlertMsg('Count cannot be more than 10')
    }
    if (count <= 8) {
      setAlertMsg('')
    }
    setCount(prevCount => prevCount + 1)
    setCountTextColor('green')
    setZoom(true);
    setTimeout(() => {
      setCountTextColor('black')
      setZoom(false);
    }, 300);
  }
  const onDecreament = () => {
    if (count <= -9) {
      setAlertMsg('Count cannot be less than -10')
    }
    if (count >= -8) {
      setAlertMsg('')
    }
    setCount(prevCount => prevCount - 1)
    setCountTextColor('red')
    setZoom(true);
    setTimeout(() => {
      setCountTextColor('black')
      setZoom(false);
    }, 300);
  }
  const onReset = () => {
    setCount(0)
    setCountTextColor('black')
    setAlertMsg('')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img className="w-56 mb-4" src={logo} alt="" />
      <h1 className="text-4xl font-bold mb-4">Smart Counter</h1>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <p className='text-orange-500 h-5'>{alertMsg}</p>
        <CounterDisplay tcolor={countTextColor} count={count} zoom={zoom}/> 
        <div className="flex space-x-3">
          <Button bg="blue" label="+ Increment" action={onIncreament} count={count} disable={count >= 10} />
          <Button bg="yellow" label="- Decrement" action={onDecreament} count={count} disable={count <= -10} />
        </div>
        <div className="flex justify-center mt-4 w-full">
          <Button bg="red" label="Reset" action={onReset} count={count} />
        </div>
      </div>
    </div>
  )
}
