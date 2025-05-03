{
    
    let anything : any;

    anything = "Next Level";

    (anything as string)

    anything = 1001;

    (anything as number);

    function kgToGm (value: string | number): string | number | undefined {
        if(typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`
        }
        if(typeof value === 'number') {
            return value * 1000;
        }
    }

    const a1 = kgToGm(14) as number
    const b1 = kgToGm("23") as string

    type CustomError = {
        message: string
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message)
    }

}