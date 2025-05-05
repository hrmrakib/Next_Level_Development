{
    // 

    type AlphaNumeric = string | number; 

    const add = (a: AlphaNumeric, b: AlphaNumeric): AlphaNumeric => {
        if(typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }else {
            return a.toString() + b.toString();
        }
    }


    const n1 = add(20, 30);
    const n2 = add('20', 5);

    console.log(n1, n2);


    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }

    const user1: NormalUser = {
        name: "Abul",
    }

    const user2: AdminUser = {
        name: "Babul",
        role: "admin"
    }



    // 
}