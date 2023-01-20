import request from '@/utils/axios';
import type { loginResponseType } from './types'


export const reqLogin = () => {
    return request<loginResponseType>({
        url: '/api/user/login',
        method: 'get',
    });
};

