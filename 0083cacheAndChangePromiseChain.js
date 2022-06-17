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
  SET_HTTP_RES(s, { httpParamhash, resPromise }) {
    s.httpRes[`${httpParamhash}`] = resPromise;
  },
  DELETE_HTTP_RES(s, { httpParamhash }) {
    delete s.httpRes[`${httpParamhash}`];
  }
};

const actions = {
  async ASYNC_GET_ONCE_REQ({ state, commit }, param) {
    const httpParamhash = getHash(param);
    try {
      if (state.httpRes[`${httpParamhash}`]) {
        return await state.httpRes[`${httpParamhash}`];
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
      commit("SET_HTTP_RES", { httpParamhash, resPromise });
      return await resPromise;
    } catch (err) {
      commit("DELETE_HTTP_RES", { httpParamhash });
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
