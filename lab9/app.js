//primer programa con node


stringTotxt("gorditas");

// codigo asincrono

const arreglo = [3,4,2,300,2000,1500,200,34,12,400,100,3000]
function settimeout(arr){

    for (let item of arr){
        setTimeout( () => {
            console.log(item);
        }, item);
    }
}

// settimeout(arreglo);
