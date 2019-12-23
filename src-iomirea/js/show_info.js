check = 'closed';
	function showinfo(){
		var info = document.getElementById('info');
		var editor = document.getElementById('editor');
		var infoname = info.className;
		var bm = document.getElementById('bm');
		if(check=="closed"){
			check = "open";
			info.className = infoname[0]+infoname[1]+infoname[2]+infoname[3];
			editor.classList.remove("ed1");
			editor.classList.add("ed2");
			bm.classList.add("second2");
		}else{
			check = "closed";
			info.className = infoname+" h";
			editor.classList.remove("ed2");
			editor.classList.add("ed1");
			bm.classList.remove("second2");			
		}
	}