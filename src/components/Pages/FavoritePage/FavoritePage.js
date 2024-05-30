import React from 'react';
import Header from '../../Header';


const FavoritePage = ({favorites}) => {
    return(
        <div>
            <Header/>
            <h1 style={{textAlign:"center"}}>Favoris</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            </div>
            </div>
    );
}
    
export default FavoritePage;