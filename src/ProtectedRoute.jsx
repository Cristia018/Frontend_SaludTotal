import { Navigate, Outlet } from "react-router-dom";
import {authStore} from './store/auth.store.js'

export const ProtectedRoute = () => {

  const {loading, isAuthenticated, user} = authStore()

  if (loading) return <p>Cargando...</p>;
  if (!loading && !isAuthenticated || !user) return <Navigate to={"/login"} replace />
  return <Outlet />
}