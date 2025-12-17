export const add = (x,y) =>x+y
export const substrack = (x,y) =>x-y
export const mulitiply = (x,y) =>x*y
export const devied = (x,y) =>y==0?null:x/y
export const square = (x) =>x*x
export const cube = (x) =>x*x*x
export const power = (x,y) =>x**y
export const mod = (x,y) =>x%y
export const increment = (x) =>x+1
export const decrement = (x) =>x-1
export const absolute = (x) =>x<0?-x:x
export const max = (x,y) =>x>y?x:y
export const min = (x,y) =>x<y?x:y
export const average = (x,y) =>(x+y)/2
export const factorial = (x) => {
    if (x < 0) return null;
    if (x === 0) return 1;
    let result = 1;     
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
}
export const isEven = (x) =>x%2===0
export const isOdd = (x) =>x%2!==0
export const gcd = (x,y) => {
    while(y){
        let t = y;
        y = x % y;
        x = t;
    }   
    return x;
}