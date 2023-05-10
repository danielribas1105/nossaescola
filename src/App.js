import { useState } from 'react';
import Banner from './component/Banner';
import Form from './component/Form';
import Team from './component/Team';

function App() {

  const teams = [
    {
      nome: "Diretoria",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Coordenação",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F1FF"
    },
    {
      nome: "Colaboradores",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "Fundamental I",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: "Fundamental II",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
  ];

  const [colaboradores, setColaborador] = useState([]);

  const toNewColaboradorAdicionado = (colaborador) => {
    console.log("Colaborador New => ", colaborador);
    setColaborador([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner/>
      <Form toColaboradorCadastrado={colaborador => toNewColaboradorAdicionado(colaborador)} 
      />
      {teams.map(time => <Team 
                            key={time.nome} 
                            nome={time.nome} 
                            bgColor={time.corSecundaria}
                            cardColor={time.corPrimaria} />)}
    </div>
  );
}

export default App;
