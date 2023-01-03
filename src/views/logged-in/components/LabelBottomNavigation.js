// import * as React from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import History from '../History/History';
import Register from '../Register/Register';
import Config from '../Config/Config';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState();
  const [componentLoaded, setComponentLoaded] = useState(<Register/>)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    showComponent(newValue);
  };

  const navigate = useNavigate();


  const showComponent = (newValue) => {
    navigate(`home/${newValue}`)
  }

  return (
  <>
    <BottomNavigation className='fixed-bar' color='secondary' sx={{}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Registrar"
        value="register"
        icon={<DriveFileRenameOutlineIcon />}
        color="primary"
        // sx={{color:'#fff'}}
      />
      <BottomNavigationAction
        label="Historial"
        value="history"
        icon={<HistoryIcon />}
        color="secondary"
        // sx={{color:'#fff'}}
      />
      <BottomNavigationAction
        label="Configuración"
        value="config"
        icon={<SettingsIcon />}
        color="secondary"
        // sx={{color:'#fff'}}
      />
    </BottomNavigation>

  </>
  );
}