import Link from "next/link";
import styles from "./utils.module.css";

export default function Buttons({ action, label, twClass }) {
  return (
    <button
      type="submit"
      onClick={action}
      className={
        "font-extrabold min-w-24 px-4 h-8 bg-red-600 text-white rounded-3xl " +
        twClass
      }
    >
      {label}
    </button>
  );
}

export const LinkButton = ({ label, url, twClass }) => {
  <Link href={url} passHref>
    <button
      type="submit"
      className={"font-extrabold min-w-24 px-4 h-8 text-white " + twClass}
    >
      {label}
    </button>
  </Link>;
};
