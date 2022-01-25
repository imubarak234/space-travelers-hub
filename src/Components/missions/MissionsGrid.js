import PropTypes from 'prop-types';
import MissionsItems from './MissionsItems';
import './Mission.css';

const MissionsGrid = (props) => {
  const { list } = props;
  let count = 0;

  const changes = (next) => {
    let ans = '';
    if ((next % 2) === 0) ans = 'row bg-light';
    else ans = 'row';
    return ans;
  };

  return (
    <div className="container py-3">
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
        list.map((missions) => {
          count += 1;
          return (
            <MissionsItems
              key={missions.mission_id}
              name={missions.mission_name}
              description={missions.description}
              classes={changes(count)}
            />
          );
        })
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
