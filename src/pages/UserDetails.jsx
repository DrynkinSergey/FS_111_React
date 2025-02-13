import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchUserById } from '../services/api';

// 1) створюємо компонент
const UserDetails = () => {
  
  // 2) витягуємо юзер userId
  
  const { userId } = useParams(); // хук від react-router-dom котрий відмалює нам саме юзера за Id через консоль лог можно його побачити
  //приймає адресу куди можна перейти
  const navigate = useNavigate();
  // 3) створили юзера зі значенням null
  const [user, setUser] = useState(null); // даних поки не має тому null

  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/users');
  
// 4 ) пропускаємо його спочатку малюємо return, тому if
  
  useEffect(() => {
//можна чере const, і тоді if виносимо окремо, можна чере функцію тоді спочатку пишемо if, а потім async функцію. Дивитись мою ДЗ goit-react-hw-05 там двома видами прописано
    const getData = async () => {
      const data = await fetchUserById(userId); // приймаємо всі дані вибраного юзера
      setUser(data);
    };
    getData(); // виклик
  }, [userId]); // щоб не ругався, щоб йому було зрозуміло, що відмальовувати
  
// 5) якщо не юзер то повертаємо Loading, пока не маємо даних від серверу. Це заглушка, для того пока отримуємо дані

  if (!user) {
    return <h2>Loading...</h2>;
  }
  
// 6) а вже коли отримали дані то if пропуститься і відмалюється цей return ( <div>...
  
  return (
    <div>
      <Link to={goBackUrl.current}>Go back</Link>

      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      
  // робимо навігацію далі по саме цьому юзеру
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
