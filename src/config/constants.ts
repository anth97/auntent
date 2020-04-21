import environments from './environment';

if (process.env.NODE_ENV !== 'production'){
    const environment = environments;
}

export const SECRET_KEY = process.env.SECRET || 'AndyAnth';