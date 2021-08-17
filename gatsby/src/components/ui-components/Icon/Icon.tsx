import React from "react"
import { motion } from "framer-motion"


const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
}

function Icon({ size = 40, color = "#000", ...delegated }: { size: number, color: string }) {
  return (
    <svg
      {...delegated}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 483 455"

    >
      <path fill="#fff" d="M0 0H483V455H0z"></path>
      <motion.path
        stroke={color}
        strokeOpacity="0.75"
        strokeWidth="30"
        d="M242 33.887l188.516 97.493v192.24L242 421.113 53.484 323.62V131.38L242 33.887z"
        variants={pathVariant}
        initial="hidden"
        animate="visible"

      ></motion.path>
      <motion.path
        fill={color}
        fillOpacity="0.75"
        d="M147.879 159.031l32.871 92.813 32.695-92.813h34.629V287h-26.455v-34.98l2.637-60.381L189.715 287h-18.106l-34.453-95.273 2.637 60.293V287h-26.367V159.031h34.453zm163.301 76.641l-13.711 14.766V287h-26.367V159.031h26.367v58.008l11.601-15.908 32.608-42.1h32.431l-45.439 56.865L375.428 287h-31.377l-32.871-51.328z"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
      ></motion.path>
    </svg>
  );
}

export default Icon;