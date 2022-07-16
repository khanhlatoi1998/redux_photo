import "./banner.scss";


const Banner = (props) => {
    const { title, backgroundUrl } = props;
    
    const backgroundStyle = backgroundUrl
        ? { backgroundImage: `url(${backgroundUrl})` }
        : {}


    return (
        <div className="wraper__banner" style={backgroundStyle}>
            <h1>{title}</h1>
        </div>
    );
};

export default Banner;