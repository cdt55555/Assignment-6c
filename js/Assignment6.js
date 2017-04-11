function MenuChoice()
{
if (document.getElementById("menu").value == "Display Section 1")
{
document.getElementById("section1").style.visibility = "visible";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "hidden";
}
else if (document.getElementById("menu").value == "Display Section 2")
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "visible";
document.getElementById("section3").style.visibility = "hidden";
}
else if (document.getElementById("menu").value == "Display Section 3")
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "visible";  
}
else
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
}
}


function CreateCustomer()
{
var objRequest = new XMLHttpRequest();
var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";

var customerid = document.getElementById("custid").value;
var customername = document.getElementById("custname").value;
var customercity = document.getElementById("custcity").value;
//Create the parameter string
var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","CompanyCity":"' + customercity + '"}';
//Checking for AJAx operation return  
objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
{
var result1 = JSON.parse(objRequest.responseText);
OperationResult(result1);
}
};
//Start AJAX request
objRequest.open("POST", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(newcustomer);
}
function OperationResult(output)
{ 
if (output.WasSuccessful == 1)
{
document.getElementById("result1").innerHTML = "The operation was successful!"
}
else
{
document.getElementById("result1").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
}
}


function CreateShip()

{
var objRequest = new XMLHttpRequest();
var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";

var customerordernumber = document.getElementById("ordernumber").value;
var customernameS = document.getElementById("custnameS").value;
var customerstreetaddress = document.getElementById("streetaddress").value;
var customercityS = document.getElementById("custcityS").value;
var customerpostalcode = document.getElementById("postalcode").value;

var newaddress  = '{"OrderID":"' + customerordernumber + '","ShipName":"' + customernameS +'","ShipAddress":"' + customerstreetaddress + '","ShipCity":"' + customercityS +'","ShipPostalcode":"' + customerpostalcode +'"}';

objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
{
var result2 = JSON.parse(objRequest.responseText);
OperationResult(result2);
}
};

objRequest.open("POST", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(newaddress);
}
function OperationResult2(output2)
{ 
if (output2.WasSuccessful == 1)
{
document.getElementById("result2").innerHTML = "The operation was successful!"
}
else
{
document.getElementById("result2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
}
}


function DeleteCustomer()

{
var objRequest = new XMLHttpRequest();
var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer";

var customeridD = document.getElementById("custidD").value;


var deletecustomerid  = '{"CustomerID":"' + customeridD + '"}';

objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
{
var result2 = JSON.parse(objRequest.responseText);
OperationResult(result2);
}
};

objRequest.open("GET", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(deletecustomerid);
}
function OperationResult3(output3)
{ 
if (output3.WasSuccessful == 1)
{
document.getElementById("result2").innerHTML = "The operation was successful!"
}
else
{
document.getElementById("result2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
}
}
