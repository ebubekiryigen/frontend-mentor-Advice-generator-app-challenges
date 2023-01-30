import { useEffect, useRef, useState } from "react"
import { Icon } from "./icon"

export default function Cart(){
    const [item,setItem] = useState({})

    const fetchData = () => {
        fetch('https://api.adviceslip.com/advice')
        .then(data => data.json())
        .then(data => setItem(data.slip))
    }

    useEffect(()=>{
        fetchData()
    },[])

    const [play,setPlay] = useState(false)

    const Interval = useRef()

    useEffect(()=>{
        if(play === true) {
        Interval.current = setInterval(()=>{
            fetchData()
        },1000)
        }else{clearInterval(Interval.current)} 
    },[play])
    function randomItem(){
        fetchData()
    }
    return(
        <div className="cart">
            <div className="cart-text">
                <div className="cart-text-title">
                    <h6>ADVİCE #{item.id}</h6>
                </div>
                <div className="cart-text-content">
                {item.advice}
                </div>
                <div className="cart-text-play-button" onClick={()=>setPlay(play === false ? true : false)}>
                    {play === false ? (<Icon name="play" />) : (<Icon name="stop"></Icon>)}
                </div>
            </div>
            <div className="cart-button" onClick={()=>randomItem()}>
                <span><Icon name="dice"  /></span>
            </div>
        </div>
    )
}