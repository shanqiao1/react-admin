
import ajax from "./ajax";



const prefix = process.env.NODE_ENV ==='development' ?'':'http://localhost:5000';

//请求登陆函数
export const reqLogin=(username,password)=> ajax(prefix + '/login',{username,password},'POST');



export const reqAddUser = user => ajax(prefix + '/manage/user/add',user,'POST');
