export default function NavBlock(props) {
  const name = props.name;

  return (
    <div>
      <a>
        <div>
          <img src={props.image} alt={name} />
        </div>
        <p>{name}</p>
      </a>
    </div>
  );
}
