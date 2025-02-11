import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat cum placeat laudantium rerum quae eaque ea, facilis doloremque culpa. Aperiam
        aliquam quidem voluptate rerum dicta tenetur ratione ipsum a quisquam!
      </p>
      <nav className='nav'>
  //NavLink  для кращої стилізації 
        <NavLink to='aim'>Aim</NavLink>
        <NavLink to='company'>Company</NavLink>
        <NavLink to='team'>Team</NavLink>
      </nav>
      <section className='outlet'>
//для відображення чілдренів Outlet - це спецкомпонент в реакті
        <Outlet />
      </section>
    </div>
  );
};
export default About;
