import logo from "../assets/logo.png";


export default function Header() {

    return (
        <header>
            <img src={logo} alt="logo" className="logo"/>
            <h2 className="title-header">Meme Generator </h2>
        </header>
    )
}