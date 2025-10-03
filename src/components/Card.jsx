import PropTypes from "prop-types";
import { useRef, useLayoutEffect } from 'react';
import styles from '../styles/card.module.css';
import { Link } from 'react-router-dom'; 

const Card = ({ id, name, title, email, img }) => {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      console.log(`Card (id: ${id}) width: ${width}px`);
      if (width < 250) {
        cardRef.current.style.borderColor = 'red';
      }
    }
  }, [id]);
  return (
    <Link to={`/fetched-profiles/profile/${id}`} className={styles.cardLink}>
      <div className={styles.card} ref={cardRef}>
        <img src={img} alt={`${name}'s profile`} className={styles.profileImage} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardName}>{name}</h3>
          <p className={styles.cardTitle}>{title}</p>
          <p className={styles.cardEmail}>{email}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes ={
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
export default Card;