import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Freedom from "./components/Freedom";
import Form from "./components/Form";
import Reward from "./components/Reward";
import Card from "./components/Card";
import Accordian from "./components/Accordian";
import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Freedom />
        <Form />
        <Reward />
        <Card />
        <Accordian />
        <Footer />
      </div>
    );
  }
}

export default App;
