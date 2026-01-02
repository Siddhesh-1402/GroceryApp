import { StyleSheet, Text, View } from 'react-native'
import React, { Children, createContext, useContext, useState } from 'react'


type FavItem = {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity: number;
};


type FavContextType = {
  Fav: FavItem[];
  addToFav: (item: any) => void;
 
};


const FavContext = createContext<FavContextType | null>(null);

 export const FavContexts = ({ children }) => {

    const [fav, setFav]=useState<FavItem[]>([])




      const addToFav = (item: any) => {
    setFav(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <FavContext.Provider value={{ Fav: fav, addToFav }}>
      {children}
    </FavContext.Provider>
  );
}

export const useFav = () => useContext(FavContext);
