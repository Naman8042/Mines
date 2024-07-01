"use client"
import { Dispatch, SetStateAction, useEffect } from "react"

interface Mines {
  minesRatio: number,
  setMinesRatio: Dispatch<SetStateAction<number>>,
  generateDiamondsAndMinesArray: () => string[],
  setIncluded: Dispatch<SetStateAction<number[]>>,
  bet: String,
  setBet: Dispatch<SetStateAction<String>>
}

const Bet = ({ minesRatio, bet, setMinesRatio, setBet, setIncluded, generateDiamondsAndMinesArray }: Mines) => {
  function Restart(): void {
    setBet("Bet")
    let arr1: number[] = [];
    setIncluded(arr1)
    generateDiamondsAndMinesArray()
  }

  function onChangeHandler(e: any) {
    setMinesRatio(Number(e.target.value))
  }

  useEffect(() => {
    setIncluded([])
    generateDiamondsAndMinesArray()

  }, [minesRatio])

  return (
    <div className="md:w-[25%] w-80 h-full flex flex-col p-2 bg-gray-500 py-10 rounded-l-md">
      <h1 className="text-white text-center text-xl">Mines</h1>
      <input type="number" value={String(minesRatio)} className="p-1 outline-none bg-gray-800 text-white py-2 rounded-md" onChange={onChangeHandler} />
      <br />
      <button onClick={Restart} className="bg-lime-400 text-center w-56 py-1.5 rounded-md w-full">{bet}</button>
    </div>
  )
}

export default Bet
