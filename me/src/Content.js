import React from 'react'

export const Content = () => {
    function handleNameChange(){
        const names = ["Earn", "Grow", "Give"]
        const int = Math.floor(Math.random()*3)
        return names[int]
      }

      const handleClick = (e) =>{
        //console.log("Thanks For Support")
        console.log(e.target.innerText)
      }

      const handleClick2 = (name) =>{
        console.log(`Bye ${name}`)
      }

  return (
    <main>
            <p>Let's {handleNameChange()} Money</p>
            <button onClick={handleClick}>Subscribe</button>
            <button onDoubleClick={() => handleClick2('melvin')}>Un Subscribe</button>   

            <button onClick={(e) => handleClick(e)}>Watch More</button> 


    </main>

  )
}

export default Content