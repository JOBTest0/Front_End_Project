//import React from 'react';
import { Route,Routes,} from 'react-router-dom';
import LoginPageMember from '../module/Login/loginMember';
import Editpass from '../module/Profile/Editpass';
import RegisterPage from '../module/Register/registerMember';
import Haircut from '../module/b_Reserve/Haircut';
import BarberPage from '../page/BarberPage';
import Barber_Detail from '../page/Barber_Detail';
// import CreateBarber from '../module/Profile/CreateBarber';
import Booking from '../page/Booking';
import ErrorPage from '../page/ErrorPage';
import MainPage from '../page/MainPage';
import MainPage_Login from '../page/MainPage_Login';
import ProfilePage from '../page/ProfilePage';
import MBarberBooking from '../page/mBarberPage';
import MBarber_Detail from '../page/mBarber_Detail';



const RoutePath = ({user}) => {
    return (
        <Routes>
          <Route path="/" element={<MainPage_Login/>} />
          <Route path="/mainpage" element={<MainPage_Login/>} />
          <Route path="/login_member" element={<LoginPageMember/>} />
          <Route path="/*" element={<ErrorPage/>} />
          <Route path="/register_member" element={<RegisterPage/>} />
          <Route path="/barbershop" element={<MainPage_Login/>} />
          <Route path="/barberpage" element={<BarberPage user={{user}}/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/mbarberpage" element={<MBarberBooking  user={{user}}/>} />
          <Route path="/Bookinghis" element={<Booking user={{user}}/>} />

          <Route path="/haircut" element={<Haircut/>} />
          <Route path="/detail" element={<Barber_Detail/>} />
          <Route path="/account_security" element={<Editpass/>} />
          <Route path="/mdetail" element={<MBarber_Detail/>} />
          {/* <Route path="/createbarber" element={<CreateBarber/>} /> */}
        </Routes>
    )
  }
  
  export default RoutePath
  