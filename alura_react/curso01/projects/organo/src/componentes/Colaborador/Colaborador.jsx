import './Colaborador.css'

export const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape-colaborador'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

// export const Colaborador = (props) => {
//     return (
//         <div className='colaborador'>
//             <div className='cabecalho'>
//                 <img src={props.imagem} alt={props.nome}/>
//             </div>
//             <div className='rodape'>
//                 <h4>{props.nome}</h4>
//                 <h5>{props.cargo}</h5>
//             </div>
//         </div>
//     )
// }