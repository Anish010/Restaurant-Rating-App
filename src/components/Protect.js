import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const location = useLocation();
    const { authLogin } = useContext(globalC);
    console.log("authLogin", authLogin);

    return authLogin
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location }} />;
}