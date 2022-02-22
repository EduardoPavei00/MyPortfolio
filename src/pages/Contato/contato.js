import { inputAdornmentClasses, List } from "@mui/material";
import React,{useState} from "react";



   function AddBookList(){
       
    const [list, setList] = useState([
        {titulo :"O Iluminado", genero:"Terror", autor:"Stephen King" },
        {titulo :"It", genero: "Terror", autor:"Stephen King" },
        {titulo : "Dracula", genero : "Terror", autor:" Bram Stoker" },
        {titulo :"Harry Potter e a Pedra Filosofal", genero:"Fantasia", autor:"J. K. Rowling"},
        {titulo :"Dom Casmurro", genero: "Romance", autor:"Machado de Assis" },
        {titulo :"A Culpa É das Estrelas", genero: "Romance", autor:"John Green" }
        ])

    

function Teste(){
    { list.map((l,i)=>(
    setList([...list,
         {  titulo: input1 ,
            autor: input2,
            genero: input3} ])
    ))}
}

const [ input1, setInput1]= useState('')
const [ input2, setInput2]= useState('')
const [ input3, setInput3]= useState('')
      

        
    

    return(
        <div>

<div className  = 'fundo'>
    <h1 className = 'cabecario'>List Book </h1>
     { list.map((l,i)=>(
     <ul>
      <li key={i} id = 'l' className = 'list'>  {l.titulo}  -  {l.autor}  -   {l.genero}</li>
     </ul>
    ))}
    </div>

            <input type =  "text" placeholder=" Nome do livro:" value={input1} onChange ={(e)=>setInput1(e.target.value)} ></input>,
            <input type =  "text" placeholder="Autor do livro:" value={input2} onChange ={(e)=>setInput2(e.target.value)}></input>
            <input type =  "text" placeholder="categopria do livro:" value={input3} onChange ={(e)=>setInput3(e.target.value)} ></input>

            <button type="button" onClick={Teste} > salvar</button>
        </div>
          );
   }
    
 function Contato(){
        
          return (
           <div>
       
            <AddBookList/>
       
            
            </div>
          );
        
    }

    export default Contato;