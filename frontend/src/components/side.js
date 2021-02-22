const side ={
    render(){
        return `
        <div class="col-sm-3" id="leftadmin">
        <ul class="nav nav-sidebar">
          <li class="active"><a href="#"><h4>Dashboard </h4><span class="sr-only">(current)</span></a></li>
          <li><a href="#">Product</a></li>
          <!-- <li><a href="#">Analytics</a></li>
          <li><a href="#">Export</a></li> -->
        </ul>
      
      </div>
        `

    }
}
export default side;






import ProductAPI from "../api/productAPI";
import { reRender, $} from '../utils.js';

const ListProduct = {
    async render(){
        const { data : product } = await ProductAPI.getAll();


        return /*html*/`
            <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th width="200">Action</th>
              <!-- <th>Header</th>
              <th>Header</th> -->
            </tr>
          </thead>
          <tbody>
            ${product.map( (product, index) => {
                return `
                    <tr>
                        <td>${index}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <a href="/#/product/${product.id}/edit" class="btn btn-primary">Update</a>
                            <button type="button" class="btn btn-danger bnt-remove" data-id="${product.id}">Remove</button>
                        </td>
                        <td>text</td>
                  </tr>
                `
            }).join("")
        }
            
          </tbody>
        </table>
        `
    },
    async afterRender(){
      const btns = $('#list-products .btn');
      console.log(btns);
      btns.forEach( btn => {
        const id = btn.dataset.id;
        btn.addEventListener('click', function(){
          const question = confirm('Bạn có chắc muốn xóa không ?')
          ProductAPI.remove(id);
          reRender(ListProduct, '#list-products');

        })
      })
    }
}
export default ListProduct;