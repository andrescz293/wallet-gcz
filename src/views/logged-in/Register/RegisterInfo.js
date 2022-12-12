import React , {useState} from 'react'
import Card from '@mui/material/Card';
import {CardActions, CardContent , Typography , Container , Stack , Button , Divider , Grid , List , ListItem , ListItemText , Modal , Box} from '@mui/material';


const Register = () => {
  const [balance, setBalance] = useState(0);

  return (
    <>
      <Container maxWidth="sm" >
        <Card sx={{ minWidth: 200 , marginTop:2}} elevation={5}>
          <CardContent>
            <Typography variant="h6" component="div" align='left'>
              Estructura de gastos
            </Typography>
            
            <Divider variant="middle" />
            
            <Grid container spacing={1} mt={1}>
              <Grid xs={3}>
                <Typography variant="body2" component="div" align='left'>
                  Ingresos: 
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography variant="body2" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={1}>
              <Grid xs={3}>
                <Typography variant="body2" component="div" align='left'>
                  Gastos: 
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography variant="body2" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={1}>
              <Grid xs={3}>
                <Typography variant="body2" component="div" align='left'>
                  Balance: 
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography variant="body2" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

          </CardContent>
        </Card>

        <Divider variant="middle" />

        <Card sx={{ minWidth: 200 , marginTop:2}} elevation={5}>
          <CardContent>
            <Typography variant="h6" component="div" align='left'>
              Resumen ultimos registros
            </Typography>
            
            <Divider variant="middle" />
            
            <Grid container spacing={1} mt={1}>
              <Grid xs={3}>
                <Typography variant="body2" component="div" align='left'>
                  Ingresos: 
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography variant="body2" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={1}>
              <Grid xs={3}>
                <Typography variant="body2" component="div" align='left'>
                  Gastos: 
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography variant="body2" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={1}>
              <Grid xs={3}>
                <Typography variant="body2" component="div" align='left'>
                  Balance: 
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography variant="body2" component="div" align='left'>
                  ${balance}
                </Typography>
              </Grid>
            </Grid>

          </CardContent>
        </Card>

        <Card sx={{ minWidth: 200 , marginTop:2}} elevation={5}>
          <CardContent>
            <Typography variant="h6" component="div" align='left'>
              Proximos pagos programados
            </Typography>
            
            <Divider variant="middle" />

            <List  component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Drafts" about='222' />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>

          </CardContent>
        </Card>

        <Stack spacing={2} direction="row-reverse" centered="true" mt={2}  mb={10}  >
          <Button variant="contained" fullWidth onClick={() => handleOpen()}>Registrar movimiento</Button>
        </Stack>

      

      </Container>
    </>
  )
}

export default Register