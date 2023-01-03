import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Box, Card, CardContent , Typography , Container , Stack , Button , Divider , Grid , List , ListItem , ListItemText , Modal , ListItemAvatar , Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import './css/Register.css'
import  { GetIcon } from '../../../utils/GetIcon';
import '../../../App.css'


const Register = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);


  return (
    <>
      <Container maxWidth="sm" >

      <Card  className='cardStyle' elevation={0}>
          <CardContent >
            <Grid container justifyContent="center">
              <Grid sx={{display:'flex' , alignItems:'center' , marginTop:'5px' }}>
                  {GetIcon('AccountBalanceWalletIcon' ,{marginRigh:'2px'})}
                  <Typography variant="h5" component="div" ml={1}>
                  $ 1.000.000
                  </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>


        <Card className='cardStyle' elevation={0}>
          <CardContent>
            <Typography variant="h6" sx={{fontWeight :'600'}} component="div" align='left'>
              Estructura de gastos
            </Typography>
            
            <Grid container spacing={1} mt={1} ml={2}>
              <Grid item xs={3}>
                <Typography variant="body1" component="div" align='left'>
                  Ingresos: 
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={1} ml={2}>
              <Grid item xs={3}>
                <Typography variant="body1" component="div" align='left'>
                  Gastos: 
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={1} ml={2}>
              <Grid item xs={3}>
                <Typography variant="body1" component="div" align='left'>
                  Balance: 
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

          </CardContent>
        </Card>

        <Divider variant="middle" />

        <Card className='cardStyle' elevation={0}>
          <CardContent>
            <Typography variant="h6" component="div" align='left' sx={{fontWeight:'600'}}>
              Resumen ultimos registros
            </Typography>
            
            <List  component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Inbox" />
              </ListItem>
            </List>

            <Stack spacing={2} direction="row-reverse" sx={{justifyContent:'center'}} mt={1}  >
              <Button variant="text"  onClick={() => navigate('../home/history')}> {GetIcon('ArrowDownwardIcon')}  Ver mas </Button>
            </Stack>

          </CardContent>
        </Card>

        <Card className='cardStyle' elevation={0}>
          <CardContent>
            <Typography variant="h6" component="div" align='left' sx={{fontWeight:'600'}}>
              Proximos pagos programados
            </Typography>
            
            <List  component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider />
              <ListItem button >
                <ListItemText primary="Drafts" about='222' />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
            
          </CardContent>
        </Card>

        <Stack spacing={2} direction="row-reverse" centered="true" mt={2}  mb={10}  >
          <Button variant="contained" color="primary" fullWidth onClick={() => navigate('./new')}>Registrar movimiento</Button>
        </Stack>

      </Container>
    </>
  )
}

export default Register