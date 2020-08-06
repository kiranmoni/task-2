function getjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if (xhr.readyState === 4 && xhr.status =="200") {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
getjson("data.json",function(text) {
	var data =JSON.parse(text)
	console.log(data.details);
	mydetails(data.details)
})

var parent = document.querySelector(".card")

function mydetails(Res){
	var name=document.createElement("p");
	name.classList.add("name");
	name.setAttribute("id","name");
	name.textContent=Res.name;
	parent.appendChild(name);  

	var roll=document.createElement("p");
	roll.classList.add("roll");
	roll.textContent=Res.roll;
	parent.appendChild(roll);  

	var email=document.createElement("p");
	email.classList.add("mail");
	email.textContent=Res.email;
	parent.appendChild(email);  

	var phone=document.createElement("p");
	phone.classList.add("phone");
	phone.textContent=Res.phone;
	parent.appendChild(phone);

	var adress=document.createElement("p");
	adress.classList.add("adress");
	adress.textContent=Res.adress;
	parent.appendChild(adress);
	

}