// import get_url from "../utils.js";
import { parsetRequesUrl } from "../utils.js";

const categories = {
    async render() {
        const { id: id_cate } = parsetRequesUrl();
        const response = await fetch(`http://localhost:3000/products?categoryId=${id_cate}`);
        const categories = await response.json();
        console.log(categories);

        return /*html*/`

        <div class="anh-nen">
			<img src="banner-01.jpg" alt="">
        </div> 

        <div class="anhhh">
       
    </div> 

                            <div class="nhom-sp">
                                <div class="container">
                                <div role="tabpanel">
                                <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="all">
                            <div class="row">
                        ${categories.map(product => `
                        <div class="col-md-3"  style =" padding-top: 15px" >
                        <div class="box">
                       
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
                   
                

               
            ` ).join("")}
                    
                    </div>
                </div>
                </div>
                                </div>
                            </div>
                            </div>
            
            
        `
    }




}
export default categories;
