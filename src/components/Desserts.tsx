import { Cart } from "./Cart"
import dataDesserts from '../data/data.json'
import { Carddesert } from "./Carddesert"


export const Desserts = () => {
    return (
        <section className="section__desserts">
            <article className="desserts__list">
                <h2>Desserts</h2>
                <div className="desserts__items">
                    {
                        dataDesserts.map(d => <Carddesert dessert={d} key={d.name}/>)
                    }
                </div>
            </article>
            <Cart />
        </section>
    )
}
