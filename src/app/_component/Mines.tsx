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
        {diamonds.map((diamond,index)=>(
            
                included.includes(index)?(
                    <div id={`${index}`} className="bg-gray-800 flex justify-center items-center rounded-xl w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32">
                    {
                        diamond==='diamond'?(
                            <IoDiamond style={{ color: '#32CD32' }} size={50}/>
                        ):(
                        <FaBomb size={50} color="red" />

                        )
                    }
                    
                    </div>
                    
                ):(
                    
                    <div
              key={index}
              onClick={() => diamond === 'mine' ? addAll() : Add(index)}
              className="bg-gray-500 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 hover:-translate-y-1 rounded-xl"
            >
              <div className="bg-gray-400 hover:bg-gray-200 md:w-24 w-16 lg:w-32 shadow-2xl h-[93%] rounded-xl" />
              <div className="h-[7%]" />
            </div>
                )
            
        ))
        }
        </div>
      
    </div>
  )
}

export default Mines
