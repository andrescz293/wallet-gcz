import React , { useState } from 'react'
import {Box, TextField , Typography , Container , Card , Button , Divider , Grid , List , ListItem , ListItemText , ListItemAvatar , Avatar } from '@mui/material';
import { MobileDatePicker , LocalizationProvider } from '@mui/x-date-pickers/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Icon } from '@mui/material';
import './css/History.css'
import { GetIcon } from '../../../utils/GetIcon';


const History = () => {

  const [dateInit, setDateInit] = useState(dayjs())
  const [dateEnd, setDateEnd] = useState(dayjs())
  const handleChange = (value) =>{

    switch (value.target) {
      case 'dateInit':
        setDateInit(value.value)
      break;

      case 'dateEnd':
        setDateEnd(value.value)
      break;
    }
  }

  return (
    <>
      <Container maxWidth="sm" >
    
      <Box sx={{backgroundColor:'#fff' , padding:'5px 20px'}}>
        <Grid pt={2} >
          <Typography mr={3} variant="h6" component="div" align='left' sx={{fontWeight:'600'}}>
            Resumen registros
          </Typography>
        </Grid>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ flexGrow: 1 }} mt={4}>
            <Grid container columnSpacing={1} justifyContent={'center'}>
              <Grid item xs={4}>
                <MobileDatePicker
                  label="Fecha inicial"
                  inputFormat="MM/DD/YYYY"
                  value={dateInit}
                  onChange={(e) => handleChange({target:'dateInit' , value: e})}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={4}>
                <MobileDatePicker
                  label="Fecha Final"
                  inputFormat="MM/DD/YYYY"
                  value={dateEnd}
                  onChange={(e) => handleChange({target:'dateEnd' , value: e})}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </Grid>
          </Box>
          <hr></hr>
          </LocalizationProvider>
        </Box>
      </Container>
      <Container maxWidth="sm" >
        
        <Card sx={{ minWidth: 200 , marginTop:2 , borderRadius:5}} elevation={2}>
          <List>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  { GetIcon('ArrowDownwardIcon' ) }
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Compra Dollar City" secondary="$25.000" />
              <Typography>
                { GetIcon('ArrowDownwardIcon'  , {color:'green'}) }
              </Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <Icon>AddCircle</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <Icon>star</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </Card>
      </Container>
    </>
  )
}

export default History