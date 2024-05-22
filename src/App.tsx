import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { PartsDetails } from './pages/Parts'
import { Layout } from './pages/Home/Layout'
import { New } from './pages/Dashboard/New'
import { Catalog } from './pages/catalog'
import { AboutUs } from './pages/AboutUs'
import { Private } from './routes/Private'


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Private><Dashboard /></Private>
      },
      {
        path: "/parts/:id",
        element: <PartsDetails />
      },
      {
        path: "/dashboard/new",
        element: <Private><New /></Private>
      },
      {
        path: "/dashboard/new/:id",
        element: <Private><New /></Private>
      },
      {
        path: "/sobre",
        element: <AboutUs />
      },
      {
        path: "/catalogo",
        element: <Catalog />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

export { router };
