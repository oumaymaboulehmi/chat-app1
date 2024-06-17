import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';

const SidebarContainer = styled.div`
  width: 300px;
  background: #f0f2f5;
  color: #3b5998;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const AppTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #3b5998;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const UserBio = styled.div`
  font-size: 0.8rem;
  color: #9197a3;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  margin-left: 10px;
`;

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 10px;
  border-left: 3px solid transparent;
  background-color: #ffffff;

  &:hover {
    background-color: #dde4f0;
    border-left: 3px solid #3b5998;
  }
`;

const ContactImageContainer = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #f0f2f5;
  position: relative;
`;

const ContactImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PresenceIndicator = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #f0f2f5;
  background-color: ${props => (props.active ? '#42b72a' : 'transparent')};
`;

const ContactName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-left: 10px;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const LogoutIcon = styled(FaSignOutAlt)`
  margin-right: 5px;
`;

const Sidebar = ({ contacts, onSelectContact }) => {
  const connectedContact = {
    name: 'Steeve Jackson',
    image: person2,
    bio: 'If “love is in the air”, why is the air polluted?',
  };

  const handleLogout = () => {
    console.log('Déconnexion');
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <HeaderLogo src={logo} alt="Logo de l'application" />
        <AppTitle>NexTalk</AppTitle>
      </LogoContainer>
      <UserProfile>
        <UserImage src={connectedContact.image} alt={connectedContact.name} />
        <UserInfo>
          <UserName>{connectedContact.name}</UserName>
          <UserBio>{connectedContact.bio}</UserBio>
        </UserInfo>
      </UserProfile>
      <SearchContainer>
        <FaSearch color="#3b5998" />
        <SearchInput type="text" placeholder="Search User" />
      </SearchContainer>
      <ContactList>
        {contacts && contacts.map((contact, index) => (
          <ContactListItem key={index} onClick={() => onSelectContact(contact)}>
            <ContactImageContainer>
              <ContactImage src={contact.image} alt={contact.name} />
              <PresenceIndicator active={contact.active} />
            </ContactImageContainer>
            <ContactName>{contact.name}</ContactName>
          </ContactListItem>
        ))}
      </ContactList>
      <LogoutButton onClick={handleLogout}>
        <LogoutIcon />
        Déconnexion
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
