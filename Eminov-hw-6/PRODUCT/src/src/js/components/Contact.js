const url = '';

export default class Contact {
    constructor(api) {
        this.inputName = null;
        this.inputSurname = null;
        this.inputSubject = null;
        this.inputMessage = null;
        this.sendButton = null;
        this.request = api;
        this._init()
    }

    _init() {
        this.sendButton.querySelector('.contact_button').addEventListener('click', evt => this._handleEvents.bind(this));
        this._initInputs();
    }

    _handleEvents(evt) {

    }

    _initInputs() {
        this.inputName = document.querySelector('#contact_name').value;
        this.inputSurname = document.querySelector('#contact_last_name').value;
        this.inputSubject = document.querySelector('#contact_company').value;
        this.inputMessage = document.querySelector('#contact_textarea').value;
    }

    _prepareForm() {
        const { inputName, inputSurname, inputSubject, inputMessage } = this;
        return {
            name: inputName,
            surname: inputSurname,
            subject: inputSubject,
            message: inputMessage
        };
    }

    async _sendForm() {
        const form = this._prepareForm();
        try {
            const data = await this.request.send(url, 'POST', form);

            if (!data.error) {
                console.log('cool');
            } else {
                console.log('all bad');
            };
        } catch (err) {
            console.warn(err);
        };
    }
}