function findItem(data, id) {
    return data.items.find(item => item.id === id);
};

function totalPrice(data) {
    return data.items.reduce((acc, item) => {
        return acc += (item.price * item.amount);
    }, 0);
};

function totalCounts(data) {
    return data.items.reduce((acc, item) => {
        return acc += item.amount;
    }, 0);
};

module.exports = {
    addItem(data, changeableItem) {
        data.items.push(changeableItem);
        data.totalPrice = totalPrice(data);
        data.totalCounts = totalCounts(data);
    },

    changeItem(data, changeableItem) {
<<<<<<< HEAD:PROJECT/SERVER/src/components/cart.js
        const { id, amount } = changeableItem;
        const find = findItem(data, id);

        if (amount == -1 && find.amount == 1) {
            const index = data.items.indexOf(find);
            data.items.splice(index, 1);
        } else {
            find.amount += amount;
=======
        const { id, value, price } = changeableItem;
        const find = findItem(data, id);

        if (value == -1 && find.amount == 1) {
            const index = data.items.indexOf(find);
            data.items.splice(index, 1);
            data.totalCounts += value;
            data.totalPrice += price;
        } else {
            find.amount += value;
            find.totalPrice += price;
            data.totalCounts += value;
            data.totalPrice += price;
>>>>>>> 2b1d14553068f4033c6fbfebdf72db20f790364b:s/SERVER/src/components/cart.js
        };

        data.totalPrice = totalPrice(data);
        data.totalCounts = totalCounts(data);
    },

    deleteItem(data, changeableItem) {
        const find = findItem(data, changeableItem);
        const index = data.items.indexOf(find);
        data.items.splice(index, 1);

        data.totalPrice = totalPrice(data);
        data.totalCounts = totalCounts(data);
    },

    clearCart(data) {
        data.items = [];
        data.totalPrice = totalPrice(data);
        data.totalCounts = totalCounts(data);
    },
};