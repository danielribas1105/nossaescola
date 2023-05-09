import './Button.css';

const Button = (props) => {
    return(
        <button className="btn-criar-card">{props.children}</button> 
    );
}

export default Button;