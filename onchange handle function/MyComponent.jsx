import { useState } from "react"
import { useFormState } from "react-dom";


function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity , setQuantity] = useState(1);
    const [comment , setComment] = useState();
    const [payment , setPayment] = useState();
    const [shipping , setShipping] = useState();    

    function handleNameChange(event){
            setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    // function Reset(){
    //     setName("");
    //     setQuantity();
    // }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name : {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity : {quantity}</p>


            <textarea value={comment} onChange={handleCommentChange} placeholder="leave comment here !!"></textarea>
            <p>Comment : {comment} </p>
            {/* <button onClick={Reset}> Reset Values</button> */}

            <select value={payment} onChange={handlePaymentChange}>
                <option>Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option> 
            <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment : {payment}</p>


            <label> 
                <input type="radio" value= "Pick Up" checked = {shipping === "Pick Up"} 
                onChange={handleShippingChange} />
                Pick up </label>

            <br />
            <label> 
                <input type="radio" value="Delivery" checked = {shipping === "Delivery"} 
                onChange={handleShippingChange}/>
                Delivery </label>
            <p>Shipping : {shipping}</p>
        
        </div>
    )
}

export default MyComponent