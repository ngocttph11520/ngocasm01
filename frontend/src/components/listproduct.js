const listproduct = {
    async render(){

        // const { data : product } = await ProductAPI.getAll();
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();

       
      return /*html*/ `
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Img</th>
        <th width="200">Action</th>
      </tr>
    </thead>
      <tbody>
      ${products.map( (product, index) => {
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
export default listproduct;













