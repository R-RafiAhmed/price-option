import PropTypes from 'prop-types';

const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <div>
      <li className='px-3 py-2 hover:bg-orange-500 rounded-lg'>
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
    route: PropTypes.object
}
export default Link;
