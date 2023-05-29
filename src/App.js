import logo from "./images/kowelogo.png";
import wallet from "./images/Wallet.png";
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/manrope";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <img src={logo} alt="logo" style={{ width: "100px", height: "auto" }} />
        
          <p className='link'>About us</p>
        
      </nav>

      <section className="Hero">
        <h1>More spending, less cash or card</h1>
        <div className="textContainer">
          <p>
            Unlock the next level of convenience with Kowe Pay. Pay in Style,
            Pay with Ease, Pay with Confidence. Join the Future of
            Payments Today!
          </p>
        </div>

        <nav className="emailHero">
          <div className="left-email">
            <input type="email" placeholder="Enter e-mail address"></input>
          </div>

          <div className="right-button">
            <div class="btn btn-primary btn-sm custom-btn">
              <button type="button" class="btn btn-primary btn-sm">
                Get Early Access
              </button>
            </div>
          </div>
        </nav>
      </section>

      <div className="Wallet">
        <img src={wallet} alt="logo" className="center-img" />
      </div>

      <footer className="footer">
        <p className="text-right">Copyright © 2023 Kowe, Inc.</p>
      </footer>
    </div>
  );
};

export default App;
