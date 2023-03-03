import './App.css';
import MemberItem from './MemberItem';

function App() {

  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='Title-anim'>しれふぁら！！</h1>
      </header>
      
      ボーマス51に申し込み中。

      <h2>メンバー</h2>
      <MemberItem />

      <h2>アルバム</h2>

    </div>
  );
}

export default App;
