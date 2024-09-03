import React from 'react'
import styled from 'styled-components'
import { motion} from 'framer-motion'

function Tab1() {
    return (
        <TabStyled>
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        This is the basic Animation
      </motion.div>
    </TabStyled>
  )
}

export default Tab1


const TabStyled = styled.div`
    
`