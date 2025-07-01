import React from 'react'
import background from '../assets/back.png'
import skies from '../assets/skies.png'
import char from '../assets/char.png'

const Maindiv = (props) => {

  return (
    <div className='maindiv'>

      <img src={background} style={{ transform: `scale(${props.size.bg}) rotate(${props.size.bgrt}deg) translateX(${-1 * props.move}px)`, transition: `${props.tran}` }} alt="" />

      <img src={skies} style={{ transform: `rotate(${props.size.skyrt}deg) scale(${props.size.sky}) translateX(${-0.3 * props.move}px)`, transition: `${props.tran}` }} alt="" />


      <img src={char} style={{ transform: `translateY(${props.size.char}%)`, transition: `${props.tran}` }} alt="" />

      <div className="gta" style={{ transform: `translateX(${-0.7 * props.move}px) scale(${props.size.lgsize})`, transition: `${props.tran}` }}>
        <h1>grand</h1>
        <h1>theft</h1>
        <h1>auto</h1>
      </div>
    </div>
  )
}

export default Maindiv
