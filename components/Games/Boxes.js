import React from 'react'
import Box from './Box'

const Boxes = () => {
  return (
    <div className='bg-white/95 rounded-xl gap-10 w-full h-full md:rounded-[20px]'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-6 h-full'>
        <Box Name="Flip Cards" Color="bg-orange-200" Photo="/flipcardsgame.png" Link="/games/CardsFlip.html" />
<Box Name="Pattern Matching" Color="bg-orange-200" Photo="/pr.png" Link="/games/patternflow.html" />
<Box Name="Reaction Time Test" Color="bg-orange-200" Photo="/rt.png" Link="/games/reactionTime.html" />
<Box Name="Meditation" Color="bg-orange-200" Photo="/meditation.png" Link="/games/meditation.html" />

          <Box Name = "Memorio" Color = "bg-orange-200" Photo = "/mmm.png" Link = "https://memorio-one.vercel.app"  />
          <Box Name = "Picture-Matching" Color = "bg-orange-200" Photo = "/pm.png" Link = "https://brain-game-picture-matching.vercel.app"  />
          <Box Name = "Memória Leonina" Color = "bg-orange-200" Photo = "/Memória-Leonina.png" Link = "https://andrevarandas.github.io/memoria-leonina/"  />
          <Box Name = "3in1" Color = "bg-orange-200" Photo = "/mtmtgy.png" Link = "https://sokratisv.itch.io/memorygamev4"  />
          <Box Name = "Pixel Harmony" Color = "bg-orange-200" Photo = "/ph.png" Link = "https://krishnam2411.itch.io/pixelharmony"  />
          
        </div>
    </div>
  )
}

export default Boxes
