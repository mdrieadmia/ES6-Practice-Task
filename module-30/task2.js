const friendNames = (a) => {
    const names = a.filter((n) => n.length % 2 == 0);
    return names;
}

const result = friendNames(['Riead','Rony','Firad','Akash','Niaz']);
console.log(result);