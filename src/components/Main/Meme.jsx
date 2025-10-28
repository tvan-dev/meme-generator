export default function Meme({memeInfo}) {
    return (
        <div className="meme">
            <img src={memeInfo.urlImage} alt="meme-imgage" />
            <p className="text-top">{memeInfo.topText} </p>
            <p className="text-bot">{memeInfo.bottomText}</p>
        </div>
    )
}