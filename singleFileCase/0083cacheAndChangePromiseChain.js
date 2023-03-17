import { postFormInfo } from "@/api/modules/baseOnAxios.js";
import { getHash } from "@/util/acquire.js";

// ↓ 处理resData
function handleRes(resData) {
  // ...
  return resData;
}

function state() {
  return {
    httpRes: {} // ← 这里是缓存数据的地方
    /* 
    // httpRes的具体形式
    httpRes: {
      hash1: promise1,
      hash2: promise2,
      ...
    }
    */
  };
}


const mutations = {
  SET_HTTP_RES(s, { httpParamHash, resPromise }) {
    s.httpRes[`${httpParamHash}`] = resPromise;
  },
  DELETE_HTTP_RES(s, { httpParamHash }) {
    delete s.httpRes[`${httpParamHash}`];
  }
};

const actions = {
  async ASYNC_GET_ONCE_REQ({ state, commit }, param) {
    const httpParamHash = getHash(param);
    try {
      if (state.httpRes[`${httpParamHash}`]) {
        return await state.httpRes[`${httpParamHash}`];
      }
      const resPromise = new Promise((resolve, reject) => {
        postFormInfo(param)
          .then(resData => {
            const finalRes = handleRes(resData);
            resolve(finalRes);
          })
          .catch(err => {
            reject(err);
          });
      });
      commit("SET_HTTP_RES", { httpParamHash, resPromise });
      return await resPromise;
    } catch (err) {
      commit("DELETE_HTTP_RES", { httpParamHash });
    }
    return null;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
