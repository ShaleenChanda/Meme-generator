import React from "react";

function MainComponent(props) {

    const[image, setImage] = React.useState("");

    function buttonClick(){
        setImage((image) => {
            const rand = Math.floor(Math.random()*100);
            image =props.data.memes[rand].url
            console.log(image);
            return image
        })
    }




    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={buttonClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme-image-div"> 
            <img className="meme--image" src={image}/>
            </div>
        </main>
    )
};

export default MainComponent;