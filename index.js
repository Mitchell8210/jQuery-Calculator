$(document).ready(function reset() {
    var num1 = ""
    
    var num2 = ""
    var oper = ""
    $("#calc").on('click', "button", function run(e){
        var val = $(this).html()
        
        if(val === '='|| val===oper){

            if(oper === "+"){
               $("#result").html(Number(num1) + Number(num2))
               
                num1 = $("#result").html().toString()
                num2= ''
                oper= '+'
                
            } else if(oper === "-"){
                $("#result").html(Number(num1) - Number(num2))
                num1 = $("#result").html().toString()
                num2= ''
                oper = '-'
            } else if(oper === "x"){
                $("#result").html(Number(num1) * Number(num2))
                num1 = $("#result").html().toString()
                num2= ''
                oper= 'x'
            } else if(oper === "/"){
                $("#result").html(Number(num1) / Number(num2))
                num1 = $("#result").html().toString()
                num2= ''
                oper= '/'
            } 

            // }else if(oper === "+" && num1 === $("#result").html().toString()){
            //     $("#result").html(Number(num1) + Number(num2))
            //     num1 = $("#result").html().toString()
            //     num2= ''
            //     oper= '+'
            // } else if(oper === "-" && num1 === $("#result").html().toString()){
            //     $("#result").html(Number(num1) - Number(num2))
            //     num1 = $("#result").html().toString()
            //     num2= ''
            //     oper= '-'
            // } else if(oper === "x" && num1 === $("#result").html().toString()){
            //     $("#result").html(Number(num1) * Number(num2))
            //     num1 = $("#result").html().toString()
            //     num2= ''
            //     oper= '*'
            // } else if(oper === "/" && num1 === $("#result").html().toString()){
            //     $("#result").html(Number(num1) / Number(num2))
            //     num1 = $("#result").html().toString()
            //     num2= ''
            //     oper= '/'
            } 
            else if(val === '='&& oper!== '+'){
                $("#result").html(Number(num1) + Number(num1))
                
            } 
            
            
        else if(val === 'x'|| val === '+'||val === '-'||val === '/'){

                oper = val
        } else if (val ==='C'){
            num1 = ""
            num2 = ""
            oper = ""
            reset();
            $("#result").html('')
        } else if(val === "."&& oper ===''){
            num1 += val
        }
        else {
            if(oper === '' && num1 === ''){
                num1 += val
                $("#result").html(num1)
            } 
            
            else {
                num2 += val
                $("#result").html(num2)
            }
            // } else if(oper ==='-'){
            //     num2-= val
            // } else if(oper ==='*'){
            //     num1 *= val
            // } else if(oper === '/'){
            //     num /= val
            // }
        }
        console.log("num1:" + num1)
        console.log("oper:" +oper)
        console.log("num2:"+num2)
    })

})