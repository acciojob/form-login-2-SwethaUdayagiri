//your JS code here. If required.
function alertbox1(){
	var fName=document.getElementsByName("First Name")[0].value;
	var LName=document.getElementsByName('Last Name')[0].value;
	var phone=document.getElementsByName('Phone Number')[0].value;
	var emailId=document.getElementsByName('Email ID')[0].value;
	alert("First Name: "+fName+"\nLast Name: "+LName+"\nPhone Number: "+phone+"\nEmail ID: "+emailId);
}