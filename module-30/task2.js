const friendNames = (a) => {
    const names = [];
    for (const name of a){
        if(name.length % 2 === 0){
            names.push(name)
        }
    }
    return names;
}

const result = friendNames(['Riead','Rony','Firad','Akash','Niaz']);
console.log(result);