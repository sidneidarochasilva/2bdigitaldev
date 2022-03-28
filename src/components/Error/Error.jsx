import React from "react";

export default function Error({ reset }) {
   return (
      <>
         <h1>Cidade não localizada, por favor tente novamente</h1>
         <button onClick={() => reset()}> Tentar novamente </button>
      </>
   );
}
