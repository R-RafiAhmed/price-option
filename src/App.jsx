import "./App.css";
// import Dnavbar from "./component/Dnavbar/Dnavbar";
import Navbar  from "./component/Navbar/Navbar";
import PriceOptions from "./component/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <main className="container m-auto">
        

        <Navbar></Navbar>
        {/* <Dnavbar></Dnavbar> */}
        <PriceOptions></PriceOptions>
      </main>
    </>
  );
}

export default App;
