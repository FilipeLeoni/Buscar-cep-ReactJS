import {useState} from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import './styles.css'
import api from './services/api'
<style>
@import url('https://fonts.googleapis.com/css2?family=Updock&display=swap');
</style>


function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({})

  async function handleSearch() {
    if(input === '') {
      alert("Preencha algum cep!")
      return
    }
  
  try {
    const response = await api.get(`${input}/json`);
    setCep(response.data)
    setInput("");
  } catch {
    alert("Ops erro ao buscar");
    setInput("")
  }
}

  return (
    <div className="container">
      <h1 className="title">BUSCADOR DE CEP</h1>
      <div className="containerInput">
    <input 
    type="text"
    placeholder="Digite seu CEP..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
    autocomplete="off"
    >
    </input>
    <button className="ButtonSearch" onClick={handleSearch}>
      <FaSearchLocation size={25} color="#fff"/>
    </button>
      </div>

      {Object.keys(cep).length > 0 && (
         <main className='main'>
         <h2>CEP: {cep.cep} </h2>
 
         <span> {cep.logradouro} </span>
         <span>DDD: {cep.ddd} </span>
         <span>Bairro: {cep.bairro}</span>
         <span>Cidade: {cep.localidade} - {cep.uf} </span>
 
       </main>
      )}

    </div>
  );
}

export default App;
