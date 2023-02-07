import http from '../api/http-common';

const login = (id,name) => {
    return http.post(`/login/${id}/${name}`);

}

const LoginService = () => {
    login
}

export default LoginService;