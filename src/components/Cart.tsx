import { useProductListStore } from '../store/productlist.store';
import { IconCarbonNeutral, IconEmptyCard } from './Icons';
import { Itemcard } from "./Itemcard"
import Modalcart from './Modalcart';

export const Cart = () => {
    const { listProducts: dataProductsList, totalCart, totalItems } = useProductListStore()
    return (
        <div className='container__dessertscart'>
            <article className="dessertscart">
                <h2 className="dessertscart__title">Your Cart ({totalItems})</h2>
                {
                    (totalItems > 0)
                        ? (<>
                            <article className="dessertscart__items">
                                {
                                    dataProductsList.map(itemCart => <Itemcard {...itemCart} key={itemCart.id} />)
                                }
                            </article>
                            <div className="dessertscart__total">
                                <p>Order total</p>
                                <p>${totalCart.toFixed(2)}</p>
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
