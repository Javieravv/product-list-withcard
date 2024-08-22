// Store para los productos

import { create } from "zustand";
import { IDessert, IDessertCart } from "../interfaces/IData";
import { devtools, persist } from "zustand/middleware";

interface ProductListState {
    listProducts: IDessertCart[];
    totalCart: number;

    // Métodos
    addDessert: (dessert: IDessert) => void;
    removeDessert: (id: string) => void;
    resetStore: () => void;
}

export const useProductListStore = create<ProductListState>()(
    devtools(
        persist(
            (set, get) => ({
                listProducts: [],
                totalCart: 0,

                // Adicionar una receta en caso de que no exista.
                // Si existe modificar su cantidad y su total.
                addDessert: (dessert: IDessert) => {
                    const tempProductList = get().listProducts;
                    const indexProduct = tempProductList.findIndex(item => item.id === dessert.id)
                    if (indexProduct > -1) {
                        const orderTotalTemp = tempProductList[indexProduct].totalprice
                        tempProductList[indexProduct].quantity += (dessert.quantity || 1)
                        tempProductList[indexProduct].totalprice += (dessert.quantity || 1) * dessert.price;
                        set(({ listProducts: [...tempProductList] }))
                        set(({ totalCart: get().totalCart - orderTotalTemp + tempProductList[indexProduct].totalprice }))
                    } else {
                        const itemDessert: IDessertCart = {
                            id: dessert.id || '',
                            image: dessert.image,
                            name: dessert.name,
                            price: dessert.price,
                            quantity: dessert.quantity || 1,
                            totalprice: (dessert.quantity || 1) * dessert.price
                        }
                        set(state => ({ listProducts: [...state.listProducts, itemDessert] }))
                        set(({ totalCart: get().totalCart + itemDessert.totalprice }))
                    }
                },

                // Removemos una receta, conforme al id
                removeDessert: (id: string) => {
                    const tempProductList = get().listProducts.filter(item => item.id !== id)
                    const totalOrderTemp = tempProductList.reduce((acc, current) => { return acc + current.totalprice }, 0)
                    set({ listProducts: [...tempProductList] })
                    set(({ totalCart: totalOrderTemp }))
                },

                // Reseteamos el Store
                resetStore: () => {
                    set({ listProducts: [] })
                    set(({ totalCart: 0 }))
                },
            }),
            {
                name: 'product-list-javv'
            }
        )
    )
) 
