import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  max-width: 70%;
  align-self: ${({ isOwn }) => (isOwn ? 'flex-end' : 'flex-start')};
  background-color: ${({ isOwn }) => (isOwn ? '#dcf8c6' : '#ffffff')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Ombre légère */
`;

const MessageText = styled.p`
  margin: 0;
  color: ${({ isOwn }) => (isOwn ? '#4caf50' : '#333333')}; /* Couleur de texte */
  font-size: 0.9rem; /* Taille de police légèrement réduite */
  line-height: 1.4; /* Espacement des lignes */
`;

const Message = ({ text, isOwn }) => {
  return (
    <MessageContainer isOwn={isOwn}>
      <MessageText isOwn={isOwn}>{text}</MessageText>
    </MessageContainer>
  );
}

export default Message;
