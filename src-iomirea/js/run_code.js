    function run() {
        
        var language;
        language = document.getElementById("select_language").value;
        language = language.replace(/[”]/g, '');
        document.getElementById("wait").innerHTML="Wait...";
        
        var to_compile = {
            "code": editor.getValue()
        };
        console.log(language);
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://run.iomirea.ml/api/v0/languages/" + language,
            type: "POST",
	    headers: {
        	'X-Requested-With':'XMLHttpRequest',
    	    },
            data: JSON.stringify(to_compile),
            contentType:"text/plain; charset=utf-8",
            dataType: "json",
        }).done(function(data) {
            document.getElementById("wait").innerHTML="";
            document.getElementById("stdout").innerHTML="" + data.stdout;
            document.getElementById("stderr").innerHTML="STDERR: " + data.stderr;
            document.getElementById("exit_code").innerHTML="EXIT_CODE: " + data.exit_code;
            document.getElementById("exec_time").innerHTML="EXEC_TIME: " + data.exec_time;
        }).fail(function(data) {
	    document.getElementById("wait").innerHTML = "Error " + data.responseJSON.message;
        });
    };