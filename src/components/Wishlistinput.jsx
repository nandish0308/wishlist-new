import React, { useState } from 'react'

function Wishlistinput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.key === 'enter'){
    props.addList(inputText)
    setInputText("")

        }
       
    }
  return (
< div className= "input-container">
 < input type = "text" 
 className='input-box-wishlist' 
 placeholder="Enter your wish" 
 value={inputText}
 onChange={e=>{
    setInputText(e.target.value);
 }}
 onKeyDown={handleEnterPress}
 />


 <button className= 'add-btn'
 onClick={()=>{
    props.addList(inputText)
    setInputText("")
 }}> + </button>

 </div>

  )
}

export default Wishlistinput