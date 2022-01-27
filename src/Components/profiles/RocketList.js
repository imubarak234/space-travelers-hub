import PropTypes from 'prop-types';
import RocketItems from './RocketItems';

const RocketList = (props) => {
  const { listsR, countR } = props;

  return (
    <div className="w-50 ms-3">
      <h3 className="h3">My Rockets</h3>
      <ul className="list-group">
        {
          listsR.map((next) => (
            <RocketItems
              key={next.id}
              names={next.rocket_name}
            />
          ))
        }
      </ul>
      {
      (countR === 0) && <p className="p-3 lead">No Rockets Reserved Yet</p>
    }
    </div>
  );
};

RocketList.propTypes = {
  listsR: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rocket_name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      wiki: PropTypes.string,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
  countR: PropTypes.number.isRequired,
};

export default RocketList;
