import './CampoTexto.css'
import {useState} from 'react'

export const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    // let valor = ''
    //Hook: consegue manter um estado dentro de uma função
    // const [valor, setValor] = useState('Marianna')

    const aoDigitar = (evento) => {
        // valor = evento.target.value
        // setValor(evento.target.value)
        // console.log(valor)
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}