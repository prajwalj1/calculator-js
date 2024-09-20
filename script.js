const calcu=(a,b,operator)=>{
    switch(operator)
    {
        case '+':var result=a+b;
        console.log(result);  
        break
        case '-':var result=a-b;
        console.log(result);
        break
        case '*':var result=a*b;
        console.log(result);
        break 
        case '/':var result=a/b;
        console.log(result);
        break
        default :console.log("Invalid Operator");
        
    }

}
calcu(10,2,'/');