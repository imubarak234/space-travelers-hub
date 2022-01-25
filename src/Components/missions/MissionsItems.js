import PropTypes from 'prop-types';
import './Mission.css';

const MissionsItems = (props) => {
  const { name, description, classes } = props;

  return (
    <div className={classes}>
      <div className="col-2 bords">
        <p className="fw-normal">{name}</p>
      </div>
      <div className="col-6 bords">
        <p className="fw-normal">{description}</p>
      </div>
      <div className="col-2 bords" />
      <div className="col-2 bords" />
    </div>
  );
};

MissionsItems.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.func.isRequired,
};

export default MissionsItems;
