import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSend } from 'react-icons/io5';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #5151e5;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #5151e5;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3f3fd9;
  }

  svg {
    font-size: 1.3rem;
  }
`;

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log(message); // Action d'envoi du message
    setMessage('');
  };

  return (
    <InputContainer>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <Button onClick={handleSend}>
        <IoSend />
      </Button>
    </InputContainer>
  );
}

export default MessageInput;
