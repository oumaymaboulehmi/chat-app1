import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import person1 from './assets/person1.jpg';
import person2 from './assets/person2.jpg';
import person3 from './assets/person3.jpg';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f0f2f5;
`;

const App = () => {
  const contacts = [
    { id: 1, name: 'Sama Doe', image: person1, createdAt: '20-6-2021', dob: '23-07-1996', phone: '7413698500', email: 'sama@example.com', address: '1189 Meadowcrest Lane' },
    { id: 2, name: 'John Smith', image: person2, createdAt: '20-6-2021', dob: '23-07-1996', phone: '7413698500', email: 'john@example.com', address: '1189 Meadowcrest Lane' },
    { id: 3, name: 'Michael Johnson', image: person3, createdAt: '20-6-2021', dob: '23-07-1996', phone: '7413698500', email: 'michael@example.com', address: '1189 Meadowcrest Lane' },
  ];

  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Sidebar contacts={contacts} onSelectContact={setSelectedContact} />
        <Routes>
          <Route path="/" element={<ChatWindow selectedContact={selectedContact} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
