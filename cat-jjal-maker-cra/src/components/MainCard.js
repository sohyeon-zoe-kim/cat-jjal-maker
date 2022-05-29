const MainCard = ({ garasadae, img, onHeartClick, aleadyFavorite }) => {
  const heartIcon = aleadyFavorite ? "💖" : "🤍";
  return (
    <div className="main-card">
      <p>Cat Says {garasadae}</p>
      <img src={img} alt="고양이" width="400" />
      <button onClick={onHeartClick}>{heartIcon}</button>
    </div>
  );
};

export default MainCard;