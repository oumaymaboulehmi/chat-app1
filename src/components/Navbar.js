import React from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Importation des icônes de react-icons

// Exemple d'image de compte connecté (à remplacer par votre propre logique de gestion de session)
import userImage from '../assets/user.jpg';

const NavbarContainer = styled.div`
  background-color: #f0f2f5; /* Couleur de fond de l'application */
  color: #3b5998; /* Couleur principale de Messenger */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #3b5998; /* Couleur principale de Messenger */
  cursor: pointer;
`;

const LogoutIcon = styled(FaSignOutAlt)`
  margin-right: 5px;
`;

const Navbar = ({ userName, userImageSrc, onLogout }) => {
  return (
    <NavbarContainer>
      <UserInfo>
        <UserImage src={userImageSrc} alt="User" />
        <UserName>{userName}</UserName>
      </UserInfo>
    </NavbarContainer>
  );
};

export default Navbar;
