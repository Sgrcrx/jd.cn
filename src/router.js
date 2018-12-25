import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Cart from './views/Cart.vue'
import User from './views/User.vue'
import Search from './views/Search.vue'
import Category from './views/Category.vue'
import Categ from './views/Categ.vue'
import Productss from './views/Productss.vue'
import Productss1 from './views/Productss1.vue'

import Goodes from './components/Goodes.vue'
import Comment from './components/Comment.vue'
import Detail from './components/Detail.vue'
import Recommend from './components/Recommend.vue'
import Routerss from './views/Routerss.vue'
import Ss from './views/Ss.vue'
import Ceshi from './views/Ceshi.vue'
import CategoryLayout1 from './views/CategoryLayout1.vue'
import CategoryLayout from './views/CategoryLayout.vue'
//admincrx
import Admincrx from './views/Admincrx.vue'
import AdmincrxTop from './components/AdmincrxTop.vue'
import AdmincrxLeft from './components/AdmincrxLeft.vue'
import AdmincrxRight from './components/AdmincrxRight.vue'

//
import UserEle from './components/UserEle.vue'
import UserPay from './components/UserPay.vue'
import UserFoots from './components/UserFoots.vue'
import UserTools from './components/UserTools.vue'
import UserServe from './components/UserServe.vue'
import Groom from './components/Groom.vue'
import Topjd from './components/Topjd.vue'
import UserBef from './components/UserBef.vue'
import Login from './components/Login.vue'
import Buys from './components/Buys.vue'
import CommentItem from './components/CommentItem.vue'
import LoginShoppingCart from './components/LoginShoppingCart.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import( /* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/',
			name: 'home',
			component: Home
		},{
			path: '/ceshi',
			name: 'ceshi',
			component: Ceshi
		},
		{
			path: '/routerss',
			name: 'routerss',
			component: Routerss
		}, {
			path: '/admincrx',
			name: 'admincrx',
			component: Admincrx,
			children: [{
				path:'',
				components:{
				default:AdmincrxRight,
				header:AdmincrxTop,
				aside:AdmincrxLeft
				}
			}]
		},{
			path: '/ss',
			name: 'ss',
			component: Ss
		}, {
			path: '/cart',
			name: 'cart',
			component: Cart
		}, {
			path: '/user',
			name: 'user',
			component: User
		},{
			path: '/userbef',
			name: 'userbef',
			component: UserBef
		},{
			path: '/login',
			name: 'login',
			component: Login
		}, {
			path: '/loginahoppingcart',
			name: 'loginahoppingcart',
			component: LoginShoppingCart
		}, {
			path: '/topjd',
			name: 'topjd',
			component: Topjd
		},{
			path: '/categoryLayout1',
			name: 'categoryLayout1',
			component: CategoryLayout1
		},{
			path: '/categoryLayout',
			name: 'categoryLayout',
			component: CategoryLayout
		},{
			path: '/search',
			name: 'search',
			component: Search
		}, {
			path: '/category',
			name: 'category',
			component: Category
		}, {
			path: '/categ',
			name: 'categ',
			component: Categ
		},{
			path: '/productss1',
			name: 'productss1',
			component: Productss1
		},{
			path: '/commentitem',
			name: 'commentitem',
			component: CommentItem
		}, {
			path: '/buys',
			name: 'buys',
			component: Buys
		}, {
			path: '/productss/:id',
			name: 'productss',
			component: Productss,
			children: [{
				path: 'goodes',
				component: Goodes
			}, {
				path: 'detail',
				component: Detail
			}, {
				path: 'comment',
				component: Comment
			}, {
				path: 'recommend',
				component: Recommend
			}]
		}
	]
})
router.beforeEach((to, from, next) => {
 	console.log(to);
 	console.log(from);
 	console.log(to.path);
 	//
   	if(to.path=='/user'){
   		next({path:'/'});
   	}else{
   		
   		next();
   	}

 	
})

//
router.afterEach((to,from)=>{
	
})


export default router;
