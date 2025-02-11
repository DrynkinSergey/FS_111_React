import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchUserById } from '../services/api';

const UserDetails = () => {
  const { userId } = useParams(); // хук від react-router-dom котрий відмалює нам саме юзера за Id через консоль лог можно його побачити
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/users');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getData();
  }, [userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to={goBackUrl.current}>Go back</Link>

      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <nav>
        <Link to='info'>Info</Link>
        <Link to='posts'>Posts</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default UserDetails;
