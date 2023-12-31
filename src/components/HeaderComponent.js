import HeaderImage from "../images/Troll Face.png"

function HeaderComponent() {
    return (
        <header className="header">
            <img 
                src={HeaderImage} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
};

export default HeaderComponent;