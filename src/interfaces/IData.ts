export interface IDessert {
    id: string;
    image: IImage;
    name: string;
    price: number;
    quantity?: number;
    category: string;
    totalprice?: number;
}

export interface IImage {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

// export interface IDessertCart {
//     id: string;
//     image: IImageCart;
//     name: string;
//     price: number;
//     quantity: number;
//     totalprice?: number;
// }

// export interface IImageCart {
//     thumbnail: string;
// }
