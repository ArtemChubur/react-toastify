import './App.css';
import {showError, showSuccess} from "./utils/Alert";

function App() {
  return (
    <div className="App">
      <input value={'Успех'} onClick={() => showSuccess('Успешно выполнено!', 'Успешная кнопка.')} type="button"/>
      <input value={'Не успех'} onClick={() => showError('Ошибка выполнения!', 'Кнопка ошибки.')} type="button"/>
    </div>
  );
}

export default App;
