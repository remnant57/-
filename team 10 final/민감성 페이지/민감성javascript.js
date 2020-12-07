

    function updateOrder() {
        const cleansing1 =22000;
        const cleansing2 =4800; 
        const cleansing3 =20000;
        const cleansing4 =35500;
        const cleansing5 =28000;
        const cleansing6 =18000;
        const cleansing7 =35000;
        const cleansing8 =23000;
    /*민감성 화장품의 가격을 명시*/
        
        var numcleansing1 = parseInt(document.getElementById("cleansing1").value);  
        var numcleansing2 = parseInt(document.getElementById("cleansing2").value);
        var numcleansing3 = parseInt(document.getElementById("cleansing3").value);
        var numcleansing4 = parseInt(document.getElementById("cleansing4").value);
        var numcleansing5 = parseInt(document.getElementById("cleansing5").value);
        var numcleansing6 = parseInt(document.getElementById("cleansing6").value);
        var numcleansing7 = parseInt(document.getElementById("cleansing7").value);
        var numcleansing8 = parseInt(document.getElementById("cleansing8").value); 
        var total= (numcleansing1 * cleansing1) + (numcleansing2 * cleansing2)
                 + (numcleansing3 * cleansing3)  + (numcleansing4 * cleansing4)
                 + (numcleansing5 * cleansing5)  + (numcleansing6 * cleansing6) 
                  + (numcleansing7 * cleansing7)  + (numcleansing8 * cleansing8); 
        document.getElementById("total").value =  total.toFixed(0) + "원";
        }
        function placeOrder(form) {
            //submit the order to the server
            form.submit();
        }