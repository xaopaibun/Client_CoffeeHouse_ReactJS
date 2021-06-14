import React from 'react';
import MenuBar from '../MenuBar';
import GetUser from './GetUser';

const User = () =>{
    return(
        <div>
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <GetUser />
                </div>
            </div>
        </div>
    );
}
export default User;