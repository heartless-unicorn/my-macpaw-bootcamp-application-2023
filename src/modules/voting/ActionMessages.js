import { editTime } from "../helpers/functions";

export default function ActionMessages(props) {
  return (
    <div>
      {props.messages.map((el, i) => {
        const curTime = editTime(el.time);

        return (
          <p key={i}>
            {" "}
            <span>{curTime}</span>
            Image Id: {el.id} was added to {el.action}s
          </p>
        );
      })}
    </div>
  );
}
