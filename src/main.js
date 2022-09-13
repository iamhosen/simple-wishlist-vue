import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'

import TheHeader from './components/theHeader'
import AddWishlist from './components/addWhishlist'
import ItemWishlist from './components/itemWishlist'


const app = createApp(App)

app.component('the-header', TheHeader)
app.component('add-wishlist', AddWishlist)
app.component('item-wishlist', ItemWishlist)

app.mount('#app')



import 'bootstrap/dist/js/bootstrap.js'