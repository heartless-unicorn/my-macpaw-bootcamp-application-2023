export default function Grid(props) {
  const cats = props.catList;

  return (
    <>
      {cats.map((el) => {
        return (
          <div>
            <img src={`https://cdn2.thecatapi.com/images/${el.img_id}.jpg`} />
            <p>{el.name}</p>
          </div>
        );
      })}
    </>
  );
}
