import { Button } from "reactstrap";
import "./RandomPhoto.scss";

const RandomPhoto = (props) => {
    const { onImageUrlChange, name, onRandomButtonBlur, imgUrl } = props;

    const getRandomUrlImage = () => {
        const randomid = Math.floor(Math.random() * 1000);
        return `https://picsum.photos/id/${randomid}/200/300`;
    }

    const handleRandomPhotoClick = () => {
        if (onImageUrlChange) {
            let randomUrlImage = getRandomUrlImage();
            onImageUrlChange(randomUrlImage);
        }
    };    


    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>

            <div className="random-photo__photo">
                { imgUrl 
                    ? <img src={imgUrl} /> 
                    : <img src="https://i.picsum.photos/id/800/200/300.jpg?hmac=p2lPeodOve_jNKshk2YAKVhKm4UUIJhfUe_Tt4FdnTA" />
                }
            </div>
        </div>
    );
};

export default RandomPhoto;