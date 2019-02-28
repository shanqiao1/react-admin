import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
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
                <Menu mode="inline" theme="dark">
                    <Item>
                        <Icon type="home" />
                        <span>首页</span>
                    </Item>
                    <SubMenu title={<span><Icon type="home" />商品</span>}>
                        <Item>
                            <Icon type="bars" />
                            <span> 品类管理</span>

                    </Item>
                        <Item>
                            <Icon type="home" />
                            <span> 商品管理</span>

                        </Item>
                    </SubMenu>
                    <Item>
                        <Icon type="user" />
                        <span>用户管理</span>
                    </Item>
                    <Item>
                        <Icon type="safety" />
                        <span>权限管理</span>
                    </Item>
                    <SubMenu title={<span><Icon type="home" />图形图表</span>}>
                        <Item>
                            <Icon type="home" />
                            <span> 品类管理</span>

                        </Item>
                        <Item>
                            <Icon type="home" />
                            <span> 商品管理</span>

                        </Item>
                    </SubMenu>
                </Menu>


            </div>
        )
    }
}