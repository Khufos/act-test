import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'
const Cad = () => {

    const [cad, setCad] = useState([])
  useEffect(() => {
    const fecthAllCadastro = async () => {
      try {

        const res = await axios.get("http://localhost:8080/usuarios");
        console.log(res)
        setCad(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fecthAllCadastro()
  }, [])
  return (
    <div><Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>CPF</th>
        <th>Delete</th>
        <th>Editar</th>
      </tr>
    </thead>
    <tbody>
      {cad.map((value) => (
        <tr key={value.id}>
          <td>{value.id}</td>
          <td>{value.nome}</td>
          <td>{value.sobrenome}</td>
          <td>{value.cpf}</td>
        <td><button className='delete' onClick={()=>handleDelete(value.id)}>Delete </button></td>
        <td><button className='update'><Link to={`/update/${value.id}`}>Update</Link></button></td>
        </tr>
      ))}
    </tbody>
  </Table>
      <button><Link to="/add">Add pessoa</Link></button></div>
  )
}

export default Cad