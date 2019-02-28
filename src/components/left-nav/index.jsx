import React,{Component} from 'react';
import {Menu} from 'antd';
import './index.less';
import logo from '../../assets/images/logo.png';


const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

export default class LeftNav extends Component{
    render(){

        return(
            <div className="left-nav">
                <header className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h2>后台程序</h2>
                </header>
                <Menu>
                    <Item>首页</Item>
                    <SubMenu>
                        <Item>品类管理</Item>
                        <Item>商品管理</Item>
                    </SubMenu>
                </Menu>


            </div>
        )
    }
}