let total = 0;
let x = 1;
let rownum = 0;
let noDel = 0;
let mainArray = [];
let ArrayNum = 0;


function addTotal(price, quantity){

    //Adding up the total and printing it
    total = total + (price * quantity);

    document.getElementById("total").innerHTML = total;

}

function minusTotal(price, quantity){

    //Deducting the total and printing it
    total = total - (price * quantity);

    document.getElementById("total").innerHTML = total;

}

function addToItemList(){

    //Obtaining user's input
    let a = document.getElementById("Item_Name").value;
    let b = parseFloat(document.getElementById("Item_Price").value);
    let c = parseInt(document.getElementById("Item_Quantity").value);
 
    addTotal(b, c);
    //console.log(total);
    
    //Filling array where everything will be temporarily stored
    mainArray[x] = [a, b, c];
    console.log(mainArray);

    //Adding rows to the already created table in add.html
    addRow(a, b, c);
    
    x++;
    
    event.preventDefault();
}

function deleteItem(row, num, price, quantity){

    //Deleting Row and setting its place in the array to null
    document.getElementById("maintable").deleteRow(row); 

    mainArray[num] = null;
    console.log(mainArray);

    minusTotal(price, quantity);

    noDel++;
}

function updateItem(row, num, name, price, quantity){

    //Attempt in printing the variables in the add.html and then proceeding to delete
    document.getElementById("Item_Name").value = name;
    document.getElementById("Item_Price").value = price;
    document.getElementById("Item_Quantity").value = quantity;

    deleteItem(row, num, price, quantity);
}

function addRow(a, b, c) {
    
    let tbodyref = document.getElementById("maintable").getElementsByTagName('tbody')[0];
    
    //Inserting row
    let row = tbodyref.insertRow(-1); 
    ArrayNum = row.rowIndex + noDel;
    rownum = row.rowIndex;
    
    //Inserting cell data and the delete and update buttons
    var data = row.insertCell(0);
    data.innerHTML = a;
    data = row.insertCell(1);
    data.innerHTML = b;
    data = row.insertCell(2);
    data.innerHTML = c;
    data = row.insertCell(3);
    data.innerHTML = '<input type="button" id="upd'+ ArrayNum +'" value="Update" onclick="updateItem('+ rownum +','+ ArrayNum +', '+ a +', '+ b +', '+ c +')">'
    data = row.insertCell(4);
    data.innerHTML = '<input type="button" id="del'+ ArrayNum +'" value="Delete" onclick="deleteItem('+ rownum +', '+ ArrayNum +', '+ b +', '+ c +')">'

    //console.log(ArrayNum);
    
}