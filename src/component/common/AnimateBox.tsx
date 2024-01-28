import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { ResponsiveText } from "../../assets/styled/common/AnimationSetTimeout";

export const AnimateBox = () => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
      fontWeight: "bold",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 120 },
      { transform: "perspective(900px) rotateX(180deg)", color: "#27E1C1" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#EDB7ED" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#D9ACF5" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["Desarrolladora web Front End"]), 2000)
    );
    ref.current.push(
      setTimeout(
        () => set(["Desarrolladora web Front End", "Habilidades "]),
        5000
      )
    );
    ref.current.push(
      setTimeout(
        () =>
          set([
            "Desarrolladora web Front End",
            "Habilidades ",
            "JavaScript | React  | TypeScript | Html5 | Css3",
          ]),
        8000
      )
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <>
      {transitions(({ innerHeight, ...rest }, item) => (
        <animated.div className="" style={rest} onClick={reset}>
          <animated.div style={{ overflow: "hidden", height: innerHeight }}>
            <ResponsiveText>{item}</ResponsiveText>
          </animated.div>
        </animated.div>
      ))}
    </>
  );
};
