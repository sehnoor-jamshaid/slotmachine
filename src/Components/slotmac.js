import React from 'react'
function machine (props)
{var x=props.x
  var  y=props.y
  var  z=props.z
if(x==y && y==z)
{
return(
    <div>
        {x} {y} {z}
        <p>They are matching</p>
    </div>

)}
else
{
    return(
        <div>
        {x} {y} {z}
        <p>They are  not matching</p>
    </div>  
    )
}
} 
export default machine