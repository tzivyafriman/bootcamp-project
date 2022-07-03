import React from "react";

export const Providers = React.createContext({}); 

export const providersProvider = (props) => 
{
    const contextValue = {
        details: props
    }

return <Providers.Provider value={contextValue}>
    {props.children}
</Providers.Provider>
}

