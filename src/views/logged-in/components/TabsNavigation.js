import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import TabContext from '@mui/lab/TabContext';
import { Container , Tabs , Tab  } from '@mui/material';

const TabsNavigation = () => {

  const navigate = useNavigate();


  const [value, setValue] = React.useState('register');

  const handleChange = (event, newValue) => {
    setValue(newValue);

    navigate(`home/${newValue}`)
  };

  useEffect(() => {
    console.log(window.location.href);
  }, [])
  

  return (
    <>
      <Container maxWidth="sm" >
      
      <TabContext value={value}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab value="register" icon={<DriveFileRenameOutlineIcon />} aria-label="Registrar movimiento" />
          <Tab value="history" icon={<HistoryIcon />} aria-label="Historial" />
          <Tab value="config" icon={<SettingsIcon />} aria-label="Configuración" />
        </Tabs>
      </TabContext>
      </Container>
    </>
  )
}

export default TabsNavigation