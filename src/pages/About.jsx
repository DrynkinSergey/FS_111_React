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
// стилізували Outlet - бо воно є віконцем для інфи, що шукають на сторінці About
      <section className='outlet'>
//для відображення чілдренів Outlet - це спецкомпонент в реакті, потім замість його підставляються 
//компоненти з навігації куди хочем попасти to='aim' або to='company' ...
// де його розмістили, там і буде рендеритися частинка. Може бути багато вкладок Outlet в Outlet все залежить від пошуку
        <Outlet />
      </section>
    </div>
  );
};
export default About;
