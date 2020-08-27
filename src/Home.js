import React, { useEffect } from 'react';
import web from '../src/img2.png';
import './index.css';
import '../src/animate.css';
import $ from 'jquery';
const Home=()=>{

  useEffect(()=>{
    $('#videolink').magnificPopup({
      type: 'inline',
      midClick: true
  });
  })
   

  
   return(<>
       <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Grow Your Knowledge with <span className="brand-name animate">Anupam Guin</span></h1>
                <h2 className="my-3 text-info">
                  We are the team of talented developer making Responsive websites
             </h2>
                <br />

                <div className="mt-3 button_great content">
                  <button>
                    <a href="#videostory" id="videolink" className="btn-get-started">Get Video</a>
                  </button>
                  <div id="videostory" className="mfp-hide col-10 col-md-8" style={{maxWidth:'75%', margin:'0 auto'}}>

                 <iframe width="800" height="450" className="" title="iframe" src="https://www.youtube.com/embed/a6cJAFFQn_I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                 </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 col-sm-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated " alt="not load" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>);

}
export default Home;