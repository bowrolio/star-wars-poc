const isHandlerEnabled = (config = {}) => {
  // if handlerEnabled = false, then disable global error handler,
  // otherwise, if not specified, assume it's on
  return !(config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled);
};

export function defaultResponseInterceptor (axios) {
  axios.interceptors.response.use(
    function (response) {
      // Do something before request is sent
      // if (response.status === 401) {
      // }
      if (response.data && response.status === 200) {
        return response;
      }
    },
    function (error) {
      if (isHandlerEnabled(error.config)) {
        if (error.response.status === 401) {
          // perform automatic logout? error response?
        } else {
          // show error message?
        }
      }

      return Promise.reject(new Error({ ...error }));
    },
  );
}

export function defaultRequestInterceptor (axios) {
  axios.interceptors.request.use(
    function (config) {
      // insert any auth token here?
      // config.headers[''] = '';
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
}
