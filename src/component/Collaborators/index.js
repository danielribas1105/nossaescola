import './Collaborators.css';

const Collaborators = ({imagem, nome, cargo, grupo, cardColor}) => {
    if(imagem === ""){
        imagem = "/images/foto-padrão.jpg";
    }
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: cardColor}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h6>{grupo}</h6>
            </div>
        </div>
    );
}

export default Collaborators;