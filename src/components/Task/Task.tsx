import { useEffect, useState } from "react";
import "./Task.css";

/*  Hooks são funcionais especiais que o React disponibiliza para nós 
    termos melhor controle de algumas ações que ocorrem em nosso projeto.

    useEffect: cria uma função de Efeitos Colaterais, sempre que uma de suas 
    variaveis de dependência mudar de valor, o useEffect dispara outra função.
*/

function Task() {
  // Variaveis de Estado
  const [finalizada, setFinalizada] = useState(false); // boolean
  const [tarefa, setTarefa] = useState(""); // string

  // Função de Efeito colateral, quando a var. completado mudar de valor
  // o useEffect dispara a função () => { if... }
  useEffect(() => {
    if (finalizada == true) {
      setTarefa("Parabéns!! Sua Tarefa foi Concluída");
    }
  }, [finalizada]);

  // Outra maneira de alterar o valor da variavel de Estado sem Arrow Function
  function concluiTarefa() {
    setFinalizada(true);
  }

  return (
    <div className="container">
      <h1>Tarefa</h1>
      <h3>Status da Tarefa: {tarefa}</h3>
      <button onClick={() => { setFinalizada(true) }}> Conclua a Tarefa </button>

      {/* <button onClick={concluiTarefa}>Conclua a Tarefa</button> */}
    </div>
  );
}

export default Task;