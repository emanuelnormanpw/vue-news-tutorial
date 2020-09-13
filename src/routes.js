import AddNews from './components/AddNews.vue'
import Home from './components/Home.vue'

export default[{
    path:'/',
    name: 'Home',
    component: Home
},
{
    path:'/add-news',
    name: 'AddNews',
    component: AddNews
}]