import React from 'react'

const SpreadOperatorstudy = () => {
    const fruits = ["apple ", "orange ", "pineapple ", "kiwi "];
    const vegies = ["potato ", "tomato ", "onion"];
    const total = [...fruits, ...vegies];
    const newfruit = ["grapes"]
    const totalfruit = [...fruits, newfruit]
    console.log(total);
    return (
        <div> 
            <p>fruits   :{fruits}</p>
            <p>vegies   :{vegies}</p>
            <p>total    :{total}</p>
            <p>newfruit   :{newfruit}</p>
            <p>totalfruit   :{totalfruit}</p>


        </div>
    )
}

export default SpreadOperatorstudy