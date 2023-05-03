import React, { useEffect, useState } from "react";
import "../../css/Manager.css";
import "../../css/order.css";
import { HOST } from "../../host";

/**

Functional component for displaying orders and their details.

@returns {JSX.Element} The Orders component
*/
const Orders = () => {
    //YYYY-MM-DD FORMAT
    const [items, setOrders] = useState([]);

    const [beginning, setBeginningDate] = useState("");
    const [end, setEndDate] = useState("");
/**

Event handler for beginning date change.
@param {Object} event - The event object.
*/
    const handleBeginningChange = (event) => {
        setBeginningDate(event.target.value);
    };
/**

Event handler for end date change.
@param {Object} event - The event object.
*/
    const handleEndChange = (event) => {
        setEndDate(event.target.value);
    };
/**

Event handler for form submission.
*/
    const handleSubmit = async () => {
        //console.log("/changeIngredient/:"+id+"/:"+quantity+"/:"+name);
        const res = await fetch(`${HOST}/orders/${beginning}/${end}`);
        const getdata = await res.json();
        setOrders(getdata);
        console.log(getdata);
    };
    return (
        <div id="order-screen">
            <div id="menuadder1">
                <h2>Orders</h2>

                {/* <p>To use, enter the beginning and end dates in a YYYY-MM-DD Format</p> */}

                <div className="prompt-orders">
                    <p>Enter the beginning and end date</p>
                </div>

                <form id="menuadder-form1">
                    <input
                        type="date"
                        id="beginningdate"
                        name="Beginning Date"
                        required="required"
                        placeholder="Enter Beginning Date"
                        value={beginning}
                        onChange={handleBeginningChange}
                    />
                    <input
                        type="date"
                        id="enddate"
                        name="End Date"
                        placeholder="Enter End Date"
                        required="required"
                        value={end}
                        onChange={handleEndChange}
                    />
                    <button type="button" onClick={handleSubmit}>
                        Output Orders
                    </button>
                </form>
            </div>

            <div className="container">
                <table className="table table-bordered text-white">
                    <thead>
                        <tr>
                            <th>order_id</th>
                            <th>price</th>
                            <th>is_paid</th>
                            <th>order_time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((order_list) => (
                            <tr>
                                <td>{order_list.order_id}</td>
                                <td>{order_list.price}</td>
                                <td>{order_list.is_paid ? "true" : "false"}</td>
                                <td>{order_list.order_time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
