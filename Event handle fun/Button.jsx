

function Button()
{   
  
    const handleClick = (event) => event.target.textContent = "Aaiya!"

       
        return(<button onDoubleClick={(event) => handleClick(event)} >
            Click Me</button>)
}

export default Button