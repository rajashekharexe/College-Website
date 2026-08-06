import React, { useId } from "react";
import { motion } from "framer-motion";
import signatureData from "../../paths.json";

export function Signature({
  color = "currentColor",
  className = "",
  inView = true,
  once = true,
  scale = 0.4 
}) {
  const maskId = `signature-reveal-${useId().replace(/:/g, "")}`;
  const { paths, totalWidth } = signatureData;
  const height = 1000; 
  
  const durationPerLetter = 0.4;
  const staggerDelay = 0.15;
  const initialDelay = 0;

  return (
    <motion.svg
      width={totalWidth * scale}
      height={height * scale}
      viewBox={`0 -400 ${totalWidth} ${height}`}
      fill="none"
      className={`overflow-visible ${className}`}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={inView ? undefined : "visible"}
      viewport={{ once, margin: "50px" }}
      style={{ marginLeft: '5px' }}
    >
      <defs>
        {paths.map((p, i) => (
          <mask 
            id={`${maskId}-${i}`} 
            key={i} 
            maskUnits="userSpaceOnUse"
            x="-1000"
            y="-1000"
            width={totalWidth + 2000}
            height="3000"
          >
            <motion.rect
              x={p.minX - 10}
              y={-800}
              height={2000}
              fill="white"
              variants={{
                hidden: { width: 0 },
                visible: { width: p.width + 20 },
              }}
              transition={{
                duration: durationPerLetter,
                delay: initialDelay + i * staggerDelay,
                ease: "linear"
              }}
            />
          </mask>
        ))}
      </defs>

      {paths.map((p, i) => (
        <g key={i} mask={`url(#${maskId}-${i})`}>
          <path d={p.d} fill={color} />
        </g>
      ))}
    </motion.svg>
  );
}
