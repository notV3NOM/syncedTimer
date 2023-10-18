import "./card.css";
import { CustomCardProps } from "../../types/main.types";

const CustomCard = (props: CustomCardProps) => {
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <div className="cardContent">{props.content.text}</div>
    </div>
  );
};

export default CustomCard;
