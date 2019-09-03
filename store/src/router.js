import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import ProductInfo from './views/ProductInfo.vue'
import Info from './views/InfoPage.vue'
import Winkelmand from './views/WinkelmandPage.vue'
import Payments from './views/PaymentsPage.vue'
import Paypal from './views/Paypal.vue'
import Ing from './views/Ing.vue'
import Google from './views/Google.vue'
import Mastercard from './views/Mastercard.vue'
import Visa from './views/Visa.vue'
import AEI from './views/AEI.vue'
import Video from './views/Video.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
    },
    {
      path: '/product-info',
      name: 'ProductInfo',
      component: ProductInfo,
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/winkelmand',
      name: 'Winkelmand',
      component: Winkelmand
    },
    {
      path: '/betalen',
      name: 'payments',
      component: Payments
    },
    {
      path: '/paypal',
      name: 'Paypal',
      component: Paypal
    },
    {
      path: '/ing',
      name: 'Ing',
      component: Ing
    },
    {
      path: '/mastercard',
      name: 'Mastercard',
      component: Mastercard
    },
    {
      path: '/google',
      name: 'Google',
      component: Google
    },
    {
      path: '/visa',
      name: 'Visa',
      component: Visa
    },
    {
      path: '/paypal',
      name: 'Paypal',
      component: Paypal
    },
    {
      path: '/aei',
      name: 'AEI',
      component: AEI
    }
    ,
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
    
  ]
})
