import GlobalStyles from "./styles/global";
import "./styles/App.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
