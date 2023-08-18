let btn =document.querySelector("button");
function bmi(){
  let wet =document.getElementById("wet").value;      
  let het =document.getElementById("het").value;
  let result = document.getElementById("op");
  let comment = document.getElementById("comment");
  
  
  if (wet ==""){
      console.log("enter valid weight");
    } else if (het ==" "){
        console.log("enter valid height")
    }else {
        let bmi = wet/(het**2);
        let res = String(bmi).slice(0 , 5);
        console.log(res)
        result.innerHTML = res;


        if (bmi < 18.6) comment.innerHTML =
            `Under Weight  `;
 
        else if (bmi >= 18.6 && bmi < 24.9)
            comment.innerHTML =
                `Normal `;
 
        else comment.innerHTML =
            `Over Weight  `;

    }


}