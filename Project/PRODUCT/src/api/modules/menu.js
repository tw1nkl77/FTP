import instance from '@api/core';

export const menu = {
    url: '/menu',
    async incrementMenu() {
        try {
            return await instance({ url: this.url });
        } catch (err) {
            throw err;
        };
    },
};