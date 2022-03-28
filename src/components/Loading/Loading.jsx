import React from "react";
import "./styles.scss";

export default function Loading({ location }) {
   return (
      <div className="container-principal-LoginLoading">
         <h1>{location}</h1>

         <div className="loader-central">
            <div className="lds-ring">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
      </div>
   );
}
