import types from "./const/types";

function findItem(item, type) {
    return types[type].getTemplate(item);
};

export default getItem(item, type = 'templatesBulls') = {
    item: item,
    template: '',

    _init() {
        this._render();    
    },

    _render() {
        this.template = findItem(item, this.type);
    }
};

