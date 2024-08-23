/**Mostramos lo que hay en el carrito de compras */

import { useRef } from "react"
import { IconOrderConfirmed } from "./Icons"
import ItemcardOrder from "./ItemcardOrder"
import { useProductListStore } from "../store/productlist.store"

const Modalcart = () => {
    const { listProducts: dataTempOrder, totalCart, resetStore} = useProductListStore()
    const modalCart = useRef<HTMLDialogElement>(null)

    const handleShowModal = () => {
        if (modalCart.current) {
            modalCart.current.showModal()
        }
    }

    const handleCloseModal = () => {
        if (modalCart.current) {
            resetStore()
            modalCart.current.close()
        }
    }
    return (
        <>
            <button
                className="dessertscart__buttomconfirm"
                onClick={handleShowModal}
            >
                Confirm Order
            </button>
            <dialog
                ref={modalCart}
                className="dessertscartmodal__container"
            >
                <article className="dessertscartmodal__main">
                    <IconOrderConfirmed />
                    <div>
                        <h2 className="dessertscartmodal__title">Order Confirmed</h2>
                        <p className="dessertscartmodal__paragraph">We hope you enjoy your food!</p>
                    </div>
                    <article className="dessertscartmodal__items">
                        {
                            dataTempOrder.map(itemorder => <ItemcardOrder {...itemorder} key={itemorder.id} />)
                        }
                        <article className="dessertscartmodal__ordertotal">
                            <p>Order Total</p>
                            <p>${totalCart.toFixed(2)}</p>
                        </article>
                    </article>
                    <button
                        onClick={handleCloseModal}
                        className="dessertscartmodal__button"
                    >
                        Start New Order
                    </button>
                </article>
            </dialog>
        </>
    )
}

export default Modalcart