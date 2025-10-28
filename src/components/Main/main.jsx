
import {useState} from "react"
import TextInput from "./TextInput.jsx"
import Meme from "./Meme.jsx"

export default function Main() {
    const [memeInfo, setMemeInfo] = useState({
        urlImage: "https://i.imgflip.com/46e43q.png",
        topText: "shut up",
        bottomText: "take my money"
    })


    return (
        <main>
            <TextInput memeInfo={memeInfo} setMemeInfo={setMemeInfo}/>
            <Meme memeInfo={memeInfo}/>
        </main>
    )
}