import "./App.css";
import JumiaCategory from "./JumiaCategory/JumiaCategory";
import JumiaHeader from "./JumiaHeader/JumiaHeader";
import JumiaProduct from "./JumiaProduct/JumiaProduct";

import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

<div className="jumiaBody">
      <JumiaHeader />

      <JumiaCategory />

      {/* Finally, Building the Product Items */}

   <JumiaProduct />

    </div>
    </div>
  );
}

export default App;
