
import { useState, useEffect } from 'react'

import './App.css'
import Maindiv from './components/Maindiv'

function App() {

  const width = window.innerWidth
  const [mover, setmover] = useState(0)
  const [start, setstart] = useState(false)
  const [size, setsize] = useState({ sky: 1.9, bg: 1.2, skyrt: -25, bgrt: 10, lgsize: 0.5, char: 100 })
  const [trans, settrans] = useState(`all 0.5s ease-in-out`)
  const handlemove = (event) => {
    if (start) {
      setmover(Math.floor((event.clientX - ((width) / 2)) / 20))
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setsize({ sky: 1.05, bg: 1.1, bgrt: 0, skyrt: 0, lgsize: 1, char: 0 })
    }, 900);
    setTimeout(() => {
      setstart(true)
      settrans("none")
    }, 1400);
  })


  return (
    <div className='webmain' onMouseMove={handlemove}>
      <Maindiv move={mover} size={size} tran={trans} />
      <div className="cover">
        <svg xmlns="http://www.w3.org/2000/svg" width="100vw"  viewBox="0 0 1600 900" fill="none">
          <path d="M1600 900H0V0H1600V900ZM780.305 520.434L848.61 379H814.458L780.305 451.169L746.152 379H712L780.305 520.434ZM854.485 379V520.434H888V379H854.485Z" fill="black" />
        </svg>
      </div>

    </div>
  )
}

export default App
