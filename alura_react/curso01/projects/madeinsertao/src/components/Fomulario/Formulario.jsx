import { useState } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import './Formulario.css'
import CampoNumero from '../CampoNumero/CampoNumero';

const Formulario = (props) => {
    const idadeMinima = 8

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(idadeMinima)
    const [instrumento, setInstrumento] = useState("")
    const [professor, setProfessor] = useState("")

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para se inscrever nas aulas de música</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    valor={nome}
                    tratamentoAoDigitar={valor => setNome(valor)}
                />
                <CampoNumero
                    label="Idade"
                    placeholder="Selecione sua idade"
                    required={true}
                    valor={idade}
                    tratamentoAoDigitar={valor => setIdade(valor)}
                />
            </form>
        </section>
    )
}

export default Formulario;