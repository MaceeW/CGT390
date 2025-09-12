import PropTypes from "prop-types";

const Card = ({name, title, email, img}) => {
   
  return (
    <div className="profile-card">
      <div className="profile-card_image">
        <img src={img} alt={name} />
      </div>
      <div className="profile-card_content">
        <p>{name}</p>
        <p>{title}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
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