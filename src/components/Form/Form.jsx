import React, { useState } from "react";
import "./styles.scss";

export default function Form({ submitSearch }) {
   const [location, setLocation] = useState("");

   const onSubmit = (e) => {
      e.preventDefault();
      submitSearch(location);
      setLocation("");
   };

   return (
      <form onSubmit={onSubmit} className="form">
         <h1>Wheater API</h1>
         <input
            aria-label="Localização"
            type="text"
            placeholder="Informe sua cidade"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
         />
         <button type="submit">Procurar</button>
      </form>
   );
}
