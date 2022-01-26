import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { names } = props;

  return (
    <li className="list-group-item p-3 lead">{names}</li>
  );
};
MissionItem.propTypes = {
  names: PropTypes.string.isRequired,
};

export default MissionItem;
