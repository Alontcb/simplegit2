export const sevenBoom = (n)=> {
    for (let i = 1; i <= n; i++) {
        const has7 = String(i).includes("7");
        const div7 = i % 7 === 0;

        console.log(has7 || div7 ? "BOOM" : i);
    }
}
