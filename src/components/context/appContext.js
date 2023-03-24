import React, {useState, createContext,useContext} from 'react';

export const AppContext = createContext(null);

export const useAppContext=()=>{
    const context=useContext(AppContext);
    if(context === undefined){
        throw new Error("This is a new error be care ful for what you do!")
    }
    return context;
}

const AppContextProvider=({children})=>{
    const [favorite, setFavorite]=useState([]);
    const addFavorite=(book)=>{
        const oldFavorite=[...favorite];
        const newFavorite =oldFavorite.concat(book);
        setFavorite(newFavorite);
    };
    const removeFavorite=(id)=>{
        const oldFavorite =[...favorite];
        const newFavorite =oldFavorite.filter(book => book.id !== id);
        setFavorite(newFavorite);
    };

    return(
        <AppContext.Provider value={{favorite, addFavorite, removeFavorite}}>
                      {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;