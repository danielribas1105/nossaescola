import './DropDownList.css';

const DropDownList = (props) => {
    //console.log(props.itens);
    return(
        <div className="drop-down-list">
            <label>{props.label}</label>
            <select required={props.obligation}>
                {props.itens.map(item => <option key={item}>{item}</option>)};
            </select>
        </div>
    );
}

export default DropDownList;