//your JS code here. If required.
alertbox1(){
	var fName=document.getElementByName('First Name').value;
	var LName=document.getElementByName('Last Name').value;
	var phone=document.getElementByName('Phone Number').value;
	var emailId=document.getElementByName('Email ID').value;
	alert("First Name: "+fName+"\nLast Name: "+LName
		  +"\nPhone Number: "+phone+"\nEmail ID: "+emailId);
}