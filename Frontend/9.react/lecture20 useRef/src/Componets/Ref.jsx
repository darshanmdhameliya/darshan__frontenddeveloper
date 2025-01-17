import React from 'react'
import { useRef , useState , useEffect } from 'react'


const Ref = () => {

  const [count  , setCount] = useState(0)

  const [isRun , setIsRun] = useState(false)


  useEffect(() => {
    if(isRun){
      refInput.current = setInterval(() => {
        setCount((count) => count + 1)
      } , 1000)
    }else{
      clearInterval(refInput.current)
    }

    return () => clearInterval(refInput.current)
  } , [isRun])



  const refDiv = useRef()
  const refInput = useRef()



  const handleStyle = () => {
    let isclick =true
    if(isclick == true){
        refDiv.current.style.backgroundColor = "pink"
        refDiv.current.style.height = "400px"
        refDiv.current.style.width = "400px"
    }else{
        refDiv.current.style.backgroundColor = ""
        
    }
  }

  const handleStart = () => {
    setIsRun(true)
  }

  
  const handlePause = () => {
    setIsRun(false)
  }

  const handleReset = () => {
    setIsRun(false)
    setCount(0)
  }
  

  return (
    <div className='p-10'>
      <div ref={refDiv}></div>
      <button className='btn' onClick={handleStyle}>Click</button>
      <div className='btn '>{count}</div>
      <button className='btn' onClick={() => clearInterval(refInput.current)}>Stop Count</button>
      <button className='green' onClick={handleStart}>Start Count</button>
      <button className='green1' onClick={handlePause}>Pause Count</button>
      <button className='btn' onClick={handleReset}>Reset Count</button>
    </div>
  )
}

export default Ref