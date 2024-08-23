import { FC } from "react"
import { IDessert } from "../interfaces/IData"
import { IconRemoveItem } from "./Icons"
import { useProductListStore } from "../store/productlist.store"

export const Itemcard: FC<IDessert> = (dessert) => {
   const { removeDessert } = useProductListStore()
   return (
      <div className="dessertcart__item">
         <div className="item__data">
            <h4>{dessert.name}</h4>
            <div>
               <p>{dessert.quantity}x</p>
               <p>@ ${dessert.price.toFixed(2)}</p>
               <p>${dessert.totalprice?.toFixed(2)}</p>
            </div>
         </div>
         <div
            className="item__remove"
            onClick={() => removeDessert(dessert.id)}
         >
            <IconRemoveItem />
         </div>
      </div>
   )
}
