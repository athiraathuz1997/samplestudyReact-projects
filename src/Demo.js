import React from 'react'



var x=0;
function test(){
  x++;
  alert(x);
}

function Demo() {
    // var nw={color:"blue",background:"grey"}
  return (
    <div>

        {/* <p style={nw}>Equipo Health</p> */}
        {/* <p style={props.dt}>{props.name}</p> */}
        <button onClick={test}>click</button>
        
    </div>
  )
}

export default Demo