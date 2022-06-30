import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";

function CountryLists({search, setSearch, countries, setCountries, filter, setFilter, loading, setLoading}){

    useEffect(()=>{
        setFilter(
            countries.filter((country => country.name.toLowerCase().includes(search.toLowerCase())))
        )
    })

    if(loading){
        return <p>Loading countries</p>
    }

    return(
        <>
            <Banner />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="form-group d-flex">
                            <input
                                type="text"
                                placeholder="search...."
                                className="form-control"
                                onChange={(e)=> setSearch(e.target.value)}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {filter && filter.map((item)=>(
                                <div className="col-md-4 mb-5" key={item.id}>
                                    <div className="card">
                                        <div className="card-header">
                                          <span>{item.name}</span>
                                          <p>{item.nativeName}</p>
                                          
                                          
                                        </div>

                                        <div className="card-body">
                                            <div className="info">
                                               <p> Region:  {item.region}</p>
                                               <p>Sub-region: {item.subregion}</p>
                                                Capital: {item.capital}
                                            </div>
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>Land area</th>
                                                    <th>Population</th>
                                                    
                                                   
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{item.area}</td>
                                                        <td>{item.population}</td>
                                                        
                                                       
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div className="flag">
                                            <img src={item.flag ? `${item.flag}` : "not_available"}
                                                className="flag" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CountryLists