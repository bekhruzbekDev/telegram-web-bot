import "./button.css";
export const Button = (props) => {
  const { title, type, onClick ,disabled} = props;
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
