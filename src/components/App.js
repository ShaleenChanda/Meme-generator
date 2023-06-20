import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import memeData from "../memeData"


function App(){
    return(
        <div>
            <HeaderComponent/>
            <MainComponent 
                {...memeData}
            />
        </div>
    )
};

export default App;