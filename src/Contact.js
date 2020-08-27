import React, { useState } from 'react';
import '../src/animate.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { Animated } from "react-animated-css";

const Contact = () => {

  const [a, b] = useState({ fName: '', lName: '', email: '', mobile: '', msg: '' });
  const chng = (event) => {
    var name = event.target.name;
    var value = event.target.value;

    b((e) => {
      return {
        ...e, [name]: value
      }
    })
  }

  const Click = () => {
    console.log(a.fName + "  " + a.lName + "  " + a.email + "  " + a.mobile + "  " + a.msg);
    a.fName="";
  }
  return (
    <footer className="conFoot">
      <div className="container">
      <Animated animationIn="wobble" animationOut="fadeOut" isVisible={true}>
        <h2>Contact Us</h2>
      </Animated>
        <div className="row100">

        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>

          <div className="col">
            <div className="inputBox">
              <input type="text" name="fName" onChange={chng} required />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
   </Animated>
   <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

          <div className="col">
            <div className="inputBox">
              <input type="text" name="lName" onChange={chng} required />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
          </Animated>
        </div>

        <div className="row100">
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>

          <div className="col">
            <div className="inputBox">
              <input type="text" name="email" onChange={chng} required />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          </Animated>
          <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

          <div className="col">
            <div className="inputBox">
              <input type="text" name="mobile" onChange={chng} required />
              <span className="text">Mobile</span>
              <span className="line"></span>
            </div>
          </div>
          </Animated>
        </div>

        <div className="row100">
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
          <div className="col">
            <div className="inputBox textarea">
              <textarea required="required" name="msg" onChange={chng}></textarea>
              <span className="text">Type your message here...</span>
              <span className="line"></span>
            </div>
          </div>
          </Animated>
          <div className="row100">
            <div className="col">
              <input type="submit" value="Send" onClick={Click} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Contact;