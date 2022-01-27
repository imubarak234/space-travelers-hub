import PropTypes from 'prop-types';

const RocketItems = (props) => {
  const { names } = props;

  return (
    <li className="list-group-item p-3 lead">{names}</li>
  );
};

RocketItems.propTypes = {
  names: PropTypes.string.isRequired,
};

export default RocketItems;
