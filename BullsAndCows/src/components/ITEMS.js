import types from "./const/types";

function findItem(item, type) {
    return types[type].getTemplate(item);
};


export default function getItem(item, type = 'templatesBulls') {
    const itemTemplate = item;
    const typeTemplate = type;
    const template = findItem(itemTemplate, typeTemplate);

    return template;
};