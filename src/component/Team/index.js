import Collaborators from '../Collaborators';
import './Team.css';

const Team = (props) => {
    return (
        (props.colaboradores.length > 0) && <section className="time" style={{backgroundColor: props.bgColor}}>
            <h3 style={{borderColor: props.cardColor}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Collaborators 
                    key={colaborador.nome}
                    imagem={colaborador.imagem}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    cardColor={props.cardColor}
                />)}
            </div> 
        </section>
    );
}

export default Team;