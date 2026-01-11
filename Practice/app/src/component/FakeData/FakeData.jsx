import React, { useEffect, useState } from 'react'
import User from '../Users/Users'
const FakeData = ({addToCart}) => {
    
    const [fake, setFake] = useState([]);

    useEffect(() => {
       fetch('data.json')
       .then((response) => response.json())
       .then(data => setFake(data));
    }, []);
    
    return (
        <div className='grid grid-cols-3'>
           {/* <pre>{JSON.stringify(fake[0], null, 2)}</pre> */}
           {
              fake.map((data) => (
                 <User addToCart = {addToCart} data = {data} />
              )

              )
           }
        </div>
    )
}

export default FakeData;