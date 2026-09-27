import '../css/wanderwallc.css';
import aya from '../pics/aya.png';

function Wanderwall() {
  return (
    <div className="wdivmain">
      <p className="wtext">wanderwall</p>
      <h1> most evil sa wanderwall </h1>
      <h2> 1. aya</h2>

        <img src={aya} className="aya" alt="bebi" />

    </div>
  );
}

export default Wanderwall;