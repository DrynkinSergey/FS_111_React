import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com'; //куди звертаюсь

// fetchUsers іде на сервер і бере там (за посиланням та останнім хвістиком у себе) дані про юзерів 
export const fetchUsers = async () => {
//отримає інфу в data і ми відправляємо цю інфу export!!
  const { data } = await axios.get('users?limit=200'); // 
  return data.users;
};

//отримаємо окремо кожний цікавий юзер за Id 
export const fetchUserById = async userId => {
  const { data } = await axios.get(`users/${userId}`); // ось цей хвістик беремо з інфи на сайті https://dummyjson.com
  return data;
};
//пости саме цього юзера, котра вибрані за його userId
export const fetchPostsByUserId = async userId => {
  const { data } = await axios.get(`/posts/user/${userId}`);
  return data.posts;
};
