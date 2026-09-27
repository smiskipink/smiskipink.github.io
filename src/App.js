  import logo from './logo.svg';
  import './App.css';


  // CSS
  import './css/wanderwallc.css';

  import a from './pics/a.jpg';
  import b from './pics/b.jpg';
  import c from './pics/c.jpg';
  import d from './pics/d.jpg';
  import e from './pics/e.jpg';

  import Wanderwall from './pages/Wanderwall';

  function App() {
    return (
      <div className='mainc'>

        <p className="cu">
          CUTIE PICS
        </p>

        <div className="container">
          <img src={a} className="ab" alt="bebi" />
          <img src={b} className="ab" alt="bebi" />
          <img src={c} className="ab" alt="bebi" />
          <img src={d} className="ab" alt="bebi" />
          <img src={e} className="ab" alt="bebi" />
        </div>

        <div className="container">
                <Wanderwall/>


        </div>

       




      </div>
    );
  }

  export default App;