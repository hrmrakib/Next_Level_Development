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
    ]
}