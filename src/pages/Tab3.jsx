import React from 'react'
import { motion } from 'framer-motion'
function Tab3() {
  return (
    <motion.div
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="box"
          >
            Mount/Unmount Animation
          </motion.div>
  )
}

export default Tab3