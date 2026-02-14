import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectIsLoggedIn} from '../../redux/auth/AuthSelector';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);


  

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;