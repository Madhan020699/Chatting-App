import chatLoGo from "../../../assets/Profie-Img-Default.webp";
import './ImageComponent.css';

const ImageComponenet = (Props) => {
    return(
        <div className="image-container">
            <img className="profilePicture" Style={Props?.extraStyle} src={chatLoGo}>
            </img>
        </div>
    );
}

export default ImageComponenet;