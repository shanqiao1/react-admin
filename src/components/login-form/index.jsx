import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {
    Form,
    Icon,
    Input,
    Button,
    message
} from 'antd';



const Item = Form.Item;

class LoginForm extends Component{

    static propTypes = {
        login: PropTypes.func.isRequired
    }
  //自定义校验规则
    checkPassword = (rule,value,callback) =>{
         if(!value){
             callback('必须输入密码');
         }else if(value.length < 4){
             callback('密码长度不能小于4位')
         }else if(value.length>11){
             callback('密码长度不能小于11位')
         }else if(!(/^[a-zA-Z0-9_]+$/.test(value))){
             callback('密码只能包含大小写英文，数字或下划线')
         } else {
             //自定义验证规则必须调用callback()
             callback();
         }

    };
    handleSubmit = e =>{

        e.preventDefault();
        const {validateFields,resetFields} = this.props.form;
        //检查表单是否通过校验
        validateFields((error,values)=>{
            console.log(error, values);

            if(!error){
                //检验通过
                const {username,password}=values;

              //条用父组件login方法，有父组件发送请求登陆
              this.props.login(username,password);

            }else{
                //校验失败
                resetFields(['password']);
              const errMsg = Object.values(error).reduce((prev,curr)=> prev + curr.errors[0].message + ' ','');


                message.error(errMsg);
            }
        })
    };

    render(){
        const {getFieldDecorator,getFiledValue} = this.props.form;
        return(
            <form className="login-form-container" onSubmit={this.handleSubmit}>
                <Item>
                    { getFieldDecorator(
                       'username',
                       {
                           rules: [
                               { required: true, message: '请输入用户名' },
                               {min:4,message:'用户名必须大于等于4位'},
                               {max:11,message:'用户名不能大于11位'},
                               {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是大小写英文，数字或下划线'}

                               ],
                       }

                    )(<Input placeholder='用户名' prefix={<Icon type="user" />}/>)
                    }
                </Item>
                <Item>
                    {getFieldDecorator(
                        'password',
                        {
                            rules: [
                            {validator:this.checkPassword}
                        ]
                        }

                    )(<Input placeholder='密码' type='password' prefix={<Icon type="safety" />}/>)


                    }
                    </Item>

                <Item>
                    <Button type='primary' htmlType="submit" className="login-form-Button">登陆</Button>
                </Item>
            </form>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;