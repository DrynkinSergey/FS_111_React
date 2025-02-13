import { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import { fetchUsers } from '../services/api';
import SearchBar from '../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const isOnline = searchParams.get('isOnline');
  console.log(typeof isOnline);

  //  1))не може бути асинхронною, тому стрілочна функція і лише потім через const
  useEffect(() => {
    const getData = async () => {
  // обов'язково всі запити на сервер через try/catch
      try {
        const data = await fetchUsers(); // 2) беремо дані з запиту
        setUsers(data); // 3) тут наші користувачі
      } catch (error) {
        console.log(error);
      }
    };
    getData();  // 4) викликаємо функц. і всі наші юзери тепер лежать у масиві const [users] = useState([]);
  }, []);

  const handleChangeQuery = value => {
    searchParams.set('query', value);
    searchParams.set('isOnline', true);
    setSearchParams(searchParams);
  };

  const filteredData = users.filter(user => user.firstName.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
  // передаємо пропсами дані юзерів далі для відмалювання їх на екрані
      <UserList users={filteredData} />
    </>
  );
};
export default Users;
