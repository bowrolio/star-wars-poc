import axios from 'axios';
import * as interceptor from './interceptors';

// how we want axios to be configured
const config = {
  timeout: 30 * 1000, // Timeout
};

// create a new `axios`` instance
const axiosInst = axios.create(config);

// connect whatever type of interecptors are required
interceptor.defaultResponseInterceptor(axiosInst);
interceptor.defaultRequestInterceptor(axiosInst);

export default axiosInst;
