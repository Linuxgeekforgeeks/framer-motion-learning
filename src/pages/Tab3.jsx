import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
function Tab3() {
  return (
    <TabStyled>
        
    <motion.div
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="box"
          >
            Mount/Unmount Animation
          </motion.div>
    </TabStyled>
  )
}

export default Tab3
const TabStyled=styled.div`
.box {
  width: 200px;
  height: 200px;
  background-color: #61dafb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
    
`