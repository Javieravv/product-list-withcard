import { FC } from "react"
import { IDessertCart } from "../interfaces/IData"
import { IconRemoveItem } from "./Icons"

export const Itemcard:FC<IDessertCart> = ( dessert) => {
  return (
    <div className="dessertcart__item">
        <div className="item__data">
            <h4>{dessert.name}</h4>
            <div>
                <p>{dessert.quantity}x</p>
                <p>@ ${dessert.price}</p>
                <p>${dessert.totalprice}</p>
            </div>
        </div>
        <div className="item__remove">
            <IconRemoveItem />
        </div>
    </div>
  )
}
