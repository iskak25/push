import { Navigate, Route, Routes } from 'react-router-dom'
import LoginUser from './Auth/LoginUser/LoginUser'
import Recovery from './Auth/Recovery/Recovery'
import Navbar from './components/Navbar/Navbar'
import AuthPages from './pages/AuthPages'
import Home from './pages/Home'

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <Home />,
      id: 1,
    },
    {
      link: '/loginPage',
      element: <AuthPages />,
      id: 2,
    },
    {
      link: '/loginUser',
      element: <LoginUser />,
      id: 3,
    },
    {
      link: '/recovery',
      element: <Recovery />,
      id: 4,
    },
  ]
  console.log('asdfg')
  const PRIVATE_ROUTES = [
    {
      link: '/admin',
      // element: <AdminPage />,
      id: 1,
    },
    {
      link: '/edit/:id',
      // element: <EditProductPage />,
      id: 2,
    },
  ]

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} key={item.id} element={item.element} />
        ))}

        {/* {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null} */}
      </Routes>
    </>
  )
}

export default MainRoutes
