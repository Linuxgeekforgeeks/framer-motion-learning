import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
function Tab2() {
  return (

    <Tabstyled>

    <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="animated-button"
          >
            Hover Me
          </motion.button>
    </Tabstyled>
  )
}

export default Tab2


const Tabstyled=styled.div`
   .animated-button {
  padding: 10px 20px;
  background-color: #61dafb;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}
`