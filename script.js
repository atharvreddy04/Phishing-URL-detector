function checkURL(){

let url = document.getElementById("urlInput").value;
let result = document.getElementById("result");

let suspiciousWords = [
"login",
"verify",
"secure",
"account",
"update",
"banking"
];

let phishing = false;

for(let word of suspiciousWords){
if(url.includes(word)){
phishing = true;
}
}

if(url.includes("@") || url.includes("-") || phishing){

result.innerHTML = "⚠️ Warning: This URL might be a Phishing Website";
result.style.color = "red";

}
else{

result.innerHTML = "✅ This URL looks Safe";
result.style.color = "green";

}

}