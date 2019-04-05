import fetchobj from '@/utils/fetch';
const fetch = fetchobj.fetch;

export const Article = {

    create(data) {
        return fetch('post', '/articles', data);
    },

    get(data) {
        return fetch('get', '/articles', data);
    },

    getDate(data) {
        return fetch('get', '/articles/date', data);
    },

    getUserList(data) {
        return fetch('post', '/articles/userList', data);
    }

};
