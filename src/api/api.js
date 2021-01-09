import axiosInstance from "./index";

const axios = axiosInstance;

export const UserRegister = (id, password, address, email, tele, sex) => {
  return axios.post(`http://127.0.0.1:8000/api/Register/`, {
    user_id: id,
    user_pass: password,
    user_address: address,
    user_email: email,
    user_tele: tele,
    user_sex: sex,
  });
};

export const SellerRegister = (id, password, address, email, tele, sex) => {
  return axios.post(`http://127.0.0.1:8000/api/RegisterSeller/`, {
    seller_id: id,
    seller_pass: password,
    seller_address: address,
    seller_email: email,
    seller_tele: tele,
    seller_sex: sex,
  });
};

export const getProducts = () => {
  return axios.get(`http://127.0.0.1:8000/api/`);
};

export const getUserLogin = () => {
  return axios.get(`http://127.0.0.1:8000/api/Login/Customer/`);
};
export const getSellerLogin = () => {
  return axios.get(`http://127.0.0.1:8000/api/Login/Seller/`);
};
