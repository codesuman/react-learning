import { useState } from "react";

const FormComponent = () => {
    const [name, setName] = useState('Bob');
    const [quantity, setQuantity] = useState(1);
    const [comments, setComments] = useState('');
    
    const paymentModes = ['MasterCard', 'Visa', 'COD'];
    const [paymentMode, setPaymentMode] = useState(paymentModes[0]);
    
    const shippingModes = ['Pick Up', 'Delivery'];
    const [shippingMode, setShippingMode] = useState(shippingModes[0]);

    return(
        <>
            <div>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                <p>Name : {name}</p>
            </div>

            <div>
                <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
                <p>Quantity: {quantity}</p>
            </div>

            <div>
                <textarea cols="30" value={comments} onChange={(event) => setComments(event.target.value)}
                    placeholder="Leave comments about Order customization or delivery instructions "></textarea>
                <p>Comments : {comments}</p>
            </div>

            <div>
                <select value={paymentMode} onChange={(event) => setPaymentMode(event.target.value)}>
                    {
                        paymentModes.map(pm => <option value={pm}>{pm}</option>)
                    }
                </select>
                <p>Payment Mode : {paymentMode}</p>
            </div>

            <div>
                {
                    shippingModes.map(sm => (
                        <label>
                            <input type="radio" value={sm} 
                                checked={sm === shippingMode}
                                onChange={(event) => setShippingMode(event.target.value)}/>
                            {sm}
                        </label>)
                    )
                }
                <p>Shipping Mode : {shippingMode}</p>
            </div>
        </>
    );
}

export default FormComponent;