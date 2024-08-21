import { FC } from "react"
import { IDessertCart } from "../interfaces/IData"

const ItemcardOrder: FC<IDessertCart> = (dessert) => {
    return (
        <div className="dessertcartorder__item">
            <article className="itemorder__img">
                <img src={dessert.image.thumbnail} alt={dessert.name} />
            </article>
            <article className="itemorder__data">
                <h4>{dessert.name}</h4>
                <div>
                    <p>{dessert.quantity}x</p>
                    <p>@ ${dessert.price}</p>
                </div>
            </article>
            <div className="itemorder__totalprice">
                <p>${dessert.totalprice}</p>
            </div>
        </div>
    )
}


export default ItemcardOrder