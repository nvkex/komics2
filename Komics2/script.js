var modeFlag = 0;

	function switchModes(){

		var x = document.getElementById("hdr");//Header
		var y = document.getElementsByClassName("hdr-contnt");//Header Contents
		var z = document.getElementsByClassName("caption");//Captions
		var f = document.getElementById("formDiv");//signup|login

		//switch to dark
		if(modeFlag == 0){

			modeFlag = 1;

			//Mode Button
			document.getElementById("swButton").innerHTML = "Light Mode";

			//Header
			x.style.backgroundColor = "#737373";

			//body
			document.body.style.backgroundColor = "#262626";

			//Header Contents
			var i = 0;
			while(y[i] != null){
				y[i].style.color = "black";
				i++;
		    }

			//Index Captions
			i =0;
			while(z[i] != null){
				z[i].style.backgroundColor = "#737373";
				//z[i].style.color = "#008ae6";
				i++;
			}

			//Signup|Login page elements
			f.style.backgroundColor = "#737373";
			//f.style.boxShadow = "0 4px 8px 0 rgba(115, 115, 115, 0.2), 0 6px 20px 0 rgba(115, 115, 115, 0.19)";
			document.getElementById("tp").style.color = "white";

		}
		else{//switch to light

			modeFlag = 0;
			
			//Mode Button
			document.getElementById("swButton").innerHTML = "Dark Mode";

			//Header
			x.style.backgroundColor = "#00664d";

			//body
			document.body.style.backgroundColor = "#e6e6e6";

			//index elements
			var i =0;
			while(z[i] != null){
				z[i].style.backgroundColor = "#008ae6";
				//z[i].style.color = "white";
				i++;
			}

			//Header Contents
			i = 0;
			while(y[i] != null){
				y[i].style.color = "white";
				i++;
		    }

		    //Signup Elements
		    f.style.backgroundColor = "white";
			f.style.boxShadow = "1px 1px 10px 0px rgba(0, 0, 0, 0.2), 1px 1px 10px 0px rgba(0, 0, 0, 0.19)";
			document.getElementById("tp").style.color = "black";
		}

		//error message
		var pass = document.getElementById("pass").value;
		var cpass = document.getElementById("cpass").value;
		var err = document.getElementById("errMsg");

		if(pass == cpass)
			err.color = "white";
		else
			err.color = "black";
	}

	function cnfPass(){
		var pass = document.getElementById("pass").value;
		var cpass = document.getElementById("cpass").value;
		var err = document.getElementById("errMsg");

		if(pass != cpass){
			err.innerHTML = "*Password doesn't match!";

			if(modeFlag == 0)//light
				err.style.color = "red";
			else//dark
				err.style.color = "black";
		}
		else{
			err.innerHTML = "*OK!";

			if(modeFlag == 0)//light
				err.style.color = "green";
			else//dark
				err.style.color = "white";
		}
		if(pass == ""){
			err.innerHTML = "*Please enter a valid password!";
			
			if(modeFlag == 0)//light
				err.style.color = "red";
			else//dark
				err.style.color = "black";
		}
	}