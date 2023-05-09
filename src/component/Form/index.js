import Button from '../Button';
import DropDownList from '../DropDownList';
import TextField from '../TextField';
import './Form.css';

const Form = () => {
    const teams = [
        "Diretoria",
        "Coordenação",
        "Colaboradores",
        "Fundamental I",
        "Fundamental II"
    ];
    const groups = [
        "1º Ano",
        "2º Ano",
        "3º Ano",
        "4º Ano",
        "5º Ano",
        "Matemática",
        "Português",
        "História",
        "Geografia"
    ];

    const toSave = (event) => {
        event.preventDefault();
        console.log("Salvar formulário!!!");
    }

    return (
        <section className="class-form">
            <form onSubmit={toSave}>
                <h2>Preencha os dados do colaborador</h2>
                <TextField obligation={true} label="Nome" placeholder="Digite o seu nome" />
                <TextField obligation={true} label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDownList obligation={true} label="Times" itens={teams}/>
                <DropDownList obligation={true} label="Grupos" itens={groups}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;