import './Team.css';

const Team = (props) => {
    return (
        <section className="time" style={{backgroundColor: props.bgColor}}>
            <h3 style={{borderColor: props.cardColor}}>{props.nome}</h3>
        </section>
    );
}

export default Team;