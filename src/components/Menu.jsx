import { useState } from "react";
const Menu = () => {
   const [total,Settotal]=useState(0);
    const datamenu=[
        {
          img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1714213671~exp=1714217271~hmac=d6ff108916c006dda6cc2e21999f8274d6e9abe8e22b4404c8ad77f30e7329e8&w=740",
          name:"شاورما",
          price:30
        },
    
        {
          img:"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1714213943~exp=1714217543~hmac=9d06ce2d4fdfdf3788ff3e5cae72d904b9003e64a6971c59c05783a680bc2978&w=740",
          name:"هامبرجر",
          price:15
        },
    
        {
          img:"https://img.freepik.com/premium-psd/psd-saudi-food-kabsa-isolated-without-background_867452-12773.jpg?w=740",
          name:"برياني باللحم",
          price:13
        },
      ]

      const SetTotalval=(val,event)=>
        {
            let checked=event.target.checked;
            if(checked)
                Settotal(total+val);
            else
                Settotal(total-val);

        }
    return ( 

        <>
         <div className="container">
            <div className="row d-flex justify-content-center mt-5 ">
              <div className="col-sm-6 text-center">
                   <div className="card">
                      <div className="card-body bg-dark text-white">
                        <div className="d-flex justify-content-between">
                            <h1 className="alert alert-danger" >قائمة الطعام</h1>
                            <h1>{total}</h1>
                        </div>
                         <div className="row">
                            <div className="col">الصنف</div>
                            <div className="col">اسم الصنف </div>
                            <div className="col">سعر الصنف</div>
                         </div>
                        {
                            datamenu.map((item)=>(
                           
                             <div className="row mt-1">
                                 <hr/>
                                <div className="col">
                                    <img src={item.img} className="rounded" alt="" height={50} width={50} />
                                </div>
                                <div className="col">
                                    {item.name}
                                </div>
                                <div className="col">
                                  <input type="checkbox" onChange={(event)=>SetTotalval(item.price,event)} className="form-checkbox"></input>  {item.price}
                                </div>
                             </div>

                            ))
                        }
                      </div>
                   </div>
              </div>
              
            </div>
         </div>
        </>
     );
}
 
export default Menu;