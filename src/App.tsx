import "./App.css";
import Header from "./components/header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSlider from "./components/home-slider";
import Services from "./components/services";

function App() {
  return (
    <>
      <Header />
      <HomeSlider />
      <Services />
    </>
  );
}

export default App;
