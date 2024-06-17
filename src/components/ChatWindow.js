import React, { useState } from 'react';
import styled from 'styled-components';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';
import Message from './Message';
import MessageInput from './MessageInput';
import logo from '../assets/logo.png';

const ChatWindowContainer = styled.div`
  display: flex;
  flex: 1;
  background: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: margin-right 0.3s ease;
  margin-right: ${props => (props.detailsVisible ? '25%' : '0')};
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const MessageSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 15px 0;
`;

const NoContactSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
`;

const AppLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const AppName = styled.h1`
  font-size: 2rem;
  color: #3b5998;
`;

const ContactBar = styled.div`
  display: flex;
  align-items: center;
  background: #3b5998;
  color: white;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ContactImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ContactName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  flex: 1;
`;

const InfoButton = styled(FaInfoCircle)`
  cursor: pointer;
`;

const CloseButton = styled(FaTimes)`
  cursor: pointer;
  margin-left: auto;
`;

const ContactDetailsContainer = styled.div`
  width: 25%;
  height: 100%;
  position: absolute;
  top: 0;
  right: ${props => (props.visible ? '0' : '-25%')};
  background: #fff;
  border-left: 1px solid #ddd;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
`;

const ContactDetailsImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ContactDetailsName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContactDetailsInfo = styled.div`
  font-size: 1rem;
  color: #555;
`;

const AppAboutContainer = styled.div`
 
  color: blue;
  padding: 20px;
`;

const AppAboutTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const AppAboutText = styled.p`
  font-size: 1rem;
`;

const ChatWindow = ({ selectedContact }) => {
  const [showContactDetails, setShowContactDetails] = useState(false);

  const toggleContactDetails = () => {
    setShowContactDetails(!showContactDetails);
  };

  return (
    <ChatWindowContainer>
      <ChatContent detailsVisible={showContactDetails}>
        {selectedContact ? (
          <>
            <ContactBar>
              <ContactImage src={selectedContact.image} alt={selectedContact.name} />
              <ContactName>{selectedContact.name}</ContactName>
              <InfoButton onClick={toggleContactDetails} />
            </ContactBar>
            <MessageList>
              {/* Messages */}
              <Message text="Hello there!" />
              <MessageSeparator />
              <Message text="Hi! How are you?" />
              <MessageSeparator />
            </MessageList>
            <MessageInput detailsVisible={showContactDetails} />
          </>
        ) : (
          <NoContactSelected>
            <AppLogo src={logo} alt="App Logo" />
            <AppName>NexTalk</AppName>
            <AppAboutContainer>
              <AppAboutText>
                NexTalk is a modern messaging application designed to connect people seamlessly
                across different platforms.
              </AppAboutText>
            </AppAboutContainer>
          </NoContactSelected>
        )}
      </ChatContent>
      {selectedContact && (
        <ContactDetailsContainer visible={showContactDetails}>
          <CloseButton onClick={toggleContactDetails} />
          <ContactDetailsImage src={selectedContact.image} alt={selectedContact.name} />
          <ContactDetailsName>{selectedContact.name}</ContactDetailsName>
          <ContactDetailsInfo>
            <p>Created at: {selectedContact.createdAt}</p>
            <p> 🗓: {selectedContact.dob}</p>
            <p> ☎︎: {selectedContact.phone}</p>
            <p> 🖂: {selectedContact.email}</p>
            <p> 🗺: {selectedContact.address}</p>
          </ContactDetailsInfo>
        </ContactDetailsContainer>
      )}
    </ChatWindowContainer>
  );
};

export default ChatWindow;
