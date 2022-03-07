import jwt from 'jsonwebtoken';

export const generateActiveToken = (payload: Object) => {
    return jwt.sign(payload, `${process.env.ACTIVE_TOKEN_SECRET}`, { expiresIn: '5m' })
}

export const generateAccessToken = (payload: Object) => {
    return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: '15m' })
}

export const generateRefreshToken = (payload: Object) => {
    return jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, { expiresIn: '30d' })
}