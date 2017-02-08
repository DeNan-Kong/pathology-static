/**
 * @file
 * Created by hanan on 16/10/15.
 */
const Hello = r => require(['views/hello'], r);
const Index = r => require(['views/index'], r);
const Home = r => require(['views/home'], r);
const Login = r => require(['views/login'], r);
const Register = r => require(['views/register'], r);
const Materials = r => require(['views/materials'], r);
const Diagnose = r => require(['views/diagnose'], r);
const Production = r => require(['views/production'], r);
const Cell = r => require(['views/cell'], r);
const NotFound = r => require(['views/notfound'], r);


// 根目录
const rootPath = '';

// 页面路由
const routes = [
    {path: '', redirect: {name: 'materials'}},
    {path: '/login', component: Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'},
    {path: '/materials', component: Materials, name: 'materials'},
    {path: '/diagnose', component: Diagnose, name: 'diagnose'},
    {path: '/production', component: Production, name: 'production'},
    {path: '/cell', component: Cell, name: 'cell'},
    {path: '/hello', component: Hello, name: 'hello'},
    {path: '/index', component: Index, name: 'index'},
    {path: '/home', component: Home, name: 'home'}

].map(route => {
    route.path = rootPath + route.path;
    return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
