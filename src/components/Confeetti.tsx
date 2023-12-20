import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Confetticomp = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      opacity={0.3}
      numberOfPieces={50}
    />
  )
}
export default Confetticomp