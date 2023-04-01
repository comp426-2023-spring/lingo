// import { createContext } from "react";

// let loggedIn = createContext({
//     loggedIn: false,
//     switchAuth: () => {
//         loggedIn = !loggedIn;
//     }});

// export default {loggedIn};

import React from 'react';

export const AppContext = React.createContext({ 
  authenticated: true,
  lang: 'en',
  theme: 'dark'
});