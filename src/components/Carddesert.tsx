import { FC, useEffect, useState } from "react"
import { IDessert } from "../interfaces/IData"
import { IconAddToCart, IconDecrementQuantity, IconIncrementQuantity } from "./Icons"
import { useProductListStore } from "../store/productlist.store"

interface Props {
    dessert: IDessert
}

export const Carddesert: FC<Props> = ({ dessert }) => {
    // TODO: usar un useEffect para recuperar del Store las unidades que tiene
    const { addDessert, removeDessert, totalCart, getQuantityDessert } = useProductListStore()
    const [quantityDessert, setquantityDessert] = useState<number>(getQuantityDessert(dessert.id || '') || 0)

    useEffect(() => {
        if (totalCart === 0) {
            setquantityDessert(0)
        } else if (( totalCart > 0) && (getQuantityDessert(dessert.id || '') === 0)) {
            setquantityDessert(0)
        }

    }, [totalCart, dessert.id, getQuantityDessert])

    return (
        <div className="dessert__card">
            <div
                className="dessert__picture"
            >
                <picture>
                    <source media="(max-width: 500px)" srcSet={dessert.image.mobile} />
                    <source media="(max-width: 768px)" srcSet={dessert.image.tablet} />
                    <img
                        src={dessert.image.desktop}
                        alt={dessert.name}
                        className={`${quantityDessert > 0 ? 'card-selected' : ''}`}
                    />
                </picture>
                {(quantityDessert > 0)
                    ? (
                        <article className="button dessert__button--add">
                            {/* Botón adicionar items */}
                            <div
                                onClick={() => {
                                    dessert.quantity = -1;
                                    setquantityDessert(quantityDessert - 1)
                                    if ((quantityDessert - 1) < 1) {
                                        removeDessert(dessert.id || '')
                                    } else {
                                        addDessert(dessert);
                                    }
                                }}
                            >
                                <IconDecrementQuantity />
                            </div>
                            {quantityDessert}
                            <div
                                onClick={() => {
                                    dessert.quantity = 1;
                                    setquantityDessert(quantityDessert + 1)
                                    addDessert(dessert);
                                }}
                            >
                                <IconIncrementQuantity />
                            </div>
                        </article>
                    )
                    : (
                        <article
                            className="button dessert__button"
                            onClick={() => {
                                dessert.quantity = 1;
                                setquantityDessert(() => quantityDessert + 1)
                                addDessert(dessert);
                            }}
                        >
                            {/* Botón items vacíos */}
                            <IconAddToCart />
                            <p>Add to Cart</p>
                        </article>)
                }
            </div>
            <div className="dessert__data">
                <p className="dessert__category">{dessert.category}</p>
                <p className="dessert__name">{dessert.name}</p>
                <p className="dessert__price">${dessert.price.toFixed(2)}</p>
            </div>
        </div>
    )
}
