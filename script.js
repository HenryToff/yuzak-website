
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}






var removebtn = document.getElementsByClassName('btn-danger');
//for (i = 0; i < removebtn.length ; i++){
//     removebtn[i].addEventListener('click', removebtns)    
//}
function removebtns(event){
     var e = event.target;
     var parents = e.parentElement.parentElement.remove()
     //console.log(parents)
     grandtotal()
}

var orderNowbtn = document.getElementsByClassName('btn-add');
for  (i = 0; i < orderNowbtn.length ; i++){
     orderNowbtn[i].addEventListener('click', orderNowbtns) 
}


function orderNowbtns(event){
     var orderNowbtn = event.target;
     var ordernowbtnEl = orderNowbtn.parentElement
     //console.log(ordernowbtnEl)
     var img = ordernowbtnEl.children[0].src;
     var name = ordernowbtnEl.children[1].innerText;
     var price = ordernowbtnEl.children[2].innerText;
     orderNowbtnupdate ( img , name , price )
}

     var tbody = document.getElementsByTagName('tbody')[0]
 function orderNowbtnupdate ( img , name , price ){
     var createElement = document.createElement('tr');
    var names = document.getElementsByClassName('item-name');
    for( i = 0 ; i <  names.length ; i++){
        if(names[i].innerText == name){
            alert('This item is already added to your orders');
            return
        }
    }

     createElement.innerHTML = `
     <td><img src="${img}" class="item-img" alt=""></td>
     <td id="item"><h4 class="item-name" id="item">${name}</h4></td>
     <td><h4 class="item-price">${price}</h4></td>
     <td><input type="number" class="quantity" value="0"></td>
     <td><h4 class="sub-total">GHC 0 </h4></td>
     <td><button class="btn btn-danger">Remove</button></td>`
     tbody.append(createElement);  
     for (i = 0; i < removebtn.length ; i++){
        removebtn[i].addEventListener('click', removebtns)    
   }
     for  (i = 0; i < quantityupdate.length ; i++){
        quantityupdate[i].addEventListener('click', updatequantity) 
    } 
    grandtotal()   
}


//var orderNowbtn = document.getElementsByClassName('btn-order')[0].addEventListener('click', orderClicked)

//function orderClicked(){
 
       //alert('Thank you for your Orders')        
   //var body = document.getElementsByClassName('body')[0]
   //while(body.hasChildNodes()){
        //body.removeChild(body.firstChild)
    //}
    
   //grandtotal()
//}

var quantityupdate  = document.getElementsByClassName('quantity');

function updatequantity(event) {
    var updateEl = event.target;
    var parentsEl = updateEl.parentElement.parentElement
    //console.log(parentsEl)
    var itemPrice = parentsEl.getElementsByClassName('item-price')[0]
    var itemPrices = itemPrice.innerText.replace('GHC', ' ');
    var subtotal = parentsEl.getElementsByClassName('sub-total')[0];
    subtotal.innerHTML = updateEl.value * itemPrices ;
    if (isNaN(updateEl.value) || updateEl.value<= 0){
        updateEl.value = 1 ;
    }
    grandtotal()
} 

function grandtotal(){
    var total = 0;
    var garnds = document.getElementsByClassName('grand-total')[0];
    var updates = document.getElementsByClassName('sub-total')
    for( i = 0 ; i < updates.length ; i++ ){
        var updatesAmount = parseInt(updates[i].innerText.replace('GHC ' , ' '));
        total += updatesAmount;
    }
    garnds.innerHTML = 'GHC ' +  total;
}





$(document).ready(function(){
    $(".btn-order").on('click', function(){
        var currentRow =$(this).closest("tr");
        var order = currentRow.find ("td:eq(1)").text();
        var price = currentRow.find ("td:eq(2)").text();
        var total = currentRow.find ("td:eq(4)").text();
        alert('Place Your Oder');
       // alert(order + "\n" + price + "\n" + total + "\n");    

   });

    $(".btn-order").on('click',function(){
        var aData=[0];

        $(".form tbody tr").each(function(){

            var Rows =$(this);
            var order = Rows.find ("td:eq(1)").text();
            var price = Rows.find ("td:eq(2)").text();
            var total = Rows.find ("td:eq(4)").text();
            
            $('#textarea').val(order + '   ' + price + '   ' + total);
            $("form").css("display", "block");//show();

            var obj = {};
            obj.order = order;
            obj.price = price;
            obj.total = total;

            aData. push(obj);

            
         
     

        });

    }); 

    
          
               
}); 

 //$(document).on('click', '#order', function(){
       
            //var order = $(this).find('td:eq(1)').text();
            //var price = $(this).find('td:eq(2)').text();
            //var total = $(this).find('td:eq(4)').text();

            //$('#textarea').val(order + '   ' + price + '   ' + total);
            //$("form").css("display", "block");//show();
            



     

     //$(document).on('click', '#place' ,function(){

         //$("form").css("display", "none"); //hide();
        // alert("Thank");
    
    //});


//});


















































