import './App.css';
import MemberList from './MemberList.js';
import AnimationTrigger from "./AnimationTrigger.tsx";
import data from "./basicData.json"

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='Title-anim'>しれふぁら！！</h1>
      </header>
      
      <AnimationTrigger animation="fadeIn" rootMargin="50px">
        <div className='ContentItem'>
          <h2>What's New</h2>
          {(()=>{
            const r = [];
            data['whats-new'].forEach(element => {
              r.push(<a>{element.date} {element.message}</a>)
            })
            return r;
          })()}
        </div>
      </AnimationTrigger>

      
      <AnimationTrigger animation="fadeIn" rootMargin="50px">
        <div className='ContentItem'>
          <h2>メンバー</h2>
            <MemberList />
        </div>
      </AnimationTrigger>

      <AnimationTrigger animation="fadeIn" rootMargin="50px">
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
