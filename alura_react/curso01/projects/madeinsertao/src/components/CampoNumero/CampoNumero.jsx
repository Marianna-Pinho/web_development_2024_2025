import './CampoNumero.css'

const CampoNumero = (props) => {
    // Formata a string do placeholder, colocando ... no final
    const placeholder = `${props.placeholder}...`
    const idadeMinima = 8
    const idadeMaxima = 18

    const aoDigitar = (evento) => {
        const idade = evento.target.value
        if (idade < idadeMinima) {
            window.alert(`A idade mínima é de ${idadeMinima} anos`)
            props.tratamentoAoDigitar(idadeMinima)
        } else if (idade > idadeMaxima) {
            window.alert(`A idade máxima é de ${idadeMaxima} anos`)
            props.tratamentoAoDigitar(idadeMaxima)
        }else {
            props.tratamentoAoDigitar(evento.target.value)
        }
    }

    return (
        <div className='campo-numero'>
            <label>{props.label}</label>
            <input type="number" min={idadeMinima} max={idadeMaxima} value={props.value} onChange={aoDigitar} required={props.required} placeholder={placeholder}/>
        </div>
    )
}

export default CampoNumero;