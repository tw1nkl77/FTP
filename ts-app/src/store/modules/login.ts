import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import typeToken from "../types";
@Module({ namespaced: true, name: 'login' })

export default class User extends VuexModule {
    public name: string = ''
    public sessions: Array<typeToken> = [
        {
            login: "staff",
            password: "staff12345",
            rights: "staff",
        },
        {
            login: "admin",
            password: "admin12345",
            rights: "admin",
        },
        {
            login: "support",
            password: "support12345",
            rights: "support",
        },
    ];
    public token: typeToken | null = JSON.parse(localStorage?.token || null);
    public incorrectData: boolean = false;

    get hasToken(): string | boolean {
        if (this.token) {
            const { login, password } = this.token;
            const session: typeToken | undefined = this.sessions.find(session => session.login === login && session.password === password);
            if (session) {
                this.incorrectData = false;
                return session.rights;
            };
            this.incorrectData = true;
        };
        return false;
    };

    get correctData(): boolean {
        return !this.incorrectData;
    };

    @Mutation
    public setToken(): void {
        this.token = JSON.parse(localStorage.getItem("token") || '{}');
    };

    public setClearToken(): void {
        this.token = null;
    };

    @Action
    public getToken(value: object): void {
        localStorage.setItem("token", JSON.stringify(value));
        this.context.commit('setToken');
    };

    public clearToken(): void {
        localStorage.removeItem("token");
        this.context.commit("setClearToken");
    };
};