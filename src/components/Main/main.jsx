
import {useState,useEffect} from "react"
import TextInput from "./TextInput.jsx"
import Meme from "./Meme.jsx"

export default function Main() {
    const [memeInfo, setMemeInfo] = useState({
        urlImage: "https://i.imgflip.com/46e43q.png",
        topText: "shut up",
        bottomText: "take my money"
    })
    const [allMemes, setAllMemes] = useState([])

    function getMeme() {
        if (allMemes.length === 0) return;
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url
        setMemeInfo(prev => ({...prev, urlImage: url}))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json()) 
        .then(data => setAllMemes(data.data.memes))
        .catch(err => console.error("Failed to fetch memes:", err));
    }, [])

    return (
        <main>
            <TextInput memeInfo={memeInfo} setMemeInfo={setMemeInfo} getMeme={getMeme}/>
            {memeInfo.urlImage && <Meme memeInfo={memeInfo}/>}
            
        </main>
    )
}