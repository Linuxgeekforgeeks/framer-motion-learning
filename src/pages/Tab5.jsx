import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ListContainer = styled.div`
  margin: 20px 0;
`;

const ListItem = styled(motion.div)`
  background-color: #61dafb;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  background-color: #282c34;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #61dafb;
  }
`;

const Tab5 = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <Container>
      <h1>AnimatePresence Example</h1>
      <Button onClick={addItem}>Add Item</Button>
      <ListContainer>
        <AnimatePresence>
          {items.map((item) => (
            <ListItem
              key={item}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.4 }}
            >
              Item {item}
              <Button onClick={() => removeItem(item)}>Remove</Button>
            </ListItem>
          ))}
        </AnimatePresence>
      </ListContainer>
    </Container>
  );
};

export default Tab5;
