import Link from "next/link";

export default function Buttons({ action, label, twClass,type }) {
  return (
    <button
      type={type || "button"}
      onClick={action}
      className={
        "font-extrabold min-w-24 px-4 h-8 pt-0 bg-selected text-white rounded-3xl " +
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

export const IconButtons = ({ label, action, twClass, Icon }) => (
  <button
    type="submit"
    className={
      "font-extrabold min-w-24 px-4 h-8 text-white flex items-center gap-4" +
      twClass
    }
    onClick={action}
  >
    <div className="mr-3">{label}</div>
    {Icon ? <Icon /> : null}
  </button>
);
