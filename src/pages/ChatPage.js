import React from 'react';
import ChatWindow from '../components/ChatWindow';
import Sidebar from '../components/Sidebar';

import styled from 'styled-components';

const ChatPageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #e9ecef;
`;

const ChatPage = () => {
  return (
    <ChatPageContainer>
      <Sidebar />
      <ChatWindow />
    </ChatPageContainer>
  );
}

export default ChatPage;
