import React from "react";
import Card from "./Card";


function RiceItems() {
    const vriceitems=[
        {
            id:17,
            title:"Mushroom Soup ",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
          
        },
        {
            id:18,
            title:"Veg Manchurian ",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
          
        },
        {
            id:19,
            title:"Panneer 65 ",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
          
        },
        {
            id:20,
            title:"Gobi 65 ",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
          
        },
    ];
    const nvriceitems=[
        {
            id:21,
            title:"Chicken Lollipop ",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
          
        },
        {
            id:22,
            title:"Omlette ",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
          
        },
        {
            id:23,
            title:"Meat Balls ",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
          
        },
        {
            id:24,
            title:"Prawn Fry ",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
          
        },

    ];
    return (
        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
        Rice Items
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Veg Rice Items</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     vriceitems.map((item,index) => (
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
                        <p>Non-Veg Rice Items</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     nvriceitems.map((item,index) => (
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
export default RiceItems;
