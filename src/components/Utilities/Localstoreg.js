const getReadlist = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
    }
    else{
        return [];
    }
}
const addReadlist = (id) => {
    const storedList = getReadlist();
    if(storedList.includes(id)){
        console.log({id},'is already exist');
        
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr)
    }
}
const removeReadList =  (id) => {
    const storedList = getReadlist().filter(itemId => itemId !== id);
    localStorage.setItem('read-list', JSON.stringify(storedList));
};


const getWishlist = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
    }
    else{
        return [];
    }
}
const addWishlist = (id) => {
    const storedList = getWishlist();
    if(storedList.includes(id)){
        console.log({id},'is already exist');
        
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
    }
}
const removeWishList =  (id) => {
    const storedList = getWishlist().filter(itemId => itemId !== id);
    localStorage.setItem('wish-list', JSON.stringify(storedList));
};

export {addReadlist,addWishlist,getReadlist,getWishlist,removeReadList,removeWishList}