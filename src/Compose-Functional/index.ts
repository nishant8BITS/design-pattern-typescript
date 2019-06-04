function compose(...funcs: Function[]){
    return funcs.reduce((a,b)=>{
        return (...args:any[]) =>  a(b(...args))
    });
}


function tipple(numb:number){
    return 3 * numb;
}


function square(numb:number){
    return numb * numb;
}

function sums(...numbs: number[]){
    return numbs.reduce((acc, nextItem)=>{
        return acc + nextItem;
    }, 0);
}


const heroicLogic = compose(tipple, square, sums);
console.info(heroicLogic(1,2))