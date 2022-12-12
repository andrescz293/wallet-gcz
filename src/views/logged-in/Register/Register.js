import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {CardActions, Card, CardContent , Typography , Container , Stack , Button , Divider , Grid , List , ListItem , ListItemText , Modal , ListItemAvatar , Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import './css/Register.css'

const Register = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);

  return (
    <>
      <Container maxWidth="sm" >

      <Card  sx={{ minWidth: 200 , marginTop:2 , borderRadius:5}} elevation={1}>
          <CardContent >
            <Grid container justifyContent="center">
              <Grid >
                <Typography variant="h5" sx={{fontWeight :''}} component="div" align='center'>
                <AccountBalanceWalletIcon/>
                $ 1.000.000
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>


        <Card sx={{ minWidth: 200 , marginTop:2 , borderRadius:5}} elevation={2}>
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

        <Card sx={{ minWidth: 200 , marginTop:2 , borderRadius:5}} elevation={2}>
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

            <Stack spacing={2} direction="row-reverse" centered="true" mt={1}  >
              <Button variant="contained"  onClick={() => navigate('../home/history')}>Ver mas </Button>
            </Stack>

          </CardContent>
        </Card>

        <Card sx={{ minWidth: 200 , marginTop:2 , borderRadius:5}} elevation={2}>
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
          <Button variant="contained" fullWidth onClick={() => navigate('./new')}>Registrar movimiento</Button>
        </Stack>

      

      </Container>
    </>
  )
}

export default Register