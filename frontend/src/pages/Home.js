import data from '../data.js'
const Home = {
    render() {
        const { baanh } = data;
        return `

        <div class="anh-nen">
			<img src="banner-01.jpg" alt="">
        </div> 

        <div class="anhhh">
       
    </div> 

        <div class="container">
        
            <div class="row">
                        ${baanh.map(baanh => `
                        <div class="col-md-4">
						<div class="box">
							<div class="anh">
                            <img src="${baanh.image}" class="card-img-top" alt="...">
							</div>
                            <div class="tieu-de">
                            
                             ${baanh.name}
                             
                             </div>
						</div>
					</div>
                   
                

               
            ` ).join("")}
                    
                    </div>
                </div>
            </div>
        `
    }
}
export default Home;    