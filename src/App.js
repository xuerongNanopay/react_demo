// import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const say = 'Hello, React';
  const list = ['aaa', 'bbb', 'vvv'];

  return (
    <>
      <h1 id="title" className="header">
        <span>{say}</span>
      </h1>

      <h1 style={{color: 'red', fontSize: '20px'}}>
        <span>{say}</span>
      </h1>

      {
        list.map((word) => {
          return <p>{word}</p>;
        })
      }
    </>
  );
}

export default App;
