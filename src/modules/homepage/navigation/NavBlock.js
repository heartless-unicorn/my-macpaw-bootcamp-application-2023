import { NavLink } from "react-router-dom";

export default function NavBlock(props) {
  const name = props.name;

  return (
    <div>
      <NavLink to={`/${name.toLowerCase()}`}>
        <div>
          <img src={props.image} alt={name} />
        </div>
        <p>{name}</p>
      </NavLink>
    </div>
  );
}
