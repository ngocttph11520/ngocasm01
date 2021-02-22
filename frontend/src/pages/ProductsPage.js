import data from '../data.js';
// console.log(data.products);
const ProductsPage = {
        async render() {
            try {
                const response = await fetch('http://localhost:3000/products');
                const products = await response.json();
                const result = products.map(product =>{
                    return `
                      
                  

                    <div class="col-md-3"  style =" padding-top: 15px" >
                    <div class="box">
                        <span>SALE</span>
                        <div class="anh">
                            <img style="width: 262.5px;
                            height: 248.3px" src="${product.image}"  alt="">
                            
                        </div>
                        <div class="chi-tiet">
                            <h3>${product.name}</h3>
                            <p>${product.price}</p>
                            <a href="/#/products/${product.id}" class="btn btn-primary">Detail</a>
                            
                        </div>
                    </div>
                </div>
                        `;
                }).join("");

                return `

                <div class="anh-nen">
			<img src="banner-01.jpg" alt="">
        </div> 

        <div class="anhhh">
       
        </div> 
                <div class="nhom-sp">
                <div class="container">
                    <div class="tieu-de-chung"> <a href="http://luontuoisach.vn/ha-noi"> Fruits & Vegetables </a> </div>
                    <p class="mo-ta-chung">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    <div role="tabpanel">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#all" aria-controls="all" role="tab" data-toggle="tab">Tất cả</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">Nổi bật</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">Bán chạy</a>
                            </li>
                        </ul>
    
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="all">
                                <div class="row">
                                ${result}
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab1">
                                <div class="row">
                                ${result}
                                
                                    
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab2">
                                <div class="row">
                                ${result}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                    
                    `

            }catch(error){
                console.log(error);
            }
    }
}
export default ProductsPage;