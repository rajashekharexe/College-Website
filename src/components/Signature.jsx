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
  const { paths, width } = signatureData;
  const height = 300; 
  
  const variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  const duration = 1.5;
  const delay = 0;

  return (
    <motion.svg
      width={width * scale}
      height={height * scale}
      viewBox={`0 -50 ${width} 300`}
      fill="none"
      className={`overflow-visible ${className}`}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={inView ? undefined : "visible"}
      viewport={{ once, margin: "50px" }}
      style={{ marginLeft: '5px' }}
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="white"
              strokeWidth={height * 0.22}
              fill="none"
              variants={variants}
              transition={{
                pathLength: { delay: delay + i * 0.15, duration, ease: "easeInOut" },
                opacity: { delay: delay + i * 0.15 + 0.01, duration: 0.01 },
              }}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </mask>
      </defs>

      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={color}
          strokeWidth={2}
          fill="none"
          variants={variants}
          transition={{
            pathLength: { delay: delay + i * 0.15, duration, ease: "easeInOut" },
            opacity: { delay: delay + i * 0.15 + 0.01, duration: 0.01 },
          }}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
      ))}

      <g mask={`url(#${maskId})`}>
        {paths.map((d, i) => (
          <path key={i} d={d} fill={color} />
        ))}
      </g>
    </motion.svg>
  );
}
