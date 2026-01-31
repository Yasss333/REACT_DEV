    import {useContext, createContext, useState} from 'react'

    const NotificationContext=createContext();

    export const   NotificationProvider = ({children}) => {
        const [count, setcount]=useState(0);

        const incrementNotification=()=>{
            setcount((prev)=>prev+1)
        };

        const resetNotification=()=>{
            setcount(0);
        }
    return (

        <NotificationContext.Provider value={{count,incrementNotification,resetNotification}}>
            {children}
        </NotificationContext.Provider>
    )
    }
    //hook
    export function useNotification(){
        return useContext(NotificationContext)
        } 