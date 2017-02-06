/**
 * @file
 * Created by hanan on 16/10/15.
 */
const Hello = r => require(['views/hello'], r);
const Index = r => require(['views/index'], r);
const Home = r => require(['views/home'], r);
const NotFound = r => require(['views/notfound'], r);

// 根目录
const rootPath = '';

// 页面路由
const routes = [
  {path: '', redirect: {name: 'index'}},
  {path: '/hello', component: Hello, name: 'hello'},
    {path: '/index', component: Index, name: 'index'},
    {path: '/home', component: Index, name: 'home'}

].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
