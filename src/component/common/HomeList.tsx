import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { ResponsiveText } from "./styled/HomeList"


export const HomeList = () => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
      fontWeight: "bold"
    },
    enter: [
      { opacity: 1, height: 90, innerHeight: 120 },
      { transform: 'perspective(900px) rotateX(180deg)', color: '#eff2f1' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['TORCOROMA ARIAS ASCANIO']), 2000))
    ref.current.push(setTimeout(() => set(['TORCOROMA ARIAS ASCANIO', 'DESARROLLADORA WEB ']), 5000))
    ref.current.push(setTimeout(() => set(['TORCOROMA ARIAS ASCANIO', 'DESARROLLADORA WEB ', 'JavaScript | React  | TypeScript |Html5 | css3']), 8000))

  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className="">
      <div className="">
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className="" style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight, fontSize: "50px" }}>

              <ResponsiveText>{item}</ResponsiveText>

            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
