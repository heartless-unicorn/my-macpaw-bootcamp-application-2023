import { editTime } from "../helpers/functions";

export default function ActionMessages(props) {
  return (
    <div>
      {props.messages.map((el, i) => {
        const curTime = editTime(el.time);

        return (
          <p key={i} className="message">
            {" "}
            <span className="time">{curTime}</span>
            Image Id: <span className="id">{el.id}</span> was added to{" "}
            {el.action}s
          </p>
        );
      })}
    </div>
  );
}
