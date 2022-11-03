import logo from "../assets/logo.png";
import antho from "../assets/antho.png";

export default function Home() {
  return (
    <>
    <header>
     <h1><img className="logo" src={logo} /></h1>
     <h2><img className="antho" src={antho}/></h2>
      </header>

      <main>
        <div>
      <input type="text"></input>
        <div className="buttons">
          <button>Easy</button>
          <button>Normal</button>
          <button>Hard</button>
        </div>
        </div>
        
      </main>

      <footer>
        footer
      </footer>
      </>
  );
}