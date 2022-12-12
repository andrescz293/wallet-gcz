import React, { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
      <TabContext value={value}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab value="register" icon={<DriveFileRenameOutlineIcon />} aria-label="Registrar movimiento" />
          <Tab value="history" icon={<HistoryIcon />} aria-label="Historial" />
          <Tab value="config" icon={<SettingsIcon />} aria-label="Configuración" />
        </Tabs>
      </TabContext>
    </>
  )
}

export default TabsNavigation