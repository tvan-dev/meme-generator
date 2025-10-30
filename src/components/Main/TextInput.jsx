export default function TextInput({memeInfo, setMemeInfo, getMeme}) {

function handleChange(event) {
    const {value, name} = event.target
    setMemeInfo(prev => ({...prev, [name]: value}))
}

return (
    <div className="form">
        <div className="text-input">
            <label>
            Top text
            <input 
                type="text" 
                placeholder="Shut up" 
                name="topText"
                value={memeInfo.topText}
                onChange={handleChange}
                />
        </label>

        <label >
            Bottom text
            <input 
                type="text" 
                placeholder="Shut up" 
                name="bottomText"
                value={memeInfo.bottomText}
                onChange={handleChange}
                />
        </label>
        </div>

        <button onClick={getMeme}>Get a new meme image 🖼️</button>
    </div>
);
}
