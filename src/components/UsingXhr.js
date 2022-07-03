//import { page } from './page.json';

const UsingXhr = (props) =>{

    const myf = () => {
    var xmlhttp = new XMLHttpRequest();
    var url = "page.json";

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
    }
}

    // const reqListener = () => {
    //     console.log(this.responseText);
    // }
      
    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener("load", reqListener);
    // oReq.open("GET", "http://www.example.org/example.txt");
    // oReq.send();
    // oReq.reqListener();

    // const myf = () =>{
    //     // document.getElementById('demo').innerHTML=" ";
    //     let x=document.getElementById('demo');
    //     // document.getElementById('demo').innerHTML="kkkkkkkkkk";
    //     if(x){
    //     x.innerHTML = Date();
    //     }
    // }
    return (
        <div>
            <div id="id01"></div>
            <p id="demo"> here !! </p>
            <button onClick={myf()}>Click me to display Date and Time.</button>
        </div>
    )
}
export default UsingXhr;