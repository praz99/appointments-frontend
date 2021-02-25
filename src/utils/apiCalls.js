import axios from 'axios';
import {
  API_MAIN,
  API_SIGNUP,
  API_LOGIN,
  API_HOUSES,
  API_APPOINTMENT,
} from '../constants/api';

const signupCall = user => axios.post(`${API_MAIN}${API_SIGNUP}`, { user }, { withCredentials: true });
const loginCall = user => axios.post(`${API_MAIN}${API_LOGIN}`, { user }, { withCredentials: true });
const houseListCall = () => axios.get(`${API_MAIN}${API_HOUSES}`, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });
const houseDetailsCall = id => axios.get(`${API_MAIN}${API_HOUSES}${id}`, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });
const appointmentCall = (house_id, date) => axios.post(`${API_MAIN}${API_HOUSES}${house_id}${API_APPOINTMENT}`, { date }, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });

export {
  signupCall,
  loginCall,
  houseListCall,
  houseDetailsCall,
  appointmentCall,
};
