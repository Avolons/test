import fetchobj from '@/utils/fetch';
const fetch = fetchobj.fetch;

export const API = {


/**
 * @description 获取今日直播列表
 * @param {*} page
 * @param {*} size
 * @param {*} stage
 * @param {*} grade
 * @param {*} subject
 * @param {*} key
 * @param {*} order
 * @param {*} sort
 * @returns
 */
getLiveList(data){
    return fetch('get', '/frontend/course/getNowLiveList', data);
},

getHotSchoolList(data){
    return fetch('get', '/frontend/course/getNowLiveList', data);
},   

getHotschoolDay(data){
    return fetch('get', '/frontend/course/getNowLiveList', data);
},

getHotSchoolWeek(data){
    return fetch('get', '/frontend/course/getNowLiveList', data);
},
};
