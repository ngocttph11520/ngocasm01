import listproduct from "../components/listproduct.js";
import side from "../components/side.js";

const AdminProduct = {
    async render (){
     return /*html*/`
                        
     <!-- <div class="container-fluid">
      <div class="row">
         ${await side.render()}
        <div class="col-sm-9  ">
          <h1 class="page-header">Dashboard</h1>

        
        
          <div class="table-responsive" id="list-products">
            <table class="table table-striped">
              ${await listproduct.render()}
              
            </table>
          </div>
        </div>
      </div>
    </div> -->


     `
 }
}
export default AdminProduct;
















