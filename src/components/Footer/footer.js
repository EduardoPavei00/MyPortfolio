import {FaWhatsapp, FaLinkedin  } from 'react-icons/fa';
import{ CgInstagram} from 'react-icons/cg'


function Footer(){
    return(
      <footer className='footer'>
          <div>
            <div className='footerLeft'>
              <div><div>
              <h1 className='titleFooter'>Meu primerio projeto utilizando React</h1>
              </div>
  
                <p className='subTitleFooter'>Para mais informaçôes meu email para contato  <strong>eduardopavei@123gmail.com
                </strong>
                 e meu repositorio no  <a href='https://github.com/EduardoPavei00?tab=repositories' target="_blank" >GitHub</a>
                </p>
                </div>
              </div>
              
              <div className='footerRight'>
                <div className='socialFooter'>
                <a className='textIconFooter' ><FaWhatsapp className='iconFooter' />:(48) 9 96711639</a>
                 <a className='textIconFooter' href='#'><FaLinkedin className='iconFooter' />: @EduardoPavei</a>
                  <a className='textIconFooter' href='#'><CgInstagram className='iconFooter'/>: @E_pavei00</a>
                </div>
              </div>
          </div>
          
  
        </footer>
  
     
    );
  }
  
export default Footer;  
