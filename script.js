const shift = 3;

function letterToNumber(letter)
{
return letter.charCodeAt(0) - 65;
}

function numberToLetter(number)
{
return String.fromCharCode(number + 65);
}



function encryptText()
{

const text =
document.getElementById("plaintext").value.toUpperCase();

if(!/^[A-Z]+$/.test(text))
{

alert("Use A-Z only");
return;

}


let table = `

<table>

<tr>

<th>Letter</th>
<th>Number</th>
<th>+3</th>
<th>Mod 26</th>
<th>Cipher</th>

</tr>

`;


let final = "";


for(let letter of text)
{

let num = letterToNumber(letter);

let add = num + shift;

let mod = add % 26;

let cipher = numberToLetter(mod);

final += cipher;


table += `

<tr>

<td>${letter}</td>

<td>${num}</td>

<td>${add}</td>

<td>${mod}</td>

<td>${cipher}</td>

</tr>

`;

}


table += "</table>";


document.getElementById("result").innerHTML = table;

document.getElementById("finalResult").innerHTML = final;


}




function decryptText()
{

const text =
document.getElementById("plaintext").value.toUpperCase();


let result = "";


for(let letter of text)
{

let num = letterToNumber(letter);

let mod = (num - shift + 26) % 26;

result += numberToLetter(mod);

}


document.getElementById("finalResult").innerHTML = result;

document.getElementById("result").innerHTML = "";

}
