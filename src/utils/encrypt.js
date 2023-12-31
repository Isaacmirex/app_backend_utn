import CryptoJS from "crypto-js";
import {config} from 'dotenv';
config()

var secretkey = process.env.SECRET_KEY

function cipherPassword (password) {
    var cipherpwd = CryptoJS.AES.encrypt(password, secretkey).toString();
    return cipherpwd
}

function decryptPassword (password) {
    var bytes = CryptoJS.AES.decrypt(password, secretkey);
    var originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    return originalPassword
}

function ComparePasswords (text, cipher) {
    var cipher_pwd = decryptPassword(cipher)
    if (cipher_pwd == text) {
        return true
    }
    else {
        return false
    }
}

export {
    cipherPassword,
    decryptPassword, ComparePasswords
}