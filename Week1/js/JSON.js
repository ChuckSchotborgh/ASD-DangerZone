//JSON listview parser sample
$('#json-button').bind('click', function(){
	$('#formList').empty();
	$.ajax({
		url: 'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
        	for (var i=0, j=response.forgivePosts.length; i<j; i++){
				var jsonVal = response.forgivePosts[i];
				$(''+
					'<div class="forgivePosts">'+
						'<h3>'+ jsonVal.firstName +'</h3>'+
						'<p>Date Visited: '+ jsonVal.date +'</p>'+
						'<p>email: '+ jsonVal.email +'</p>' +
						'<p>Type: '+ jsonVal.gesture +'</p>'+
						'<p>tone: '+ jsonVal.tone +'</p>'+
						'<p>fav: '+ jsonVal.fav +'</p>'+
						'<p>img Code: '+ jsonVal.img +'</p>'+
						'<p>textArea: '+ jsonVal.textArea +'</p>'+
					'</div>'
				).appendTo('#formList');
				console.log(response);
			}
		}
	});
	return false;
});

// XML listview parser sample
$('#xml-button').bind('click', function(){
	$('#formList').empty();
	$.ajax({
		url: 'xhr/data.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(xml){
			$(xml).find("forgivePosts").each(function(){
				
   				var firstName = $(this).find('firstName').text();
   				var date = $(this).find('date').text();
   				var email = $(this).find('email').text();
   				var gesture = $(this).find('gesture').text();
   				var tone = $(this).find('tone').text();
   				var fav = $(this).find('fav').text();
   				var img = $(this).find('img').text();
   				var textArea = $(this).find('textArea').text();
    			
				var actionString = $(''+'<div class="forgivePosts" id="formList"'+
						'<h3>'+ firstName +'</h3>'+
						'<p>Date Visited: '+ date +'</p>'+
						'<p>email: '+ email +'</p>'+
						'<p>Type: '+ gesture +'</p>'+
						'<p>tone: '+ tone +'</p>'+
						'<p>fav: '+ fav +'</p>'+
						'<li>img Code: '+ img +'</li>'+
						'<p>textArea: '+ textArea +'</p>'+
						'</div>').appendTo
							('#formList');
						
						 $('#formList').collapsibleset
						('refresh');
					  	
							
					var key = Math.floor
						(Math.random()*10000001);
						
						localStorage.setItem
							(key, JSON.stringify(actionString));
					});
				}
			}); 
		});

//CSV listview parser sample
$('#csv-button').bind('click', function(){
	$('#formList').empty();
	 $.ajax({
        type: "GET",
        url: "xhr/data.csv",
        dataType: "text",
        success: function(data) {
        	var allTextLines = data.split(/\r\n|\n/);
    		var headers = allTextLines[0].split(',');
    		var lines = []; // main array 

			for (var i=1; i<allTextLines.length; i++) {
				var data = allTextLines[i].split(',');
				if (data.length == headers.length) {
					var allforgivePosts = []; // blank array 

					for (var j=0; j<headers.length; j++) {
						allforgivePosts.push(data[j]); 
					}
					lines.push(allforgivePosts); 
				}

			}

			for (var l=0; l<lines.length; l++){
				var forgivePosts = lines[l];
			$(''+
					'<div class="forgivePosts">'+
						'<h3>'+ forgivePosts[0] +'</h3>'+
						'<p>Date: '+ forgivePosts[1] +'</p>'+
						'<p>Date: '+ forgivePosts[2] +'</p>'+
						'<p>Category: '+ forgivePosts[3] +'</p>'+
						'<p>Featured: '+ forgivePosts[4] +'</p>'+
						'<p>Responses: '+ forgivePosts[5] +'</p>'+
						'<p>Notes: '+ forgivePosts[6] +'</p>'+
						'<p>Notes: '+ forgivePosts[7] +'</p>'+
					'</div>'
				).appendTo('#formList');
			console.log(lines);	
			}
        }
	});
	return false;
});	

