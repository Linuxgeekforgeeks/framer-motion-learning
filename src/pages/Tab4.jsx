import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
function Tab4() {
  return (

    <TabStyled>

    <motion.div
    animate={{
      scale: [1, 1.2, 1.4, 1.2, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    }}
    transition={{ duration: 2 }}
    className="box"
  >
    Complex Animation
  </motion.div>
    </TabStyled>
  )
}

export default Tab4

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