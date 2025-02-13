
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

const UserPosts = () => {
  
// прошу userId через useParams
  const { userId } = useParams();
  const [posts, setPosts] = useState([]); //збираємо пости

//отримуємо тут всі пости, котрі потім внесемо в setPosts(data)
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPostsByUserId(userId);
      setPosts(data);
    };
    getData(); //викликали функ
  }, [userId]);

// !! обов'язкове повернення не потрібно, т.щ. useState([]) це пустий масив, і все проходить спокійно
  
  return (
    <div>
      <h2>User posts information:</h2>
      <ul>
        // відмалюю li
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserPosts;
