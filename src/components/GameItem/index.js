import "./index.css";

const GameItem = (props) => {
  const { gameDetails, updatePartiallyVisibleStatus } = props;
  const { id, name, image_url, isVisible, isPartiallyVisible } = gameDetails;

  const onClickImage = () => {
    updatePartiallyVisibleStatus(id);
  };

  return (
    <div onClick={onClickImage} className="game-item-container">
      {isVisible === true || isPartiallyVisible === true ? (
        <img className="image-item" src={image_url} alt={name} />
      ) : (
        ""
      )}
    </div>
  );
};

export default GameItem;
