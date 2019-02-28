
import axios from 'axios';
import {message} from 'antd';

export default function  ajax(url,data,method ='GET') {
    let promise = null;
    if(method ==='GET'){
       promise = axios.get(url,{params:data})
    }else if(method ==='POST'){
        promise = axios.post(url,data)
    }
   return new Promise((resolve,reject) =>{
       promise
           .then(res=>{
               resolve(res.data);
           })
           .catch(err =>{
               console.log(err);
               message.error('网络不稳定，请刷新重试')
           })

    })

  /*  return promise

            .then(res=>{
               return res.data;
            })
            .catch(err =>{
                message.error('网络不稳定，请刷新重试')
            })*/



}


