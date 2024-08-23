// Store para los productos

import { create } from "zustand";
import { IDessert } from "../interfaces/IData";
import { devtools, persist } from "zustand/middleware";

interface ProductListState {
    listProducts: IDessert[];
    totalCart: number;
    totalItems: number;

    // Métodos
    addDessert: (dessert: IDessert) => void;
    removeDessert: (id: string) => void;
    resetStore: () => void;
    getQuantityDessert: (id: string) => number | undefined;
}

export const useProductListStore = create<ProductListState>()(
    devtools(
        persist(
            (set, get) => ({
                listProducts: [],
                totalCart: 0,
                totalItems: 0,

                // Adicionar una receta en caso de que no exista.
                // Si existe modificar su cantidad y su total.
                addDessert: (dessert: IDessert) => {
                    const tempProductList = get().listProducts;
                    const indexProduct = tempProductList.findIndex(item => item.id === dessert.id)
                    if (indexProduct > -1) {
                        const orderTotalTemp = tempProductList[indexProduct].totalprice || 0
                        if (tempProductList) {
                            tempProductList[indexProduct].quantity = (tempProductList[indexProduct].quantity || 0) + (dessert.quantity || 1)
                            tempProductList[indexProduct].totalprice = (tempProductList[indexProduct].totalprice || 0) + (dessert.quantity || 1) * dessert.price;
                            set(({ listProducts: [...tempProductList] }))
                            set(({ totalCart: get().totalCart - orderTotalTemp + tempProductList[indexProduct].totalprice }))
                            set(({ totalItems: get().totalItems + (dessert.quantity || 0) }))
                        }
                    } else {
                        const itemDessert: IDessert = {
                            id: dessert.id || '',
                            image: dessert.image,
                            name: dessert.name,
                            price: dessert.price,
                            quantity: dessert.quantity || 1,
                            totalprice: (dessert.quantity || 1) * dessert.price,
                            category: dessert.category
                        }
                        set(state => ({ listProducts: [...state.listProducts, itemDessert] }))
                        set(({ totalCart: get().totalCart + (itemDessert.totalprice || 0) }))
                        set(({ totalItems: get().totalItems + 1 }))
                    }
                },

                // Removemos una receta, conforme al id
                removeDessert: (id: string) => {
                    const tempProductList = get().listProducts.filter(item => item.id !== id)
                    const totalOrderTemp = tempProductList.reduce((acc, current) => { return acc + (current.totalprice || 0) }, 0)
                    const totalItemsTemp = tempProductList.reduce((acc, current) => { return acc + (current.quantity || 0) }, 0)
                    set({ listProducts: [...tempProductList] })
                    set(({ totalCart: totalOrderTemp }))
                    set(({ totalItems: totalItemsTemp }))
                },

                // Reseteamos el Store
                resetStore: () => {
                    set({ listProducts: [] })
                    set(({ totalCart: 0 }))
                    set(({ totalItems: 0 }))
                },

                // Recuperamos si hay cantidades de un id
                getQuantityDessert: (id: string) => {
                    const itemDessert = get().listProducts.find( item => item.id === id)
                    if ( itemDessert) {
                        return itemDessert.quantity
                    }
                    return 0
                }
            }),
            {
                name: 'product-list-javv'
            }
        )
    )
) 
