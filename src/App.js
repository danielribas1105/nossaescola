import { useState } from 'react';
import Banner from './component/Banner';
import Form from './component/Form';

function App() {

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
    </div>
  );
}

export default App;
