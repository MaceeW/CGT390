import styles from './cardwrapper.module.css';

const CardWrapper = ({ children, id }) => {
  return (
    <section id={id} className={styles.cardWrapper}>
      {children}
    </section>
  );
};

export default CardWrapper;