{
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T,
        bike?: X
    }

    type TWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const abcDev: Developer<TWatch>  = {
        name: "Mofiz Mia",
        computer: {
            brand: "Dell",
            model: "Inspiron 13",
            releaseYear: 2020
        },
        smartWatch: {
            brand:"Switch 101",
            model: "Oil99",
            display: "Kuio" 
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        display: string;
        price: string;
        hasAI: boolean
    }

    type Bike = {
        name: string;
        model: string
    }

    const xyzDev: Developer<AppleWatch, Bike>  = {
        name: "Abul Mia",
        computer: {
            brand: "Mac 15",
            model: "Awros",
            releaseYear: 2024
        },
        smartWatch: {
            brand:"Apple",
            model: "single",
            display: "pure ai",
            price: "$1899",
            hasAI: true 
        },
        bike: {
            name: "",
            model: ""
        }
    }
}

