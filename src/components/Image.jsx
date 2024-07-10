import "../css/image.css"

const Image = ({ imageUrl, name }) => {
    return (
        <div className="image-container">
            <img src={imageUrl} alt="superhero-name" className="round"/>
            <h3 className="naam">{name}</h3>
        </div>
    )
}

export default Image


