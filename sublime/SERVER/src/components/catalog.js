module.exports = {
    findItem(data, id) {
        return data.find(item => item.id === id);
    },

    filter(data, value) {
        return data.filter(item => item[value]);
    },
};