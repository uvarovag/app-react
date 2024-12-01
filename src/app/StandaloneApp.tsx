import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './routes'

const router = createBrowserRouter(routes)

const StandaloneApp = () => <RouterProvider router={router} />

export default StandaloneApp
