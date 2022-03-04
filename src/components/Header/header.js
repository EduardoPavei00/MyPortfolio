import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { border } from '@mui/system';
import{ Link } from 'react-router-dom'


function Container(){
    return(
      <AppBar position="static"
       sx = {{
         backgroundColor : "#af8e5c"
          
       }}>
  <toolbar className='container' variant="dense">
  
  <div  className ='containerLeft'>

        <Link className = 'containerTitle' to = "/"> My Firsty Site </Link>
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