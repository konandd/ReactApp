import React from "react";


const UserBtn = ({text, handleState}) => (
    <button type="submit" onClick={handleState}>{text}</button>
);

export default UserBtn