import { parsetRequesUrl } from "../utils.js";



const ProductDetailPage = {
    async render(){
        //const { products } = data;
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();
        const { id } = parsetRequesUrl();
        const product = products.find( product => product.id == id);
        return /*html*/ `
        <div class="anh-nen">
			<img src="banner-03.jpg" alt="">
        </div>  

        <div class="anhhh">
       
       </div> 
       <div class="container">
     

       <div class="row">
              <div class="col-xl-5 col-lg-5 col-md-6">
              <img src="${product.image}">

              </div>


              <div class="col-xl-5 col-lg-5 col-md-6">
                      
              <h1 class="text-4xl mb-30 font-bold ">${product.name}</h1>
                <div class="my-3  text-2xl mb-30 font-bold" >
                    <div class="giachitiet" 
                    style=" display: inline-block;
                            padding: 7px 10px;
                            background-color: #b0b435;
                            font-weight: bold;
                            color: #fff;
                            border-radius: 25px">
                    <h4 >Giá bán : ${product.price}</h5>
                   
                    </div>
                    <a href="/#/products/${product.id}" class="btn btn-primary">Mua hàng</a>
                    
                <div>
                <div class="mota">
                <h3> Mô tả</h3>
                <p> ${product.mota}</p>

                </div>
              </div>


        </div>
       </div>
        
        `
    }
}

export default ProductDetailPage;




// <div class="">
//             <div class="col-6">
//                 <img src="${product.image}">
//             </div>
//             <div class="col-6">
//                 <h2 class="text-4xl mb-30 font-bold ">${product.name}</h2>
//                 <div class="my-3  text-2xl mb-30 font-bold">
//                     <p>${product.price}</p>
//                 <div>
//                 <a href="" class="btn btn-primary my-3">ADD TO CART</a>
//             </div>
//         </div>