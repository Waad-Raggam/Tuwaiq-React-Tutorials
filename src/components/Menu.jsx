import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React, { useState } from 'react';

const Menu = () => {
    // Menu items with their prices
    const menuItems = [
        { id: 1, name: 'شاورما', price: 30, picture: 'shawerma.jpeg' },
        { id: 2, name: 'برجر', price: 15,  picture: 'burger.jpeg' },
        { id: 3, name: 'برياني لحم', price: 13,  picture: 'biryani.jpeg' },
    ];

    // State to keep track of selected items
    const [selectedItems, setSelectedItems] = useState([]);

    // Function to handle checkbox change
    const handleCheckboxChange = (itemId) => {
        const selectedIndex = selectedItems.indexOf(itemId);
        if (selectedIndex === -1) {
            setSelectedItems([...selectedItems, itemId]);
        } else {
            setSelectedItems([
                ...selectedItems.slice(0, selectedIndex),
                ...selectedItems.slice(selectedIndex + 1),
            ]);
        }
    };

    // Function to calculate total bill
    const calculateTotalBill = () => {
        let total = 0;
        selectedItems.forEach(itemId => {
            const selectedItem = menuItems.find(item => item.id === itemId);
            total += selectedItem.price;
        });
        return total;
    };

    return (
        // <div>
        //   <table>

        //     <thead>
        //       <tr>
        //         <th>Picture</th>
        //         <th>Name</th>
        //         <th>Food</th>
        //         <th>Price</th>
        //         <th>Checkbox</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {menuItems.map(item => (
        //         <tr key={item.id}>
        //           <td>(item.picture)</td>
        //           <td>{item.name}</td>
        //           <td>{item.price}</td>
        //           <td>
        //             <input
        //               type="checkbox"
        //               checked={selectedItems.includes(item.id)}
        //               onChange={() => handleCheckboxChange(item.id)}
        //             />
        //           </td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
        //   <p>Total Bill: ${calculateTotalBill()}</p>
        // </div>
        <>
            <div className="container">
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-sm-6 text-center'>
                        <div className='card'>
                            <div className='card-body bg-dark  text-white'>
                                <div className='d-flex justify-content-between'>
                                    {/* something here */}
                                    <h1 className="alert alert-danger" >قائمة الطعام</h1>
                            <h1> <p>SAR {calculateTotalBill()}</p></h1>
                                </div>
                                <div className='row'>
                                    <div className='col'>الصنف</div>
                                    <div className='col'>اسم الصنف</div>
                                    <div className='col'>سعر الصنف</div>
                                </div>
                                {
                                    menuItems.map((item) => (
                                        <div className='row mt-1'>
                                            <hr />
                                            <div className="col">
                                                <img src={item.picture} className='rounded' height={50} width={50}></img>
                                            </div>
                                            <div className="col">
                                                {item.name}
                                            </div>
                                            <div className="col">
                                                <input type='checkbox' onChange={() => handleCheckboxChange(item.id)}></input>
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
};

export default Menu;
