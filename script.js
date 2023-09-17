// delet logic
let copy =(text)=>{
    navigator.clipboard.writeText(text).then(
        () => {
        //   alert("sucssesfully copy "+text)
      
        document.querySelector('.hid').classList.remove('hid');
        setTimeout(() => {

           document.getElementById('cs').style.display="none";
        }, 1000);
        },
        () => {
        //   alert("fail"+text)
        },
      );
    
      }

    //   we want see password like * so function are..
   let  starlikePassword=(pass)=>{
   let str = "";
   for (let i = 0; i < pass.length; i++) {
    
    str+="*";
   }
   return str;
    }
let deletPassword=(website)=>{
    let data = localStorage.getItem("passwordstor")
    let arr = JSON.parse(data);
    // stored array update after deletin on one..
    arrupdata  = arr.filter((e)=>{
        return e.website!=website;
    })
    localStorage.setItem("passwordstor",JSON.stringify(arrupdata));
   showpassword();
}
//  copy logic..

// for seeing data we nedd to load page to remove this we wrap it in function...... showpassword()
// ADDING loginc to fill table rows
let showpassword=()=>{
let tb = document.getElementById("tb"); 
//geting data from local storage 
let data =localStorage.getItem("passwordstor");
if(data==null){
    tb.innerHTML = "no data available";
}
else{
    tb.innerHTML = ` <tr>
    <th>WEBSITE </th>
    <th>EMAIL/PHONE NO</th>
    <th>PASSWORD</th>
    <th>DELETE</th>
</tr>` // we add defoult hear becouse the render same+new if we add new some thing in tabel... for removing this we add that
let arr = JSON.parse(data);
let str = "";
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    


str+=` <tr>
<td>${element.website} <button onclick="copy('${element.website}')"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z"></path></svg></button></td>

<td>${element.username} <button onclick="copy('${element.username}')">  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z"></path></svg></button></td>

<td>${starlikePassword(element.password)} <button onclick="copy('${element.password}')"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z"></path></svg></button></td>


<td><button onclick="deletPassword('${element.website}')" >  <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg> </button> </td>
</tr>`

}
tb.innerHTML = tb.innerHTML+str;

}
website.value = ""
username.value =""
password.value =""
}

showpassword();

document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault(); // page no submit or it not relode if i clike over btn
    
    // for geting values by clike over btn
    let username = document.getElementById('username');
    let password = document.getElementById('password')
    console.log(username.value,password.value);

    //  storing password...
    let passwordstor = localStorage.getItem("passwordstor");
    if (passwordstor==null){
        // then bulit a array and storing in which 
        let arr = [];
        arr.push({website:website.value,username:username.value,userPassword:password.value}) // adding in array...
       
        localStorage.setItem("passwordstor",JSON.stringify(arr)); // for geinting in form of object..
    }
    else{
        // if have the also add in which
        let arr = JSON.parse(localStorage.getItem("passwordstor"))
         arr.push({website:website.value,username:username.value,password:password.value}) // adding in array...
        // alert("password saveved...");
        localStorage.setItem("passwordstor",JSON.stringify(arr));
    }
   
    showpassword();
   
})

