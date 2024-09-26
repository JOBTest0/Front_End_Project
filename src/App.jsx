import RoutePath from './routers/RoutePath'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { setError, setUser } from './reduxs/reducers/userReduce';
//import { useEffect } from 'react';
import Navber from './components/header/Navbar';
import { fetchUser } from './hooks/GetUser';
import { useQuery } from 'react-query';
import 'leaflet/dist/leaflet.css';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const { isLoading } = useQuery("userData", fetchUser, {
    onSuccess: (data) => {
      dispatch(setUser(data?.user));
    },
    onError: (error) => {
      dispatch(setError(error?.message));
    },
    staleTime: 1000 * 10,
    refetchOnWindowFocus: false,
  });
  return (
    <>
    <div>
      <Navber user={user}/>
      <RoutePath user={user}/>
    </div>
   
      <ToastContainer
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    </>
  )
}

export default App
