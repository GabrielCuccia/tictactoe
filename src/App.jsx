import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FiCircle, FiX } from "react-icons/fi";
import { ImCross, ImRadioChecked2, ImSpinner11 } from "react-icons/im";
import Puntuacion from './components/puntuacion';

function App() {
  let circulo = "o"
  let equis = "x"
  let [winner, setWinner] = useState(" ")
  let [winsX, setWinsX] = useState(0)
  let [winsO, setWinsO] = useState(0)
  let [winsTies, setWinsTies] = useState(0)
  const combos = [
    ["cuatro","cinco","seis"],
    ["uno","dos","tres"],
    ["uno", "cuatro", "siete"],
    ["siete","ocho","nueve"],
    ["dos","cinco","ocho"],
    ["tres","seis","nueve"],
    ["uno","cinco","nueve"],
    ["tres","cinco","siete"]    
  ]

  let [turn, setTurn] = useState(true)
  
  let [value, setValue] = useState({
    uno: " ",
    dos: " ",
    tres: " ",
    cuatro: " ",
    cinco: " ",
    seis: " ",
    siete: " ",
    ocho: " ",
    nueve: " "
  })
  let [isDisabled, setIsDisabled ] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
    cinco: false,
    seis: false,
    siete: false,
    ocho: false,
    nueve: false
  })
  
  function click(number){
    if (turn == true) {
      setValue({...value, [number]: "o"})
      setTurn(false)
      setIsDisabled({...isDisabled, [number]: true})
      
      
    } else{
      setValue({...value, [number]: "x"})
      setTurn(true)
      setIsDisabled({...isDisabled, [number]: true})
      
      
    }
    
   
    
    
    
  }
  function blockButtons(){
    if(winner !== " "){
      setIsDisabled({
        uno: true,
        dos: true,
        tres: true,
        cuatro: true,
        cinco: true,
        seis: true,
        siete: true,
        ocho: true,
        nueve: true
      })
          
    }
   
  }

  function restart(){
    setValue({
      uno: " ",
      dos: " ",
      tres: " ",
      cuatro: " ",
      cinco: " ",
      seis: " ",
      siete: " ",
      ocho: " ",
      nueve: " "
    })
    setIsDisabled({
      uno: false,
      dos: false,
      tres: false,
      cuatro: false,
      cinco: false,
      seis: false,
      siete: false,
      ocho: false,
      nueve: false
    })
    setWinner(" ")
  }
  useEffect(()=>{
    checkWinner()
    
  }, [value])
  useEffect(()=>{
    
    blockButtons()
  }, [winner])
  
  function checkWinner(){
    for (let i = 0; i < combos.length; i++){
      let [a, b, c] = combos[i]
      
      
      if(value[a] == value[b] && value[b] == value[c]){
        
        setWinner(value[b])
        
        if(value[a] == "o"){
          setWinsO(winsO + 1)
          break
        }else if(value[a] == "x"){
          
          setWinsX(winsX + 1)
          break
        }
        
        
        
      }
      
      
      
      
      
      if(value.uno !== " " && value.dos !== " " && value.tres !== " " && value.cuatro !== " " && value.cinco !== " " && value.seis !== " " && value.siete !== " " && value.ocho !== " " && value.nueve !== " "){
        setWinner("Tie")
        setWinsTies(winsTies + 1)
      }

    }
    
  }
  
  

  return (



    <div className="App">
      <div  className='header'>
        
        <div className='icons-header'>
          <ImCross size={25} color='#31c4be' />
          <ImRadioChecked2 size={25} color='#f2b237'/>
        </div>
        <div className='ganador'> {winner == "Tie" ? <p>Tie</p> : winner !== " " ? <p className='p-has-winner'>{winner == "o" ? <ImRadioChecked2 className='icono-ganador dos'/> : <ImCross className='icono-ganador dos'/>} has won</p> : turn == true ? <p  className='p-ganador'><ImRadioChecked2 className='icono-ganador' size={13}/> turn</p> : <p className='p-ganador'><ImCross className='icono-ganador' size={13}/> turn</p>} </div>
        <button onClick={restart} className='button-restart'> <ImSpinner11/> </button>
      </div>
      
      <table className='table'>
        <tr className='table-row'>
          <td><button onClick={ () => click("uno")} disabled={isDisabled.uno} id='uno' className='table-button'> {value.uno == "o" ? <ImRadioChecked2 color='#f2b237' size={45} /> : value.uno == "x" ? <ImCross color='#31c4be' size={45}/> : null} </button></td>
          <td><button  onClick={ () => click("dos")} disabled={isDisabled.dos} id='dos' className='table-button'> {value.dos == "o" ? <ImRadioChecked2 color='#f2b237' size={45} /> : value.dos == "x" ? <ImCross color='#31c4be' size={45}/> : null} </button></td>
          <td><button  onClick={ () => click("tres")} disabled={isDisabled.tres} id='tres' className='table-button'> {value.tres == "o" ? <ImRadioChecked2 color='#f2b237' size={45} /> : value.tres == "x" ? <ImCross color='#31c4be' size={45}/> : null} </button></td>
        </tr>
        <tr className='table-row'>
          <td><button  onClick={ () => click("cuatro")} disabled={isDisabled.cuatro} id='cuatro' className='table-button'> {value.cuatro == "o" ? <ImRadioChecked2 color='#f2b237' size={45} /> : value.cuatro == "x" ? <ImCross  color='#31c4be'size={45}/> : null} </button></td>
          <td><button  onClick={ () => click("cinco")} disabled={isDisabled.cinco} id='cinco' className='table-button'> {value.cinco == "o" ? <ImRadioChecked2 color='#f2b237' size={45} /> : value.cinco == "x" ? <ImCross color='#31c4be' size={45}/> : null} </button></td>
          <td><button  onClick={ () => click("seis")} disabled={isDisabled.seis} id='seis' className='table-button'> {value.seis == "o" ? <ImRadioChecked2 color='#f2b237' size={45} /> : value.seis == "x" ? <ImCross color='#31c4be' size={45}/> : null} </button></td>
        </tr>
        <tr className='table-row'>
          <td><button  onClick={ () => click("siete")} disabled={isDisabled.siete} id='siete' className='table-button'> {value.siete == "o" ? <ImRadioChecked2  color='#f2b237'size={45} /> : value.siete == "x" ? <ImCross color='#31c4be' size={45}/> : null} </button></td>
          <td><button  onClick={ () => click("ocho")} disabled={isDisabled.ocho} id= "ocho" className='table-button'> {value.ocho == "o" ? <ImRadioChecked2 color='#f2b237' size={45} /> : value.ocho == "x" ? <ImCross color='#31c4be' size={45}/> : null} </button></td>
          <td><button  onClick={ () => click("nueve")} disabled={isDisabled.nueve} id='nueve' className='table-button'> {value.nueve == "o" ? <ImRadioChecked2  color='#f2b237'size={45} /> : value.nueve == "x" ? <ImCross color='#31c4be' size={45}/> : null} </button></td>
        </tr>
      </table>
      <div className='score-container'>
        <Puntuacion
        who = "X"
        wins = {winsX}
        color = "#31c4be"
        />
        <Puntuacion
        who = "TIES"
        wins = {winsTies}
        color = "#a8bec9"
        />
        <Puntuacion
        who = "〇"
        wins = {winsO}
        color = "#f2b237"
        />
      </div>
      
    </div>
  )
}

export default App
