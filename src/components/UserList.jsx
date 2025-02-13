import { Link, useLocation } from 'react-router-dom';

// приймає users зі сторінки Users і рендрить її
const UserList = ({ users }) => {
//створюю цуй хук, щоб знати куди повертатися назад
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
    // відмалюємо
        {users.map(item => (
      // повертає li обов'язково з key
          <li key={item.id}>
      // тут лежить посилання на кожного юзера за ${item.id}
            // слово state зарезервоване Реактом, і сюди передаю location куди треба повернутися
      // to= це куди йдемо,  state= це куди потім отрібно повернутися
            <Link to={`/users/${item.id}`} state={location}>
              {item.firstName} {item.lastName}
            </Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
