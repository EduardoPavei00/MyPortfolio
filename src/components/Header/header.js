import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { border } from '@mui/system';
import{ Link } from 'react-router-dom'


function Container(){
    return(
      <AppBar position="static"
       sx = {{
         backgroundColor : "#0A9396" 
       }}>
  <toolbar className='container' variant="dense">
  
  <div  className ='containerLeft'>
        <h1 className = 'containerTitle'  >
          
           
           </h1>
    </div>
    <div className ='containerRight'>

      <Link className='containerBotao' to ="/contato" > Contato</Link>
      <Link className='containerBotao' to ="/formulario" > Formulario</Link>
      <Link className='containerBotao' to ="/" > Home</Link>

      
    </div>
  
  </toolbar>
  </AppBar>
  
    );
  }
  export default Container;