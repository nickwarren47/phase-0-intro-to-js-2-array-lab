const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)


function destructivelyAppendCat(cat) {
cats.push(cat)
}

function destructivelyPrependCat(name) {
cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.splice(2)
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
}

function appendCat(catsName) {
   return [ ...cats, catsName]
}

function prependCat(catsName){
    return [catsName, ...cats]
}


function removeLastCat() {
    return (cats.slice(0, cats.length -1))
}
 

function removeFirstCat(){
    return (cats.slice(1))
}
