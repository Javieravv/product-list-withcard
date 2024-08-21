import { IDessertCart } from '../interfaces/IData';
import { IconCarbonNeutral, IconEmptyCard } from './Icons';
import { Itemcard } from "./Itemcard"
import Modalcart from './Modalcart';

const dataTemp: IDessertCart[] = [
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

// const dataTemp: IDessertCart[] = []



export const Cart = () => {
    return (
        <div className='container__dessertscart'>
            <article className="dessertscart">
                <h2 className="dessertscart__title">Your Cart ({dataTemp.length})</h2>
                {
                    (dataTemp.length > 0)
                        ? (<>
                            <article className="dessertscart__items">
                                {
                                    dataTemp.map(itemCart => <Itemcard {...itemCart} key={itemCart.name} />)
                                }
                            </article>
                            <div className="dessertscart__total">
                                <p>Order total</p>
                                <p>$46.50</p>
                            </div>
                            <div className="dessertscart__carbon">
                                <IconCarbonNeutral />
                                <p>This is a <strong>carbon-neutral</strong> delivery</p>
                            </div>
                            <Modalcart />
                        </>)
                        : (<article className="dessertscart__emptycard">
                            <IconEmptyCard />
                            <p className='emptycard__paragraph' >Your added items will appear here</p>
                        </article>)
                }
            </article>
        </div>
    )
}
