import React from'react';

class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid">

            <footer className="bg-dark text-center text-lg-start text-white">
              <div className="container p-4">
                <div className="row mt-4">
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">contenus</h5>
          
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="/series" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Séries</a>
                      </li>
                      <li>
                        <a href="/films" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Films</a>
                      </li>
                      <li>
                        <a href="#" className="text-white"><i className="fas fa-user-edit fa-fw fa-sm me-2"></i>tunisien</a>
                      </li>
                    </ul>
                  </div>
                 
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Contact</h5>
          
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Mejri Mohmaed Aziz</a>
                      </li>
                      <li>
                        <a href="mailto:aziz30mejri@gmail.com" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>aziz30mejri@gmail.com</a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/mohamed-aziz-mejri-784015240" target="_blank" className="text-white"><i className="fas fa-envelope fa-fw fa-sm me-2"></i>linkedIn</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>2022/2023</a>
                      </li>
                    </ul>
                  </div>
                
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">De Quoi</h5>
          
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-white">Projet</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">Intégration</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">web</a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Contact</h5>
          
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!" className="text-white"><i className="fas fa-at fa-fw fa-sm me-2"></i>Mejri Mohmaed Aziz</a>
                      </li>
                      <li>
                        <a href="mailto:aziz30mejri@gmail.com" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>aziz30mejri@gmail.com</a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/mohamed-aziz-mejri-784015240" target="_blank" className="text-white"><i className="fas fa-envelope fa-fw fa-sm me-2"></i>linkedIn</a>
                      </li>
                    </ul>
                      <li>
                        <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>2022/2023</a>
                      </li>
                  </div>
                  
                </div>
                
              </div>
             
              <div className="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
                © 2023 :
                <a className="text-white">aziz.mejri@gmail.com</a>
              </div>
            </footer>
          </div>
            );
        }
    }

export default Footer;