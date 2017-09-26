/**
 * 使用mockjs提交模拟接口
 */
import apiData from './home.json'
import Mock from 'mockjs'
// 注册路由
Mock.mock('/api/home', {code: 0, data: apiData.datas} )
Mock.mock('/api/header', {code: 0, data: apiData.menus} )

// 不需要向外暴露什么
// export default xxx
