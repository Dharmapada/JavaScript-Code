for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

let i = 2
while(i <= 10){
    console.log(`For ${i} miltiplication table`);
    console.log(`===============================`);
    for(j=1 ; j <= 10; j++){
        console.log(i +" * " + j +" = " + i*j);
    }
    i++;
    console.log(`===============================`);

}

let value = 100000;
do {
    console.log("Getting Salary");
    value = value + 10000
    console.log(value);
} while (value<=200000);