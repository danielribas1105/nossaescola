import './TextField.css';

const TextField = (props) => {

    const toEntry = (event) => {
        props.toAltered(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.fieldValue} onChange={toEntry} required={props.obligation} type="text" placeholder={props.placeholder}/>
        </div>
    );
}

export default TextField;