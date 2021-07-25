// choice(items): returns a randomly selected item from array of items
function choice(items) {
    const randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx];
}

// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function remove(items, item){
    const index = items.indexOf(item); //indexOf finds first match or -1 if none
    if (index > -1) {
        return items.splice(index, 1)[0]
    } else return undefined;
}

export {choice, remove}; 