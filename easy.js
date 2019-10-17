$(document).ready(function() {


    $(".plus").on('click', function (e){

        $("#answer").val(Number($("#num_one").val()) + Number($("#num_two").val()))
    })
    $(".minus").on('click', function (e){
        $("#answer").val(Number($("#num_one").val()) - Number($("#num_two").val()))
    })
    $(".times").on('click', function (e){
        $("#answer").val(Number($("#num_one").val()) * Number($("#num_two").val()))
    })
    $(".divide").on('click', function (e){
        $("#answer").val(Number($("#num_one").val()) / Number($("#num_two").val()))

    


        ////////////-------------------//////////////////
        // $("#calculator").on('click', "button", function(){

        
//         var num1 = $("#num_one").val()
//         var num2 = $("#num_two").val()
//         var val = $(this).html()
       

//         if(val === "+"){
//             $("#answer").val(Number(num1) + Number(num2))
            
//         } else if(val === "-"){
//             $("#answer").val(Number(num1) - Number(num2))
            
//         } else if(val === "*"){
//             $("#answer").val(Number(num1) * Number(num2))
            
//         } else if(val === "/"){
//             $("#answer").val(Number(num1) / Number(num2))
            
//         }

//     })

//     })
})})