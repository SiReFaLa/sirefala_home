import './App.css';

const members = [
  ["ななみつき","nanamitsuki_73"],
  ["Urban","aaaa"]
]

function App() {
  return (
    <div className="App">
      <h1>しれふぁら！！</h1>
      ボーマス51に申し込み中。

      <h2>メンバー</h2>
      {members.map((it)=>
      <p>
        <a>・ {it[0]} </a> 
        <a href={'https://twitter.com/'+it[1]}>
          @{it[1]}
        </a>
      </p>)}

      <h2>アルバム</h2>

    </div>
  );
}

export default App;
