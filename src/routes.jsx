import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashboard from './pages/Dashboard'
import WorkOrders from './pages/WorkOrders'
import WorkOrderList from './pages/WorkOrderList'
import CSRDashboard from './pages/CSRDashboard'
import Users from './pages/resources/Users'
import Vendors from './pages/resources/Vendors'
import Equipment from './pages/resources/Equipment'
import Properties from './pages/resources/Properties'
import Service from './pages/Service'
import PM from './pages/PM'
import Resources from './pages/Resources'
import SystemSetup from './pages/SystemSetup'
import UserProfile from './pages/UserProfile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'work-orders', element: <WorkOrders /> },
      { path: 'work-orders/list', element: <WorkOrderList /> },
      { path: 'service', element: <Service /> },
      { path: 'service/csr-dashboard', element: <CSRDashboard /> },
      { path: 'pm', element: <PM /> },
      { path: 'resources', element: <Resources /> },
      { path: 'resources/users', element: <Users /> },
      { path: 'resources/vendors', element: <Vendors /> },
      { path: 'resources/equipment', element: <Equipment /> },
      { path: 'resources/properties', element: <Properties /> },
      { path: 'system-setup', element: <SystemSetup /> },
      { path: 'profile', element: <UserProfile /> },
    ],
  },
])


