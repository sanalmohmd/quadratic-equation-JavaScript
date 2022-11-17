let root1,root2;

let a = parseInt(prompt("Enter the 1st number"));
let b = parseInt(prompt("Enter the 2nd number" ));
let c = parseInt(prompt("Enter the 3rd number"));

let discriminant = b * b - 4 * a * c;

if (discriminant > 0){

    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    document.write(`The roots of quadratic equation are ${root1} and ${root2}`);

}

else if (discriminant == 0){
    root1 = root2 = -b / (2*a);

    document.write(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 *a)).toFixed(2);

    document.write(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`)
}

