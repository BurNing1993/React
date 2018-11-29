import axios from "axios";

//创建axios实例
const request = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
});

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config;
  },
  err => {
    // 对请求错误做些什么
    console.log(err);
    return Promise.reject(err);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    // 对响应数据做点什么
    return res;
  },
  err => {
    // 对响应错误做点什么
    console.log(err);
    return Promise.reject(err);
  }
);

export default request;
