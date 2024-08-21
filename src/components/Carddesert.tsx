import { FC } from "react"
import { IDessert } from "../interfaces/IData"
import {  IconDecrementQuantity, IconIncrementQuantity } from "./Icons"

interface Props {
    dessert: IDessert
}

export const Carddesert: FC<Props> = ({ dessert }) => {
    return (
        <div className="dessert__card">
            <div
                className="dessert__picture"
            >
                <picture>
                    <source media="(max-width: 500px)" srcSet={dessert.image.mobile} />
                    <source media="(max-width: 768px)" srcSet={dessert.image.tablet} />
                    <img src={dessert.image.desktop} alt={dessert.name} />
                </picture>
                <article className="button dessert__button--add">
                    <div>
                        <IconDecrementQuantity />
                    </div>
                    5
                    <div>
                        <IconIncrementQuantity />
                    </div>
                </article>
            </div>
            <div className="dessert__data">
                <p className="dessert__category">{dessert.category}</p>
                <p className="dessert__name">{dessert.name}</p>
                <p className="dessert__price">${dessert.price}</p>
            </div>
        </div>
    )
}
