import PropTypes from 'prop-types';
import MissionItem from './MissionItem';

const MissionsList = (props) => {
  const { lists } = props;
  return (
    <div className="w-50 me-3">
      <h3 className="h3">My Missions</h3>
      <ul className="list-group">
        {
          lists.map((next) => (
            <MissionItem
              key={next.mission_id}
              names={next.mission_name}
            />
          ))
        }
      </ul>
    </div>
  );
};

MissionsList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string,
      mission_name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
};

export default MissionsList;
