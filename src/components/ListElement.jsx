import React from 'react';

const ListElement = ({data}) =>{

    console.log({data})
    return(
        <div className="card">
            <div >
                <img src={data?.flags.png} alt="" />
            </div>
            
            <div className="describe">
                <h2>{data?.name.common}</h2>
                <p>{data?.capital}</p>
                <p>{data?.continents}</p>
            </div>
        </div>
    );
};

export default ListElement;