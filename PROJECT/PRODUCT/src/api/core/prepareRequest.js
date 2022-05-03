export default payload => {
    const { url, method = 'GET', params = {} } = payload;
    const basicParametres = { url, method };

    switch(method) {
        case 'POST': {
            console.log(params)
            basicParametres.data = params;
            break;
        };

        case 'PUT': {
            const { id, amount } = params;
            basicParametres.data = { amount };
            basicParametres.params = { id };
            break;
        };

        default: {
            basicParametres.params = params;
            break;
        };
    };

    return basicParametres;
};