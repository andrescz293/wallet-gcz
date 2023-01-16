import React , {useState , useEffect} from 'react'
import { Container , FormControl , MenuItem , TextField , Button , Card, Grid , Box , Typography, CardContent } from '@mui/material';
import {  LocalizationProvider } from '@mui/x-date-pickers/';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import NewRegisterFormInputs from './js/NewRegisterFormInputs';

let formReg = NewRegisterFormInputs;
const categorys = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const NewRegister = () => {

  const [dateInit, setDateInit] = useState(dayjs())

  const handleChange = (value) =>{

    switch (value.target) {
      case 'dateInit':
        setDateInit(value.value)
      break;
    }
  }
  
  const [btnSelected1, setbtnSelected1] = useState("primary")
  const [btnSelected2, setbtnSelected2] = useState("secondary")
  const [btnSelected3, setbtnSelected3] = useState("secondary")

  const defaultBtn = ()  => {
    for (let i = 1; i <= 3; i++) {
      eval(`setbtnSelected${i}("secondary")`)
    }
  }

  
  const typeRegister = (value) => {
    defaultBtn()
    switch (value) {
      case "ingress":
        setbtnSelected1("primary")
        formReg = {... formReg ,typeRegister: value}
        break;
      case "egress":
        setbtnSelected2("primary")
        formReg = {... formReg ,typeRegister: value}
        break;
      case "transfer":
        setbtnSelected3("primary")
        formReg = {... formReg ,typeRegister: value}
        break;
    }
  }

  useEffect(() => {
    defaultBtn();
    typeRegister("ingress")
  }, [])
  

  return (
    <>
      <Container maxWidth="sm" >
      <Box sx={{ flexGrow: 1 }} >
        <Card className='cardStyle'  elevation={0}>
          <CardContent>
            <Typography variant="h6" sx={{fontWeight :'600'}} component="div" align='left'>
              Tipo de movimiento
            </Typography>
            <Grid container spacing={1} mt={0}  >
              <Grid item xs={4}>
                <Button color={btnSelected1} fullWidth variant="contained" onClick={() => typeRegister("ingress")}>Ingreso</Button>
              </Grid>
              <Grid item xs={4} >
                <Button color={btnSelected2} fullWidth variant="contained" onClick={ () => typeRegister("egress") }>Egreso</Button>
              </Grid>
              <Grid item xs={4} >
                <Button color={btnSelected3} fullWidth variant="contained" onClick={ () => typeRegister("transfer") }>Transferencia</Button>
              </Grid>
            </Grid>

            
            

            <Grid container pr={2} pl={2} >

            <Grid  item xs={12} >
              <Typography variant="h6" sx={{fontWeight :'600' , marginTop:'10px' , marginBottom:'10px'}} component="div" align='left'>
                Fecha movimiento 
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl sx={{ m: 1 }} fullWidth  variant="outlined">
                  <DateTimePicker 
                    label="Fecha"
                    value={dateInit}
                    onChange={(e) => handleChange({target:'dateInit' , value: e})}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </LocalizationProvider>
            </Grid>

              {formReg.typeRegister !== "transfer" ?
                <>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{fontWeight :'600' , marginTop:'10px'}} component="div" align='left'>
                      Cuenta 
                    </Typography>
                    <FormControl sx={{ m: 1 }} fullWidth  variant="outlined">
                      <TextField  id="account" select label="Seleccione una cuenta" >
                        {categorys.map((option) => (
                          <MenuItem key={option.value} value={option.value}> {option.label}</MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{fontWeight :'600' , marginTop:'10px'}} component="div" align='left'>
                    Categoria
                    </Typography>
                    <FormControl sx={{ m: 1 }} fullWidth  variant="outlined">
                      <TextField  id="category" select label="Seleccione una categoria">
                        {categorys.map((option) => (
                          <MenuItem key={option.value} value={option.value}> {option.label}</MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>
                </>
              :

                <>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{fontWeight :'600' , marginTop:'10px'}} component="div" align='left'>
                      Cuenta origen
                    </Typography>
                    <FormControl sx={{ m: 1 }} fullWidth  variant="outlined">
                      <TextField  id="account" select label="Seleccione una cuenta" >
                        {categorys.map((option) => (
                          <MenuItem key={option.value} value={option.value}> {option.label}</MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{fontWeight :'600' , marginTop:'10px'}} component="div" align='left'>
                    Cuenta destino
                    </Typography>
                    <FormControl sx={{ m: 1 }} fullWidth  variant="outlined">
                      <TextField  id="category" select label="Seleccione una cuenta">
                        {categorys.map((option) => (
                          <MenuItem key={option.value} value={option.value}> {option.label}</MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>
                </>
              }

              <Grid item xs={12} justifyContent="center" alignItems="center">
                <Typography variant="h6" sx={{fontWeight :'600' , marginTop:'10px'}} component="div" align='left'>
                Detalle de movimiento
                </Typography>
                <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                  <TextField id="valueRegister" type={'number'} label="Valor movimiento" variant="outlined" />
                </FormControl>
                <FormControl sx={{ m: 1  }} fullWidth variant="outlined">
                  <TextField id="descriptionRegister" label="Descripción" variant="outlined" />
                </FormControl>
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </Box>

      </Container>
    </>
  )
}

export default NewRegister