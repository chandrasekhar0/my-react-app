import { useRef } from "react";

function UseRefComp(){
    const timerRef = useRef(null)
    function startTimer(){
        console.log(timerRef.current)
      timerRef.current = setInterval(()=>{
           console.log("...timer runs")
           console.log(timerRef.current)
      },1000)
    }
    function stopTimer() {
        clearInterval(timerRef.current)
        console.log(timerRef.current)
    }
    return(
        <>
        <p>{timerRef.current}</p>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        </>
    )
}

export default UseRefComp;