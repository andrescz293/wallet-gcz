import React from 'react'
import { TextField , FormControl , Container , Box , Grid, Typography, Button } from '@mui/material';
import "./Login.css";

const Login = () => {
  return (
    <>
      <Container className="body-login gradient-background" maxWidth="sm" >
        <Grid className='flex-child'  >
          <Box>
            <Typography variant="h5" sx={{fontWeight:'600'}} component="div" align='center' mb={5}>  
              Iniciar sesión 
            </Typography>
          </Box>

          <FormControl fullWidth>
            <TextField id="user" label="Usuario" size="medium" variant="standard" color='white' />
            <TextField id="pass" label="Contraseña" color='white' type="password" size="medium" variant="standard" />
          </FormControl>

          <Box>
            <Button variant='contained' > Iniciar </Button>
          </Box>
        
        </Grid >
      </Container>
    </>
  )
}

export default Login