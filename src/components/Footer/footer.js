import {FaWhatsapp, FaLinkedin  } from 'react-icons/fa';
import{ CgInstagram} from 'react-icons/cg'


function Footer(){
    return(
      <footer className='footer'>
          <div>
            <div className='footerBox1'>
              <div><div>
              <h2 className='titleFooter'>Meu primerio projeto utilizando React</h2>
              </div>
  
                <h4 className='subTitleFooter'>Para mais informaçôes meu email para contato  <strong><a href='#'>eduardopavei@123gmail.com
                </a></strong>
                 e meu repositorio no  <a href='https://github.com/EduardoPavei00?tab=repositories' target="_blank" >GitHub</a>
                </h4>
                </div>
              </div>
              
              <div className='footerBox2'>
                <div className='social'>
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
