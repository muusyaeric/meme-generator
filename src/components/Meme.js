import React, { useState, useEffect } from 'react'
import './meme.css'

function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: "https://i.imgflip.com/1bij.jpg" 
  })

  const [allMemes, setAllMemes] = useState([]) 

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

    const getMeme = () => {
      const randomNumber = Math.floor(Math.random() * allMemes.length) 
      const url = allMemes[randomNumber].url
      setMeme((prevMeme) => {
        return {
          ...prevMeme,
          randomImage: url
        }
      })
    }

    const textHandler = (event) => {
      const {name, value} = event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }))
    }

  return (
    <div>
        <main className='main'>
          <div className='form'>
            <input
            className='form-inputs'
            type="text" placeholder='Top text'
            name='topText' onChange={textHandler}/>
            <input 
            className='form-inputs'
            type="text" placeholder='Bottom text' name='bottomText' onChange={textHandler}/>
            <button 
              className='form-button'
              onClick={getMeme}
            >Generate a new image</button>
          </div>

          <div className='meme'>
            <img src={meme.randomImage} alt='fetched online' className='meme-image'/>
            <h2 className='meme-text top'>{meme.topText}</h2>
            <h2 className='meme-text bottom'>{meme.bottomText}</h2>

          </div>
        </main>
    </div>
  )
}

export default Meme