alert("Your Array is Empty Please Enter Your Data..!!")
{

  let data = [];

  let num;

  function push_() {
    if (data == "") {
      alert("Array is Empty...");
      num = prompt("enter the data");
      data.push(num);
      document.getElementById("text").innerHTML = data;
    } else {
      num = prompt("enter the data");
      data.push(num);
      document.getElementById("text").innerHTML = data;
    }
  }

  function pop_() {
    if (data == "") {
      alert("Array is Empty...");
    } else {
      data.pop();
      document.getElementById("text").innerHTML = data;
    }
  }

  function firstadd(){
    if(data == ""){
      alert("Array is Empty...");
    }else{
      num = prompt("enter the data");
      data.unshift(num)
      document.getElementById("text").innerHTML = data;
    }
  }

  function firstdelete(){
    if(data == ""){
      alert("Array is Empty...");
    }else{
      data.shift()
      document.getElementById("text").innerHTML = data;
    }
  }

  function sort(){
    if(data == ""){
      alert("Array is Empty...");
    }else{
      data.sort((a,b) => a-b);
      document.getElementById("text").innerHTML = data;
    }
  }

}
