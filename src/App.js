import React, { Fragment } from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import Footer from './components/Footer';


//React.createElement=>Object => HTML(DOM)
//React Component
//functional
//class




//config driven UI



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer

root.render(<AppLayout/>);
