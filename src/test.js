import React from "react";



function Test (){

    const [count, setCount ] = useState(0);

    const increaseClick =  () => { 
        let newCount = count + 1;
        setCount(newCount)
    } 

    const decreaseClick =  () => { 
        let newCount = count - 1;
        setCount(newCount)
    }  

    return(
        <div>


            <form onSubmit={decreaseClick}>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>


            <buttom onClick={increaseClick}>Increase</buttom>
            <buttom onClick={decreaseClick}></buttom>
        </div>
    )
}

export default Test