import {client} from '../database/database.js';
import {ComparePasswords} from '../utils/encrypt.js';
import jwt from 'jsonwebtoken';
import {serialize} from 'cookie';

const Login = async (req, res) => {
    try {
        const {user_email, password} = req.body
        if (!user_email || !password) {
            throw Error("Please, enter the username or email address!")
        } else {

            client.query("select*from users where user_email = $1;", [user_email], (error, data) => {
                if (data.rows[0] === undefined) {
                    res.status(404).json({
                        message: "User email or password are incorrect!",
                        user: null
                    });
                }
                else {
                    if (data.rows[0].user_password) {
                        if (ComparePasswords(password, data.rows[0].user_password)) {
                            const token = jwt.sign({
                                iss: "https://app-backend-utn-2023.onrender.com",
                                iat: Math.floor(Date.now() / 1000),
                                nbf: Math.floor(Date.now() / 1000),
                                exp: Math.floor(Date.now() / 1000) + 3600,
                                app_displayname: "app-backend-utn-2023",
                                appid: "app_9e7db781-2c01-40b8-8eef-54007e8db3aa",
                                family_name: data.rows[0].user_last_name,
                                given_name: data.rows[0].user_first_name,
                                unique_name: data.rows[0].user_email,
                                upn: data.rows[0].user_password,
                                user_id: data.rows[0].user_id,
                                user_code: data.rows[0].user_code,
                                user_full_name: data.rows[0].user_first_name + " " + data.rows[0].user_last_name,
                                user_first_name: data.rows[0].user_first_name,
                                user_last_name: data.rows[0].user_last_name,
                                user_email: data.rows[0].user_email,
                                user_password: data.rows[0].user_password,
                                user_phone_number: data.rows[0].user_phone_number,
                                user_state: data.rows[0].user_state,
                                user_date_register: data.rows[0].user_date_register
                            }, 'secret');
                            const serialize_token = serialize('myToken', token, {
                                httpOnly: true,
                                secure: false,
                                sameSite: 'strict',
                                maxAge: 3600000,
                                path: '/'
                            })
                            res.setHeader('Set-Cookie', serialize_token)
                            res.status(200).json({
                                error: null,
                                user: data.rows[0],
                                message: "Login successfully!",
                                token: serialize_token
                            });
                        }
                        else {
                            res.status(200).json({
                                error: null,
                                message: "User email or password are incorrect!"
                            });
                        }
                    }
                    else {


                        res.status(200).json({
                            error: null,
                            message: "User was register, but you haven't password yet, you would enter with microdoft authentification and update you password!"
                        });
                    }
                }
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            user: null
        })
    }
}


export {
    Login
}