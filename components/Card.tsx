interface CardProps {
  card: string;
}

const Card = ({ card }: CardProps) => {
  return <div className={`card card-${card} card-${card}-dims`} />;
};

export default Card;
