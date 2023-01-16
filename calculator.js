var number = 0;
var count =0;
var temp = "";
function getValue(i){
    if(i>=0 && i<=9 || i=="."){
        if(number==0){
            number=i;
            document.getElementById("result").innerHTML=number;
        }else{
            number +=`${i}`;
            console.log(number)
            document.getElementById("result").innerHTML=number;
        }
    } else if(i =="+" || i =="-" || i =="*" || i =="/"){
        if (count==0){
            number+=i;
            document.getElementById("result").innerHTML=number;
            temp = i;
            count+=1;
        } else{
            index = number.indexOf(`${temp}`);
            num1= number.slice(0,index);
            num2= number.slice(index+1,number.lenght);
            if(temp=="+"){
                number= Number(num1)+ Number(num2);
            } else if(temp=="-"){
                number= Number(num1)-Number(num2);
            } else if(temp=="*"){
                number= Number(num1)*Number(num2);
            } else{
                number= Number(num1)/Number(num2);
            }
            
            document.getElementById("result").innerHTML=number;

            number+=`${i}`;
            console.log(number);
            temp = i;
        }
    
    }else if (i == "="){
            index = number.indexOf(`${temp}`);
            num1= number.slice(0,index);
            num2= number.slice(index+1,number.lenght);
            if(temp=="+"){
                number= Number(num1)+ Number(num2);
            } else if(temp=="-"){
                number= Number(num1)-Number(num2);
            } else if(temp=="*"){
                number= Number(num1)*Number(num2);
            } else{
                number= Number(num1)/Number(num2);
            }
            count =0;
        document.getElementById("result").innerHTML=number;
    } else{
        document.getElementById("result").innerHTML="0";
        number = 0;
        count =0;
        temp = "";
    }
}