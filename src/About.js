import React from 'react';
import { Animated } from "react-animated-css";

const About = () => {
  return (<>
    <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
      <footer>
        <div className="list">
          <h2>Something about me</h2>
          <ul>
            <li><span>I am Anupam Guin from West Bengal</span></li>
            <li><span>Templecity Institute of technology and engineering </span></li>
            <li><span>Love Computer science </span></li>
            <li><span>Webpage using React JS</span></li>
            <li><span>Loves our teachers Subhankar Sir and Nilmadhab Sir</span></li>
            <li><span>Welcome in this Website Sir</span></li>
          </ul>
        </div>
      </footer>
    </Animated>
    
   </> 
  );
}
export default About;