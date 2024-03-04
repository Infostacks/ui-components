import React from "react";

// export interface SampleContextProps{
//     userAuth: any;
//     signOutContext: Function;
// }

const StorybookContext = React.createContext<any>(null);

export function StorybookProvider({initialProps, children}) {
    return (
        <StorybookContext.Provider value={initialProps}>
            {children}
        </StorybookContext.Provider>
    )
}

export const StorybookDecor = (Story, { parameters: { initialProps }}) => (
    <StorybookProvider initialProps={initialProps}>
       <Story />
    </StorybookProvider>
 );

export default StorybookContext