import instance from '@api/core';

export const cart = {
    url: '/cart',
    async incrementCart(method = 'GET', params = {}) {
        try {
            return await instance({ url: this.url, method, params })
        } catch (err) {
            throw err;
        };
    },
};