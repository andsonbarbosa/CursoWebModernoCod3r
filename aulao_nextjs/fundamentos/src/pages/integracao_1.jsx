import Layout from "../components/layout"
import { useState } from "react"

export default function Integracao(){

    const [cliente, setCliente] = useState({})
    const [codigo, setcodigo] = useState(1)

    function obterCliente(){
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
        .then(resp => resp.json())
        .then(dados => setCliente(dados))
    }

    return (
        <Layout titulo="Integração com API #01" >
            <div>
                <input type="number" value={codigo} onChange={e => setcodigo(e.target.value)} />
                <button onClick={obterCliente}>Obter Clientes</button>
            </div>    
            <ul>
                <li>Código: {cliente.id} </li>
                <li>Nome: {cliente.nome} </li>
                <li>E-mail: {cliente.email} </li>
            </ul>
        </Layout>
        
    )
}