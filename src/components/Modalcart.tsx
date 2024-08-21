/**Mostramos lo que hay en el carrito de compras */

import { useRef } from "react"
import { IconOrderConfirmed } from "./Icons"
import { IDessertCart } from "../interfaces/IData"
import ItemcardOrder from "./ItemcardOrder"

const dataTempOrder: IDessertCart[] = [
    {
        "image": {
            "thumbnail": "/src/assets/images/image-waffle-thumbnail.jpg"
        },
        "name": "Waffle with Berries",
        "price": 6.50,
        "quantity": 1,
        "totalprice": 6.50
    },
    {
        "image": {
            "thumbnail": "/src/assets/images/image-creme-brulee-thumbnail.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "price": 7.00,
        "quantity": 3,
        "totalprice": 21.00
    },
    {
        "image": {
            "thumbnail": "/src/assets/images/image-macaron-thumbnail.jpg"
        },
        "name": "Macaron Mix of Five",
        "price": 8.00,
        "quantity": 5,
        "totalprice": 40.00
    }
]



const Modalcart = () => {
    const modalCart = useRef<HTMLDialogElement>(null)

    const handleShowModal = () => {
        if (modalCart.current) {
            modalCart.current.showModal()
        }
    }

    const handleCloseModal = () => {
        if (modalCart.current) {
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
                            dataTempOrder.map(itemorder => <ItemcardOrder {...itemorder} key={itemorder.name} />)
                        }
                        <article className="dessertscartmodal__ordertotal">
                            <p>Order Total</p>
                            <p>$46.50</p>
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