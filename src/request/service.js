/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import axios from "axios";
const baseConfig = {
  // headers: {
  //     // 'token': ''
  // },
  timeout: 2 * 60 * 1000, //超时时长2分钟
  withCredentials: true,
};
const service = axios.create(baseConfig);

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 设置请求头中token/authorization
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 根据status code 做出不同响应
    if (res.code == 401) {
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @description: post
 * @param {*}
 * @return {*}
 */
function _post(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: "post",
      data: params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * @description: get
 * @param {*}
 * @return {*}
 */
function _get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: "get",
      params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * @description: put
 * @param {*}
 * @return {*}
 */
function _put(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: "put",
      data: params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * @description: delete
 * @param {*}
 * @return {*}
 */
function _delete(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: "delete",
      data: params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * @description: postMultipart 文件上传
 * @param {*}
 * @return {*}
 */
function _postMultipart(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: "post",
      data: params,
      headers: {
        Accept: "application/json",
        "Content-Type": `multipart/form-data;boundary=${new Date().getTime()}`,
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export { service, _post, _get, _put, _delete, _postMultipart };
