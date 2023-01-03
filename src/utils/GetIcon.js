import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


export function GetIcon  (iconName , additionalParam) {
  switch (iconName) {
    case 'ArrowDownwardIcon':
      return <ArrowDownwardIcon sx={additionalParam}/>
    case 'AccountBalanceWalletIcon':
      return <AccountBalanceWalletIcon sx={additionalParam}/>
      
    default:
      break;
  }
}
