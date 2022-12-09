import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import LoadingOverlay from './view/components/loading-overlay/LoadingOverlay'
import Dashboard from './view/pages/dashboard/Dashboard'
import Login from './view/pages/login/Login'
import Registration from './view/pages/registration/Registration'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Registration />,
    },
  ])

  return (
    <main className="App">
      <RouterProvider
        router={router}
        fallbackElement={<LoadingOverlay />}
      />
    </main>
  )
}

export default App
