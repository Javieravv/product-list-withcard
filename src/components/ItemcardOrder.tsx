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
                    <p>@ ${dessert.price.toFixed(2)}</p>
                </div>
            </article>
            <div className="itemorder__totalprice">
                <p>${dessert.totalprice.toFixed(2)}</p>
            </div>
        </div>
    )
}
export default ItemcardOrder