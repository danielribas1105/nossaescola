import './DropDownList.css';

const DropDownList = (props) => {

    const toEntry = (event) => {
        props.toAltered(event.target.value);
    }

    return(
        <div className="drop-down-list">
            <label>{props.label}</label>
            <select value={props.fieldValue} onChange={toEntry} required={props.obligation}>
                {props.itens.map(item => <option key={item}>{item}</option>)};
            </select>
        </div>
    );
}

export default DropDownList;