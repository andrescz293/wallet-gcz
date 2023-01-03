import React , { useState } from 'react'
import {Box, TextField , Typography , Container , Card , CardContent , Button , Divider , Grid , List , ListItem , ListItemText , ListItemAvatar , Avatar } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { MobileDatePicker , LocalizationProvider } from '@mui/x-date-pickers/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const Config = () => {

  const [dateInit, setDateInit] = useState(dayjs())
  const [dateEnd, setDateEnd] = useState(dayjs())
  const [typeCurrency, setTypeCurrency] = useState()
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
        <Card className='cardStyle' elevation={0} >
          <CardContent>
            <Typography variant="h6" sx={{fontWeight :'600'}} component="div" align='left'>
              Periodo de gastos
            </Typography>
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
            </LocalizationProvider>
          </CardContent>
        </Card>

        <hr></hr>

        <Card className='cardStyle' elevation={0} >
          <CardContent>
            <Typography variant="h6" sx={{fontWeight :'600'}} component="div" align='left'>
              Tipo de moneda
            </Typography>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeCurrency}
                label=""
                onChange={(e) => handleChange({target:'typeCurrency' , value: e})}
              >
                <MenuItem value={'$'}>COP</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

          </CardContent>
        </Card>

        <hr></hr>

        <Card className='cardStyle' elevation={0} >
          <CardContent>
            <Typography variant="h6" sx={{fontWeight :'600'}} component="div" align='left'>
              Tipo de moneda
            </Typography>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeCurrency}
                label=""
                onChange={(e) => handleChange({target:'typeCurrency' , value: e})}
              >
                <MenuItem value={'$'}>COP</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

          </CardContent>
        </Card>

      </Container>
    </>
  )
}

export default Config