    function get_languages(){
    $.ajax({
            	url: "https://cors-anywhere.herokuapp.com/https://run.iomirea.ml/api/v0/languages",
            	type: "GET",
            	contentType:"text/plain; charset=utf-8",
            	dataType: "json"
            }).done(function(data) {
		for (var i = 0; i < data.length; i++) {	
			var newOption = new Option(data[i].name, data[i].name);
			document.getElementById("select_language").options[document.getElementById("select_language").options.length] = newOption;
		}
		document.getElementById("select_language").options[2].selected = true;
		change_language();
            }).fail(function(data) {
            });
    }

    function change_language(){

	    var new_language, language;
	    var selected = document.getElementById("select_language").options.selectedIndex;
	    new_language = document.getElementById("select_language").options[selected].value;
	    new_language = new_language.replace(/[”]/g, '');
	    language = new_language;

	    switch(language) {
	            case "c":
	            language = "c_cpp"
	            break;
	            case "cpp":
	            language = "c_cpp"
	            break;
	            case "c-clang":
	            language = "c_cpp"
	            break;
	            case "node":
	            language = "javascript"
	            break;
		    case "asm":
	            language = "assembly_x86"
	            break;
	    }

	    $.ajax({
            	url: "https://cors-anywhere.herokuapp.com/https://run.iomirea.ml/api/v0/languages/" + new_language,
            	type: "GET",
            	contentType:"text/plain; charset=utf-8",
            	dataType: "json"
            }).done(function(data) {
		editor.selectAll();
		editor.removeLines();
		editor.insert(data.example);
		var mode_path = "ace/mode/" + language;
	     	editor.getSession().setMode({
	          path: mode_path,
			v: Date.now() 
		})
            }).fail(function(data) {
            });
	}