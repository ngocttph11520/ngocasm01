import data from '../data.js';
// console.log(data.products);
const about = {
        async render() {
            try {
                const response = await fetch(' http://localhost:3000/about');
                const about = await response.json();
                const result = about.map(about =>{
                    return `
                   
                   

                    <div class="row">
                    <div class="col-lg-6">
                        <div class="banner-frame"> 
                        <img src="${about.img}">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="noo-sh-title-top">We are <span>Freshshop</span></h2>
                        <p> ${about.mota}</p>

                        <div class="giachitiet" 
                        style=" display: inline-block;
                                padding: 7px 10px;
                                background-color: #b0b435;
                                font-weight: bold;
                                color: #fff">
                        <h5> Read More</h5>
                       
                        </div>
                       
                       
                    </div>
       
                        `;
                }).join("");

                return `

                <div class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>ABOUT US</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active">ABOUT US</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="anhhh">
       
            </div> 

              <div class="container">


              
              ${result}
              </div>
                    
                    
                    `

            }catch(error){
                console.log(error);
            }
    }
}
export default about;