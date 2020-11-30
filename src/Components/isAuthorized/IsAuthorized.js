import React from 'react'; 

const IsAuthorizedContext =  React.createContext({authorized: Boolean, setAuthorized: (x) => {}});

export default IsAuthorizedContext;
