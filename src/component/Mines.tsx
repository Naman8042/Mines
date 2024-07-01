"use client"
import { useEffect, useState ,Dispatch,SetStateAction} from "react"
import { IoDiamond } from "react-icons/io5";
import { FaBomb } from "react-icons/fa6";
interface Mines{
    minesRatio : number
    setMinesRatio : Dispatch<SetStateAction<number>>,
    generateDiamondsAndMinesArray:()=>string[]
    included: number[]
    diamonds:String[]
    setIncluded : Dispatch<SetStateAction<number[]>>
    setDiamonds : Dispatch<SetStateAction<String[]>>
    bet:String,
    setBet:Dispatch<SetStateAction<String>>
}


const Mines = ({minesRatio,setDiamonds,diamonds,generateDiamondsAndMinesArray,included,setIncluded}:Mines) => {

    
    const size:number = 16
   useEffect(()=>{
    const Grid = generateDiamondsAndMinesArray()
    setDiamonds(Grid)
   },[minesRatio])
  

  
  
  function Add(index:number){
    if(!included?.includes(index)){
        setIncluded([...included,index])
    }
  }
  
  function addAll(){
    const array=[]
    for(let i=0;i<size;i++){
        
            array.push(i)
        
        setIncluded(array)
    }
   
  }


  return (
    <div className="md:w-[75%] h-full p-5 md:p-0 mt-[5%] md:mt-0 flex bg-gray-700 justify-center items-center rounded-r-md">
      <div className="grid grid-cols-4 gap-2 ">
        {diamonds.map((item, index) => (
          included.includes(index) ? (
            <div
              key={index}
              onClick={addAll}
              className="bg-gray-800 flex justify-center items-center rounded-xl md:w-32 md:h-32 h-16 w-16"
            >
              {item === 'diamond' ? (
                <IoDiamond style={{ color: '#32CD32' }} size={50} />
              ) : (
                <FaBomb size={50} color="red" />
              )}
            </div>
          ) : (
            <div
              key={index}
              onClick={() => item === 'mine' ? addAll() : Add(index)}
              className="bg-gray-500 hover:-translate-y-1 rounded-xl md:w-32 md:h-32 h-16 w-16 gap-2"
            >
              <div className="bg-gray-400 hover:bg-gray-200 md:w-32  w-16 shadow-2xl h-[93%] rounded-xl" />
              <div className="h-[7%]" />
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Mines
