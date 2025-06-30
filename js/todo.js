 let inputs = document.getElementById("inputs");
        let text = document.querySelector(".text");       

    function Add(){
        if(inputs.value == ""){
            alert("add task");
        }else{
          let newEle = document.createElement("li");
            newEle.innerHTML= inputs.value;
            text.appendChild(newEle);
            let button = document.createElement("button");
            button.innerHTML = "Delete";
            newEle.appendChild(button);
        }
        inputs.value="";
        Save();
    }

    text.addEventListener("click", function(e){
        if(e.target.tagName === "BUTTON"){
            e.target.parentElement.remove();
            Save();
        }
    },false);

    function Save(){
        localStorage.setItem("data" , text.innerHTML);
    }

    function Show(){
        text.innerHTML = localStorage.getItem("data");
    }
    Show();

