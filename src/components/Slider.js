import React from'react';

class Slider extends React.Component{
    render(){
        return( 
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div style={{height:"700px"}}className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/harga-covre.jpg" className="d-block w-100" alt="Harga Couvre"/>
                    </div>
                <div className="carousel-item">
                    <img src="images/nouba-covre.jpg" className="d-block w-100" alt="Nouba Couvre"/>
                </div>
                <div className="carousel-item">
                    <img src="images/dachra-covre.jpg" className="d-block w-100" alt="Dachra Couvre"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            );
        }
    }

export default Slider;