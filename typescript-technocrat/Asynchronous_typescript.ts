{
    // promise

    // simulate
    const createPromise = () => {
        return new Promise((resolve, reject)=> {
            const data: string = "Something";
            
            if(data) {
                resolve(data)
            }else{
                reject("Fail to respond!")
            }
        })
    }

    // Calling create promise function
    const showData = async() => {
        const data = await createPromise();
        console.log(data);
    }

    showData()

}