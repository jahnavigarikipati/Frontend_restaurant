import React from 'react';
import {Link} from "react-router-dom";
import MenuCard from "./MenuCard"
import MenuCard1 from "./MenuCard1"



function Menu() {
    const offers=[
        {
            id:57,
            title:"Mushroom Soup",
            oldprice:19,
            price:15,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
        },
        {
            id:58,
            title:"Mushroom Soup",
            oldprice:19,
            price:15,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
        },
        {
            id:59,
            title:"Mushroom Soup",
            oldprice:19,
            price:15,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
        },
    
    ]
    const toppicks=[
        {
            id:60,
            title:"Mushroom Soup",
            price:19,
           
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
        },
        {
            id:61,
            title:"Mushroom Soup",
            price:19,
           
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
        },
        {
            id:62,
            title:"Mushroom Soup",
            price:19,
            imageUrl:"https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
        },
    
    ]
    return (
        <div id="body1">
        <div className="container text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood",paddingTop:"3%"}}>
          Menu
        </div>
  
    <div className="container">
        <div className="row">
         <Link to="/starters" className="col-md-3 bts" id="menubtn">
           
                Starters
          
            </Link>
            
            <Link to="/curries" className="col-md-3 bts" id="menubtn">
                 
                Curries
          
            </Link>
            <Link to="/riceitems" className="col-md-3 bts" id="menubtn">
             
                Rice Items
      
            </Link>
            <Link to="/tandooris" className="col-md-3 bts" id="menubtn">
            
         
                Tandooris
       
            </Link>
        </div>
        <div className="row ">

        
            <Link to="/fastfoods" className="col-md-4" id="menubtn">
            
            Fast Foods
       
            </Link>
            
       
            <Link to="/beverages" className="col-md-4 bts" id="menubtn">
     
            
                Beverages
      
            </Link>
            <Link to="/refreshments" className="col-md-4 bts" id="menubtn">
       
                Refreshments
           
            </Link>
        </div>        
    </div>
    <div className="container text-center h1">
    <h1 className="font-weight-light mt-5 py-3" style={{fontFamily:"Brush Script MT, cursive" ,color: "burlywood"}}>Combo Offer <i className="fas fa-bullhorn"></i></h1>
        <div className="container text-center">
            <div className="row my-5">
            {
                     offers.map((item,index) => (
                        <div className="col-12 col-lg-4">
                            <MenuCard1
                            title={item.title}
                            oldprice={item.oldprice}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            item={item}
                            key={index}
                        />
                        </div>
                     ))

                    }
        </div>
       </div> 
   </div>
   <div className="container text-center h1">
    <div className="container text-center">
        <h1 className="font-weight-light" style={{fontFamily:"Brush Script MT, cursive",color: "burlywood",marginTop:"6%",paddingBottom:"6%"}}>Top Picks For You <i className="fas fa-bullhorn"></i></h1>
        <div className="row"style={{marginBottom:"-12.5%",paddingBottom:"10%"}}>
        {
                     toppicks.map((item,index) => (
                        <div className="col-12 col-lg-4">
                            <MenuCard 
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
    
</div>
</div>
   
           
           
    

 </div>       
    )
}
export default Menu;
