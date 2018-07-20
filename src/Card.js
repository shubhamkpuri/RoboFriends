import React from 'react';

const Card =({id, name , email})=>{
    // const { id, name , email}= props; // destructing
    return (
        <div className="border shadow rounded d-inline-block bg-info m-3">
            <div className=" mx-auto text-center  p-2">
                <img src={`https://api.adorable.io/avatars/200/${id}`} className="rounded-circle" alt="robots" />
                <div>
                    <h2> {name} </h2>
                    <p className="text-muted btn ">{email} </p>

                </div>
            </div>
        </div>
    );
}
export default Card;

// Apis for random images
// https://source.unsplash.com/random
// https://picsum.photos/200/300/?random
// https://api.adorable.io/avatars/200/askd
