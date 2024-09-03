import React, { useState } from 'react'
import styled from 'styled-components'

function Navbar({activeTab,setActiveTab}) {
    const tabs = [
        { id: 1, title: "Basic Animation" },
        { id: 2, title: "Hover Effect" },
        { id: 3, title: "Mount/Unmount Animation" },
        { id: 4, title: "Complex Animation" },]

    

    return (
        <NavbarStyled>
            <nav>
                {tabs.map((tab) => (
                    <div onClick={()=>setActiveTab(tab.id)} key={tab.id} className={tab.id===activeTab?"active":""}>
                        <h1>{tab.title}</h1>
                    </div>
                ))}
            </nav>
        </NavbarStyled>
    )
}

export default Navbar


const NavbarStyled = styled.div`
    width: 100%;
    background-color: #000000d3;
    nav{
        display: flex;
        justify-content: space-around;
        gap: 1rem;
        align-items: center;
        margin: auto;
    /* background-color: rebeccapurple; */
    width: 80%;
    height: 50px;
    color: white;
}
nav div{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0rem 1rem;
}
nav div.active{
background-color: green;
height:100%;
}

`