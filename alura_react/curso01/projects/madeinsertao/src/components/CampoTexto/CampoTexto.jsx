import './CampoTexto.css'

const CampoTexto = (props) => {
    // Formata a string do placeholder, colocando ... no final
    const placeholder = `${props.placeholder}...`
    // Ao ocorrer uma mudança no input, podemos executar uma ação.
    // Neste caso, vai ser algum processamento que utiliza o valor recuperado no evento de mudança
    // A variável evento poderia ter outro nome, mas a ideia dela é trazer informações sobre a mudança ocorrida
    const aoDigitar = (evento) => {
        props.tratamentoAoDigitar(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitar} required={props.required} placeholder={placeholder}/>
        </div>
    )
}

export default CampoTexto;