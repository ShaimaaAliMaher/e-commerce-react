import { useState , useEffect } from "react";
function Timer({duration}) {
    const [time , setTime] = useState(duration)
    useEffect(()=>{
        setTimeout(()=>{
           setTime(time - 1000) 
        },1000)
    },[time])

    const  getformatingtime =(milliseconds)=>{
        let Totaseconds = parseInt(Math.floor(milliseconds / 1000))
        let Totalminuits = parseInt(Math.floor(Totaseconds/60))
        let Totalhours = parseInt(Math.floor(Totalminuits / 60))
        let Days = parseInt(Math.floor(Totalhours / 24))

        let seconds=parseInt(Totaseconds%60)
        let minit =parseInt(Totalminuits % 60)
        let hours = parseInt(Totalhours % 24)

        return `
        ${Days} :${hours} :${minit} :${seconds}`
    }

    return (<>
   { getformatingtime(time)}
    </>
    )
}
export default Timer;