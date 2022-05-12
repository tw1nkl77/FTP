import instance from '@api/core';

export const catalog = {
    url: '/catalog',
    async getCatalog(params) {
        try {
            return await instance({ url: this.url, params });
        } catch (err) {
            throw err;
        };
    },

    async getProduct(params) {
        try {
            return await instance({ url: this.url, params });
        } catch (err) {
            throw err;
        };    
    }
};