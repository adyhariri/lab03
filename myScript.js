alert('hello and welcome to my page');

var fName = prompt("what is your name ?","inter your name here");
var major = prompt("what is your major?","like civil engineering");
var state = prompt("are you still student?","answer with yes/no");
while(state !=='yes'&&state!=='no'){
    state = prompt('please inter yes/no with small letters');
}
if (state == 'yes')
{
    alert('hope you will graduate soon');
    document.write("<img src="+"https://banner2.cleanpng.com/20180329/tcw/kisspng-building-university-college-computer-icons-college-5abd2217091916.4056148915223444710373.jpg"+">");
}
else{
    alert('great!');
    document.write("<img src="+"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7D34I4xw4mLFm9Nde3dG9jCYXzrRBU69srQ&usqp=CAU"+">");
    var ltuc = prompt("are you registering now with abdalaziez college scolarship ?","please answer with yes/no");
    if(ltuc=='yes'){
        var rate = prompt("What star rating would you give, 1-5?");
        for (var i=1;i<=rate;i++){
            document.write("<img src="+"https://png.pngtree.com/png-clipart/20191017/ourlarge/pngtree-3d-yellow-star-icon-png-image_1772864.jpg"+" width="+"150"+" height="+"150"+">");
        }
    }
    else {
        alert('you should register with it');
        document.write("<p> since you are already graduated from university it will be great to get ltuc scolarship</p>");
    } 

}

alert ('thank you for visiting my page i know now some informations about you like , your name is ' + fName + ',your major is ' + major + ', if you still student is ' + state + ' and if you rigester with scholarship is ' + ltuc);