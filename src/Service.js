import React from 'react';
import { Animated } from "react-animated-css";
import Card from './Card';
import Sdata from './Sdata.jsx';
import '../src/animate.css';
const Service = () => {
  return (<>
    <div className="my-5">
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <h1 className="text-center">My Aim to make Amazing Webpage</h1>
      </Animated>
    </div>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
          <div className="row gy-4">
            {
              Sdata.map((value, index) => {
                return <Card key={index} imgsrc={value.imgsrc} title={value.title} bodyMain={value.bodyMain} />
              })
            }
          </div></Animated>
        </div>
      </div>
    </div>
  </>);
}
export default Service;