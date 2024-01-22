import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Add = () => {
const [add,setAdd] = useState({
    nome:"",
    sobrenome:"",
    cpf:""
});
const navigate = useNavigate();
const hadleChange = (e) =>{
    setAdd(prev =>({...prev,[e.target.name]: e.target.value}));
};



const hadleClick = async e =>{
     e.preventDefault();

    try{
        await axios.post("http://localhost:8080/criarUsuario",add);
        navigate("/");
    }catch(err){
        console.log(err);
    }



}


  return (
    <div className='form'>
        <h1>Cadastrar</h1>
        <input type="text" placeholder='insirar o nome' name="nome" onChange={hadleChange}/>
        <input type="text" placeholder='insirar o  sobrenome' name="sobrenome" onChange={hadleChange}/>
        <input type="text" placeholder='insirar o cpf' name="cpf" onChange={hadleChange}/>   
        <button onClick={hadleClick}>Add</button>
        <Link to="/">Voltar pagina inicinal</Link>
    </div>  
   
  )
}

export default Add