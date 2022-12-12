import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export function GetIcon  (iconName , additionalParam) {
  switch (iconName) {
    case 'ArrowDownwardIcon':
      return <ArrowDownwardIcon sx={additionalParam}/>    
  
    default:
      break;
  }
}
