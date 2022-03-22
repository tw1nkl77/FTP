import types from "./const/types";

function findItem(item, type) {
    return types[type].getTemplate(item);
};

export default class Item {
    constructor(item, type = 'templatesBulls') {
        this.item = item;
        this.template = '';  
    }

    _init() {
        this._render();    
    }

    _render() {
        this.template = findItem(item, this.type);
    }
};

