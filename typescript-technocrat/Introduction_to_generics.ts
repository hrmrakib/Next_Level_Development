{
    type GenericArray<T> = Array<T>;


    const names: GenericArray<string> = ["Rahim", "Karim", "Salam"];

    const ages: GenericArray<number> = [37, 34, 42];

    const isMarrid: GenericArray<boolean> = [true, true, true];

    const user:GenericArray<{name:string, age: number}> = [
        {
            name: "Siyam",
            age: 19
        },
        {
            name: "Kawsar",
            age: 23
        }
    ];

    type GenericTuple<X, Y> = [X, Y];
    
    const friends:GenericTuple<string, string> = ["Rakib", "Jahid"];

    const ourAges: GenericTuple<number, number> = [24, 25.6];

    const userWithID: GenericTuple<number, {name:string, age: number}> = [10124,  {
        name: "Faysal",
        age: 23
    }]

    type User = {name: string, age: number};

    const user2: GenericArray<User> = [
        {
            name: "Rubel",
            age: 29
        }
    ]

}