import Header from "./components/Header";
import HeroText from "./components/HeroText";

function App() {
  return (
    <>
      <div className="container grid grid-cols-custom-12 grid-rows-3">
        <Header />
        <HeroText />
      </div>
    </>
  );
}

export default App;
