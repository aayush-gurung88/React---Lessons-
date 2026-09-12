import { useState } from "react";


function ShopCart(){

        cosnt [cart , setCart] = useState({ items: [] , total : 0})


        return (

            <div>

                 <p> Your shopping cart : {}</p>
            </div>
        )
}

export default ShopCart