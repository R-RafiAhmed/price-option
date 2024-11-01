import "./App.css";
// import Dnavbar from "./component/Dnavbar/Dnavbar";
import Navbar  from "./component/Navbar/Navbar";
import PriceOptions from "./component/PriceOptions/PriceOptions";
import LineChart from "./component/LineChart/LineChart";

function App() {
  return (
    <>
      <main className="container m-auto">
        

        <Navbar></Navbar>
        {/* <Dnavbar></Dnavbar> */}
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
      </main>
    </>
  );
}

export default App;
