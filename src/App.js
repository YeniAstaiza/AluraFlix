import React from "react";
import GlobalStyle from "./globalStyles.js";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Banner/>
      <Footer/>
      <Container>
        
      </Container>
      
    </div>
  );
}

export default App;
