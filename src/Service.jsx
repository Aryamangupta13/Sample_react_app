import React from "react";
import Card from "./Card";

const sdata=[
    {title:"web devlopment"},
    {title:"app devlopment"},
    {title:"flutter devlopment"},
    {title:"machine learning"},
    {title:"Web Desgin"},
    {title:"Artifitial intalegence"},
    {title:"Bootstrap 5"},
    {title:"android devlopment"},
    {title:"web-3 devlopment"},
    {title:"javascript devlopment"},
    {title:"c and cpp"},
    {title:"python"}
]

const Service = () => {
    return (
        <>
            <div className="text-center my-5">
                <h1>Our Services</h1>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            sdata.map((val,ind)=>{
                                return(
                                    <Card title={val.title} key={ind}/>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;