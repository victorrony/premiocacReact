import styles from "./utils.module.css";

export default function Buttons({action,label,twClass}) {
  return (
    <button type="submit" onClick={action} className={twClass} >
      {label}
    </button>
  );
}
