import React, { Component } from 'react';
import './App.css';
import { Routes, Route , useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './views/no-logged/Login/Login'
import RecoveryPassword from './views/no-logged/RecoveryPassword/RecoveryPassword'
import NotFound from './views/no-logged/NotFound/NotFound'
import Register from './views/logged-in/Register/Register';
import NewRegister from './views/logged-in/Register/NewRegister';
import History from './views/logged-in/History/History';
import Config from './views/logged-in/Config/Config';
import ResponsiveAppBar from './views/logged-in/components/ResponsiveAppBar';
import TabsNavigation from './views/logged-in/components/TabsNavigation';
import LabelBottomNavigation from './views/logged-in/components/LabelBottomNavigation';
import './views/logged-in/css/Home.css'
import routes  from './routes/routes';
let darkTheme = createTheme({
  palette: {
    primary: {
      main: '#000A94',
    },
    secondary: {
      main: '#f1f1f19e',
    },
    white:{
      main:'#fff'
    }
  },
  typography: {
    fontFamily: 'San Francisco'
  },
});

darkTheme = createTheme(darkTheme, {
  palette: {
    info: {
      main: darkTheme.palette.secondary.main,
    },
  },
});


const arrayComponents = [...routes.loggedIn , ...routes.noLogged]
const routeComponents = arrayComponents.map(({path, component}, key) => <Route exact path={path} element={component} key={key} />);


const showHeaders = () =>{
  try {    
    return arrayComponents.find(e => e.path === window.location.pathname).headers
  } catch (error) {
    return false;
  }
}

let topNavComponent = (screen.width > 1024) ? <TabsNavigation/> : <LabelBottomNavigation/>  ;
let barComponent = <ResponsiveAppBar/> ;

if ( !showHeaders()) {
  topNavComponent = "";
  barComponent= "";
}

class App extends Component {

  
  render() {

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
          {barComponent}
          {screen.width > 1024 && topNavComponent}
            <Routes>
              {routeComponents}
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          {screen.width < 1024 &&  topNavComponent }
        </div>
      </ThemeProvider>
      
    );
  }
}

export default App;
