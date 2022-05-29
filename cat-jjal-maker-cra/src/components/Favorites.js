function CatItem(props) {
  return (
    <li>
      <img src={props.img} style={{ width: "150px" }} />
      <p style={{ marginTop: "5px", fontSize: "13px" }}>{props.text}</p>
    </li>
  );
};

function Favorites({ favorites }) {
  if (favorites.length === 0) {
    return <div>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</div>;
  }
  return (
    <ul className="favorites">
      {favorites.map(cat =>
        <CatItem img={cat} key={cat} text={cat.split('?')[1]} />
      )}
    </ul>
  );
};

export default Favorites;