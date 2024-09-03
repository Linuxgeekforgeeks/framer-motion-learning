import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
function Tab2() {
  return (

    <Tabstyled>

    <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
    .animated-button{
        padding: .4rem 2rem;
        border-radius:0.3rem;
        border: 1px solid gray;
        cursor: pointer;
    }
`