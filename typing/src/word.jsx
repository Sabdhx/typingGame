import React from 'react'

const word = ({word,active,correct}) => {

    if(correct){
        return <span className="bg-green-500"> {word} </span>
    }

    if(correct == false){
        return <span className="bg-red-800"> {word} </span>
    }


    if(active){
        return <b> {word} </b> 
    }


  return (

    <span> {word}</span>

  )
}

export default word