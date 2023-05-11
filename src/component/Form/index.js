import { useState } from 'react';
import Button from '../Button';
import DropDownList from '../DropDownList';
import TextField from '../TextField';
import './Form.css';

const Form = (props) => {

    const groups = [
        "Administrativo",
        "Pedagógico",
        "1º Ano",
        "2º Ano",
        "3º Ano",
        "4º Ano",
        "5º Ano",
        "Artes",
        "Ciências",
        "Educação Física",
        "Espanhol",
        "Geografia",
        "História",
        "Inglês",
        "Matemática",
        "Português",
    ];

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [grupo, setGrupo] = useState("");

    const toSave = (event) => {
        event.preventDefault();
        props.toColaboradorCadastrado({
            nome, cargo, imagem, time, grupo
        });
        setNome("");
        setCargo("");
        setImagem("");
    }

    return (
        <section className="class-form">
            <form onSubmit={toSave}>
                <h2>Preencha os dados do colaborador</h2>
                <TextField 
                    obligation={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    fieldValue={nome}
                    toAltered = {(valor) => setNome(valor)}
                />
                <TextField 
                    obligation={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    fieldValue={cargo}
                    toAltered = {(valor) => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    fieldValue={imagem}
                    toAltered = {(valor) => setImagem(valor)}
                />
                <DropDownList 
                    obligation={true} 
                    label="Times" 
                    itens={props.teams}
                    fieldValue={time}
                    toAltered = {(valor) => setTime(valor)}
                />
                <DropDownList 
                    obligation={true} 
                    label="Grupos" 
                    itens={groups}
                    fieldValue={grupo}
                    toAltered = {(valor) => setGrupo(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;