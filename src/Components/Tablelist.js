import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const Tablelist = () => {
    const [objectArray,setobjectArray] = useState([
        { name: "achu", age: 20, qualification: "B.Tech" },
        { name: "devu", age: 20, qualification: "B.Tech" },
        { name: "ponnu", age: 20, qualification: "B.Tech" },
    ])
    const object=
        {
            name:"arshad",age:17,qualification:"Degree"
        }
    const additem=()=>{
        const added = objectArray.concat(object);
        setobjectArray(added);
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Qualification</th>
                    </tr>
                </thead>
                <tbody>
                    {objectArray.map((item) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.qualification}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
          <div className='text-end me-4'>
            <Button onClick={additem}>Add Items</Button>
          </div>
        </div>
    )
}

export default Tablelist