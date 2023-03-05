import './App.css';
import MemberItem from './MemberItem.js';
import AnimationTrigger from "./AnimationTrigger.tsx";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='Title-anim'>しれふぁら！！</h1>
      </header>
      
      ボーマス51に申し込み中。
      <AnimationTrigger animation="fadeIn" rootMargin="-100px">
        <div className='ContentItem'>
          <h2>メンバー</h2>
            <MemberItem />
        </div>
      </AnimationTrigger>

      <AnimationTrigger animation="fadeIn" rootMargin="-100px">
        <div className='ContentItem'>
          <h2>アルバム</h2>
        </div>
      </AnimationTrigger>

      <footer className='App-footer'>
      
      </footer>
    </div>
    
  );
}

export default App;
