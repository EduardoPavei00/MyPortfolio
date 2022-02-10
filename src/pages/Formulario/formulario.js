import React, { useState } from 'react';
import {  FaJava, FaPython, FaPhp} from 'react-icons/fa';
import { IoLogoJavascript} from 'react-icons/io';
import {SiKotlin} from 'react-icons/si'
import{CgCPlusPlus} from 'react-icons/cg'






 function Formulario() {
    const [formValues, setFormValues] = useState({});
    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
      setFormValues({ ...formValues, [name]: value });
  
    };
  
    const handleSumit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
  
      console.log('*** handleSumit', data);
    }
    console.log('*** formValues', formValues)

    function validarSenha(){
      const senha1 = document.getElementById('senha1').value;
      const senha2 = document.getElementById('senha2').value;
      if(senha1 !== senha2){document.getElementById('erro').style.display ='block'
    }else{document.getElementById('erro').style.display = 'none'
    }
    }
  
  
    return (
      <main>
      <div>
  
        <form className='formulario' onSubmit={handleSumit}>
          <div className='nomeCompleto'>
            
            <input type="text" className='input' name="name" placeholder='Name:' onChange={handleInputChange} valeu={formValues.name || ''} />
  
            <input type="text" className='input' name="lastName" placeholder='Last Name:' onChange={handleInputChange} valeu={formValues.sobrenome || ''} />
          </div>
  
          <div className='divEmail'>
           
            <input type="email" className='inputEmail' name="email:" placeholder='Email:' onChange={handleInputChange} valeu={formValues.email || ''} />
  
          <div className="divSexo">
            <select className="sexo" name="sexo" onChange={handleInputChange} valeu={formValues.sexo || ''} >
              <option value="Masculino" > Masculino</option>
              <option value="Feminino" > Feminino</option>
              <option value="Outros" > Outros</option>
            </select>
            </div>
          </div>
  
          <div id ='grupSenha'>
            <input id='senha1'  className = "input" type="password" name ="password" placeholder='Digite sua senha:'onChange={handleInputChange}/>
            <input id='senha2' className = "input" type="password" name ="password" placeholder='Confirme sua senha:'onChange={handleInputChange}/>
          <strong id='erro' className='erro'>Senhas diferentes  ! !  Porfavor corrija!! </strong>
          </div>
  
          <div className='boxRadio'>
            <label className='textRadio'>Qual sua linguagem de programação?</label>
            <div className='grupRadio'>
              <label><input id="radio" className='radio1' type="radio" value="java" name="linguage" onChange={handleInputChange} /><FaJava className='icon-radio'/>Java</label>
              
              <label><input id="radio" className='radio3' type="radio" value="kotlin" name="linguage" onChange={handleInputChange} /><SiKotlin className='icon-radio'/>Kotlin</label>
              <label><input id="radio" className='radio4' type="radio" value="python" name="linguage" onChange={handleInputChange} /><FaPython className='icon-radio'/>Python</label>
              <label><input id="radio" className='radio5' type="radio" value="c++" name="linguage" onChange={handleInputChange} /><CgCPlusPlus className='icon-radio'/></label>
              <label><input id="radio" className='radio5' type="radio" value="c++" name="linguage" onChange={handleInputChange} /><FaPhp className='icon-radio'/>PHP</label>
              <label><input id="radio" className='radio2' type="radio" value="javascript" name="linguage" onChange={handleInputChange} /><IoLogoJavascript className='icon-radio'/>Java Script</label>
            </div>
          </div>
  
          <div>
          <textarea className='textarea' placeholder='Escreva um poucou sobre você:' name='bio ' onChange={handleInputChange} ></textarea>
          </div>
  
          <div>
          <button type='submit' onClick={validarSenha} className='botao'>Cadastrar</button>
          </div>
  
  
  
        </form>
        </div>
        </main>
      
  
    );
  }
  export default Formulario;
