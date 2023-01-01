import GlobalStyles from "./styles/global";
import "./styles/App.css";

import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Banner />
    </div>
  );
};

export default App;
