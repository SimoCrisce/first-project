import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent
          content="Testo del bottone 1"
          color="red"
          border="2px solid white"
          padding="1rem"
          textColor="black"
          roundedBorder="20px"
          spacing="20px"
        />
        <ButtonComponent
          content="Testo del bottone 2"
          color="black"
          border="2px solid white"
          padding="1rem"
          textColor="white"
          roundedBorder="20px"
        />

        <ImageComponent
          image="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dog"
          width="200px"
          border="3px solid purple"
        />
        <ImageComponent
          image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cat"
          width="200px"
          border="3px solid purple"
        />
      </header>
    </div>
  );
}

export default App;
