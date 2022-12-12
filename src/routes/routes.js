import Register from "../views/logged-in/Register/Register";
import NewRegister from "../views/logged-in/Register/NewRegister";
import History from "../views/logged-in/History/History";
import Config from "../views/logged-in/Config/Config";
import Login from "../views/no-logged/Login/Login";
import RecoveryPassword from "../views/no-logged/RecoveryPassword/RecoveryPassword";


const routes = {
  loggedIn: [
    {path:'/home/register' , component: <Register/> , headers:true},
    {path:'/home/register/new' , component: <NewRegister/> , headers:true},
    {path:'/home/history' , component: <History/> , headers:true},
    {path:'/home/config' , component: <Config/> , headers:true},
  ],
  noLogged: [
    {path:'/login' , component: <Login/> , headers:false},
    {path:'/recovery-password' , component: <RecoveryPassword/> , headers:false},
  ],
}

export default routes;
