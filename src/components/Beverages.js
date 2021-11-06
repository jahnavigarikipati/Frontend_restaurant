import React from "react";
import Card from "./Card";


function Beverages() {
    const softdrinks=[
        {
            id:41,
            title:"Mushroom Soup",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            
        },
        {
            id:42,
            title:"Veg Manchurian",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            
        },
        {
            id:43,
            title:"Panneer 65",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            
        },
        {
            id:44,
            title:"Gobi 65",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            
        },
    ];
    const harddrinks=[
        {
            id:45,
            title:"Chicken Lollipop",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            
        },
        {
            id:46,
            title:"Omlette",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            
        },
        {
            id:47,
            title:"Meat Balls",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            
        },
        {
            id:48,
            title:"Prawn Fry",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            
        },

    ];
    return (
        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                Beverages
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Soft Drinks</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     softdrinks.map((item,index) => (
                        <div className="col-lg-6">
                            <Card 
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            item={item}
                            key={index}
                        />
                        </div>
                     ))

                    }

                </div>
                <div className="row">
                    <div className=" col-lg-12 container"id="starterscontainer">
                        <a href="/" id="startersmore">
                            See More <i className="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-md-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Hard Drinks</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     harddrinks.map((item,index) => (
                        <div className="col-lg-6">
                            <Card 
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            item={item}
                            key={index}
                        />
                        </div>
                     ))

                    }

                   
                </div>
                <div className="row">
                    <div className="container"id="starterscontainer">
                        <a href="/" id="startersmore">
                            See More <i className="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
        </div>
    )
}
export default Beverages;