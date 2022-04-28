import instance from '@api/core';

export const catalog = {
    url: '/catalog',
    async incrementCatalog(params = {}) {
        try {
            return await instance({ url: this.url, params });
        } catch (err) {
            throw err;
        };
    },
};