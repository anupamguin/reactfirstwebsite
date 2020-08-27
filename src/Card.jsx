import React from 'react';
const Card=(props)=>
{
   const url="http://gopalguin.ultimatefreehost.in";
  return(<>
                <div className="col-md-4 col-10 mx-auto ">
                <div className="card card_0">
                   <img src={props.imgsrc} className="card-img-top" alt="not load"/>
                   <div className="card-body">
                     <h5 className="card-title">{props.title}</h5>
                     <p className="card-text">{props.bodyMain}</p>
                     <a href={url} className="btn_0">Go somewhere</a>
                   </div>
                 </div>     
              </div>  

                  
      </>);
}
export default Card;