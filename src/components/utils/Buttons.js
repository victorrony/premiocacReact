import styles from "./utils.module.css";

export default function Buttons(props) {
  return (
    <button type="submit" onClick={props.onClick} className={props.className} >
      {props.Nome}
    </button>
  );
}
