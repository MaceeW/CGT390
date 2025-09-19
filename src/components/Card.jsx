import PropTypes from "prop-types";
import styles from '../styles/card.module.css';

const Card = ({ name, title, email, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={`${name}'s profile`} className={styles.profileImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardEmail}>{email}</p>
      </div>
    </div>
  );
};

Card.propTypes ={
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
export default Card;