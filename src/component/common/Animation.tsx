import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import { IPropsAnimation } from "../../Interface";
import { TextBienvenida } from "../../assets/styled/common/Animacion";

const Trail: React.FC<{ open: boolean; children?: React.ReactNode }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 90 : 0,
    from: { opacity: 10, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="" style={style}>
          <a.div style={{ height }}>{items[index]} </a.div>
        </a.div>
      ))}
    </div>
  );
};

export const Animation = ({ title, subtitle, text }: IPropsAnimation) => {
  const [open, set] = useState(true);
  return (
    <div className="relative  flex items-center p-8 ">
      <Trail open={open}>
        <TextBienvenida>{title}</TextBienvenida>
        <span className="font-sans  text-violet-900 md:font-serif text-center font-bold px-10 text-3xl">
          {subtitle}
        </span>
        <span className="font-sans text-cyan-700 md:font-serif text-center font-bold px-10 text-2xl">
          {text}
        </span>
      </Trail>
    </div>
  );
};
