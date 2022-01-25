import PropTypes from 'prop-types';
import MissionsItems from './MissionsItems';
import './Mission.css';

const MissionsGrid = (props) => {
  const { list } = props;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-2 bords">
          <p className="h3">Mission</p>
        </div>
        <div className="col-6 bords">
          <p className="h3">Description</p>
        </div>
        <div className="col-2 bords">
          <p className="h3">Status</p>
        </div>
        <div className="col-2 bords" />
      </div>

      {
        list.map((missions) => (
          <MissionsItems
            key={missions.mission_id}
            name={missions.mission_name}
            description={missions.description}
          />
        ))
      }
    </div>
  );
};
MissionsGrid.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string,
      mission_name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default MissionsGrid;
