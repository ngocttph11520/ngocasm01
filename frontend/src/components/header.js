const header = {
   async render(){
       try{
        const response = await fetch('http://localhost:3000/categories');
        const categories = await response.json();
        const result = categories.map(categories =>{
            return `
           
                 <li><a href="/#/categories/${categories.id}">${categories.name}</a></li>
               
        
            `
        }).join("");
        return `
        	<div class="container">
			<div class="row d-flex">
				<div class="col-md-3">
					<img src="logo.png" alt="">
				</div>
				<div class="col-md-9">
					<ul class="list-inline">
						<li><a href="/">Home</a></li>
						<li> <a href="/#/products" class="no-underline text-xl">Products</a></li>
						<li> <a href="/#/about" class="no-underline text-xl">About</a></li>
                        <li> <a href="/#/products" class="no-underline text-xl">New</a>
                              
                        <ul class="sub-menu">
                       
                        ${result}
                   </ul>
                      
                        </li>
						<li> <a href="/#/contact" class="no-underline text-xl">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
        `
    }catch(error){
        console.log(error);
    }
}
}
export default header;