export interface IDessert {
    image:    IImage;
    name:     string;
    category: string;
    price:    number;
}

export interface IImage {
    thumbnail: string;
    mobile:    string;
    tablet:    string;
    desktop:   string;
}

export interface IDessertCart {
    image:      IImageCart;
    name:       string;
    price:      number;
    quantity:   number;
    totalprice: number;
}

export interface IImageCart {
    thumbnail: string;
}
