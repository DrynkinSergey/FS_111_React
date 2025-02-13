import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
// import Aim from './NestedRoutes/Aim';
import Team from './NestedRoutes/Team';
import Company from './NestedRoutes/Company';
// import Users from '../pages/Users';
// import UserDetails from '../pages/UserDetails';
// import UserPosts from './NestedRoutes/UserPosts';
import { lazy, Suspense } from 'react';
// підвантажуємо кожну сторінку через lazy, щоб не навантажувати сайт одночасним рендером усього коду.
//тобто в моменті, коли вантажу Users, буде лише ця сторінка і звідси це буде забирати мало!! часу для завантаження сайту
const Aim = lazy(() => import('./NestedRoutes/Aim'));
const Users = lazy(() => import('../pages/Users'));
const UserDetails = lazy(() => import('../pages/UserDetails'));
const UserPosts = lazy(() => import('./NestedRoutes/UserPosts'));

//тут лише маршрутизація, вся логіка розкидана по компонентах
const App = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<h2>loading...</h2>}>
  // в Routes тільки Route бо буде помика
        <Routes>
    //path='/' це маршрутизатор сторінки
          <Route path='/' element={<Home />} />   
           <Route path='/about' element={<About />}> // це батько, тому на його сторінці ОБОВ'ЯЗКОВО використовуємо Outlet
    //уважно!! вкладені маршрути у вкладці Route---Route  робимо як для чілдренів
// також path='aim' без "/" лише назва, ці маршрути не є сторінки це лише фрагмент на сторінці
// ці папки створюємо в components, а потім відобразити на сторінці <About />
            <Route path='aim' element={<Aim />} />
            {/* localhost/about/aim */}
            <Route path='company' element={<Company />} />
               {/* localhost/about/company */}
            <Route path='team' element={<Team />} />
              {/* localhost/about/team */}
          </Route>
  // тут всі наші знайдені юзери за запитом
          <Route path='/users' element={<Users />} />
  // це нова сторінка про конкретного користувача
// уважно проипсувати path='/users/:userId'
          <Route path='/users/:userId' element={<UserDetails />}>
                // спускаємося нижче, щоб побачити подробиці про кожного юзера
            <Route path='info' element={<h2>Info about user</h2>} />
            // щоб це працювало  іду на сторінку <UserDetails /> знизу додаю OUTLET
            <Route path='posts' element={<UserPosts />} />
          </Route>
      //для будь-якого пошуку не існуючих запитів
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};
export default App;
