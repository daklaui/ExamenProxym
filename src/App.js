import './App.css';
import FirstSection from './scenes/Main/firstSetion/firstSection';
import SecondSection from './scenes/Main/secondSection/SecondSection';
import ThirdSection from './scenes/Main/ThirdSection/ThirdSection';

import FourSection from './scenes/Main/FourSection/FourSection';
import Menu from './scenes/Menu/Menu';
import FiveSection from './scenes/Main/FiveSection/FiveSection';
import Footer from './scenes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Menu></Menu>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourSection></FourSection>
        <FiveSection></FiveSection>
        </div>
        <div  class="container-fluid">
        <Footer></Footer>
        </div>
       
    </div>
  );
}

export default App;
