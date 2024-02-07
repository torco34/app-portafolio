import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'
import { IPropsAnimation } from "../../Interface"
import { TextBienvenida } from '../../assets/styled/common/Animacion'
// import styles from './styled/styles.module.css'


const Trail: React.FC<{ open: boolean; children?: React.ReactNode; }> = ({ open, children }: any) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        // x: open ? 0 : 20,
        height: open ? 90 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className="" style={style}>
                    <a.div style={{ height }}>{items[index]} </a.div>
                </a.div>
            ))}
        </div>
    )
}

export const Animation = ({ title, subtitle, text }: IPropsAnimation) => {
    const [open, set] = useState(true)
    return (
        <div className="relative top-10 borde flex items-center   justify-center " >
            <Trail open={open}>
                <TextBienvenida> {title}</TextBienvenida>
                <span className='text-slate-500 text-center font-bold px-2 text-3xl'>{subtitle}</span>
                <span className='text-slate-300 text-center  text-3xl'>{text}</span>
            </Trail>

        </div>
    )
}
