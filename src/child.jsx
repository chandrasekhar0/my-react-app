import { useEffect, useState } from "react";

function Child({fruitsObject}) {
  return (
    <>
    {
      fruitsObject.map((fruitName)=>{
        return <p>{fruitName.name}</p>
      })
    }
     </>
  );
}


export default Child;