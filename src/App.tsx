import GlobalStyles from "./styles/global";

import Banner from "./components/Banner";
import Line from "./components/Line";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Banner />
      <Line />
    </div>
  );
};

export default App;
