    // import { func } from "prop-types";
import { useState } from "react";

    function likeUnlike(){

        const[like , setLike] = useState(0);
        const [liked , setLiked] = useState(false);

        // function increase(){
        //     setLike(l => l + 1)
        // }

        function handleClick(){
            if (!liked) {
                setLike(l => l + 1);
                setLiked(true);
            }
            else{
                setLike(l => l-1);
                setLiked(false);
                }
        }

        return (

            <div>
                

                <p>Likes : {like}</p>

                <button onClick={handleClick}>{liked ? "Unlike " : "Like"}</button>   
                
            </div>
        );
    }

    export default likeUnlike;