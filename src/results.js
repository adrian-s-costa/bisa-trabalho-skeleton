import axios from "axios";
import { useEffect, useState } from "react";

export default function Resultado(){

  const [resultado, setResultado] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3001/form').then((response) => {
      setResultado(response.data.formData)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return(
    <>
      <h1>Resultado</h1>
      <p>Nome: {resultado.nomeCompleto}</p>
      <p>Data de Nascimento: {resultado.dataNascimento}</p>
      <p>CPF: {resultado.cpf}</p>
      <p>Celular: {resultado.celular}</p>
      <p>Telefone: {resultado.telefone}</p>
      <p>Website: {resultado.website}</p>
      <p>Email: {resultado.email}</p>
      <p>Endereço: {resultado.endereco}</p>
      <p>Bairro: {resultado.bairro}</p>
      <p>Cidade: {resultado.cidade}</p>
      <p>CEP: {resultado.CEP}</p>
      <p>Login: {resultado.login}</p>
      <p>Senha: {resultado.senha}</p>
      <h4>Newsletter:</h4>
      <p>Esportes: {resultado.newsletter.esportes}</p>
      <p>Tecnologia: {resultado.newsletter.tecnologia}</p>
      <p>Automoveis: {resultado.newsletter.automoveis}</p>
    </>
  )
}