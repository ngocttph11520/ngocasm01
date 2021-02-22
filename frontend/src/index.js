 import Error404Page from './pages/Error404Page.js';
import Home from './pages/Home.js';
import about from './pages/about.js';
import categories from './pages/categories.js';



import ProductDetailPage from './pages/ProductDetailPage.js';
 import ProductsPage from './pages/ProductsPage';
import { parsetRequesUrl, $ } from './utils.js';
import contact from './pages/contact.js';

import header from './components/header.js';
import Productaddpage from './pages/Productaddpage.js';
import AdminProduct from './pages/AdminProduct.js';





const routes =  {
    '/' : Home,
    '/products' : ProductsPage,
    '/products/:id' : ProductDetailPage,
    '/categories/:id' : categories,
    '/addproduct' : Productaddpage,
    '/listproduct' : AdminProduct,
    '/about' : about,
    '/contact' :contact

}


const router = async () => {
    const { resource, id } = parsetRequesUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + 
    ( id ? `/:id` : '')
    console.log(id);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page
    console.log(page);
    $('#header').innerHTML = await header.render();
    $('.ba-anh').innerHTML = await page.render();
    await page.afterRender();
}

 window.addEventListener('DOMContentLoaded', router);
 window.addEventListener('hashchange', router);
