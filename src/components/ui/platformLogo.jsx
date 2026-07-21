import React from 'react'
import {motion} from "framer-motion"

const platformLogo = ({Logo , url}) => {
  return (
   <motion.a 
      whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  mass: 0.5,
                }}
    href={url} target='_blank'  rel="noopener noreferrer" className="border-2 border-purple-700 rounded-full p-2">
       {Logo}
     </motion.a>
  )
}

export default platformLogo;
