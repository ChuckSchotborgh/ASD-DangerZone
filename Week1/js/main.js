/* 
Chuck Schotborgh ASD 07/2012 project 1
*/
//CRUD Read/Write Getters

$('#home').live('pageinit'),

$('displayLink'.live('click', function getData() {
                     ToggleControls("on");
                     
//looping the index to populate the local storage get item object chain values
    for(var i=0, len = localStorage.length; i < len; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
            value = value.split(',');

        var toggle 		= value[0];
        var firstName 	= value[1];
        var lastName 	= value[2];
        var email 		= value[3];
        var gesture 	= value[4];
        var tone 		= value[5];
        var sex 		= value[6];
        var fav 		= value[7];
        var date 		= value[8];
        var textArea    = value[9];
    

//DOM createElement("div"); 
    console.log("fofList ID: "+key);

// Image match index to populate local storage images
        var gestureImage = "non-scenerio.png";
    
    if(gesture == "pin-head"){ 
        gestureImage = "pin.png"; 
    }
    if(gesture == "dweeb"){ 
        gestureImage = "dweeb.png";
    }
    if(gesture == "bone-head"){ 
        gestureImage = "bone.png"; 
    }
    if(gesture == "loser"){ 
        gestureImage = "loser.png";
    }
    if(gesture == "butt-head"){ 
        gestureImage = "butt.png"; 
    }
    if(gesture == "jack-hole"){ 
        gestureImage = "jack.png"; 
    }

// CRUD Read/Write append chain to Html Display Blocks & Swap within form
$('#fofList').append($('<h2>').text(value[0]))
    .append($('<p>').html("<strong>	Person Type:</strong>" 	+ value[0]))
    .append($('<p>').html("<strong>	First Name:	</strong>" 	+ 
                          "<strong>	Last Name: 	</strong>"	+ value[1]))
    .append($('<p>').html("<strong>	Email:		</strong>" 	+ value[2]))
    .append($('<p>').html("<strong>	Gesture:	</strong>" 	+ value[3]))
    .append($('<p>').html("<strong>	Tone:		</strong>" 	+ value[4]))
    .append($('<p>').html("<strong>	Sex:		</strong>" 	+ value[5]))
    .append($('<p>').html("<strong>	Tag Posted:	</strong>" 	+ value[6]))
    .append($('<p>').html("<strong>	Date:		</strong>" 	+ value[7]))
    .append($('<p>').html("<strong>	Text Message:</strong>" + value[8]))

// CRUD Read/Write Default Local Storage Controls creating dynamic Buttons on the fly
    .append($('<img>').attr("src", "images/"+gestureImage)
        .attr("alt", ""))

    .append($('<p>') .text(" "))

    .append($("<a>").attr("href","#")
        .attr("onclick","delete Item(" + key + ");")
        .attr("data-role","button")
        .attr("data-icon","delete")
        .text("Delete")
        .attr("data-theme","e")
        .attr("data-inline","true"))
  
    .append($("<a>").attr("href","#")
        .attr("onclick","editItem(" + key + ");")
        .attr("data-role","button")
        .attr("data-icon","gear")
        .text("Edit Info")
        .attr("data-theme","b")
        .attr("data-inline","true")
    );
}

    if(localStorage.getItem('fofList')){
        var clearLink = $('#clear').css('display','block');
    }else{
        var firstName 	= "";
        var lastName 	= "";
        var email 		= "";
        var gesture 	= "";
        var firstName 	= $('#firstName').val(firstName);
        var lastName 	= $('#lastName') .val(lastName);
        var email 		= $('#email')	 .val(email);
        var gesture 	= $('#gesture')	 .val(gesture);
        }
    }

// CRUD Update by saving items

$(('#submit').live('click', function saveItems("id") {
        var today = new Date();
        var key	= (today.getTime());
        var toggle 		= $('#firstName').val();
        var firstName 	= $('#firstName').val();
        var lastName 	= $('#lastName') .val();
        var email 		= $('#email')	 .val();
        var gesture 	= $('#gesture')	 .val();
        var tone 		= $('#tone')	 .val();
        var textArea	= $('#textArea') .val();
        
// Checking user Selection on Buttons Male or Female Choice
    if($('#male').attr('checked')){
        var sex = "Male"
    }else{
        var sex = "Female"
    }

//Checking if  Post to Social Networks is on
        var fav         = $('#fav:checked').val();
    if(fav == "on"){
        var fav = "Yes"
    }else{
        var fav = "No"
    }
    
        var date = $('#date').val();
        var textArea = $('#textArea').val();
    
// Form Array for AddItem to set in Local Storage
        var addItem = [
            toggle,
            firstName,
            lastName,
            email,
            gesture,
            tone,
            sex,
            fav,
            date,
            textArea
        ];
    localStorage.setItem(key, addItem);
    location.reload();
    alert("Your Information was saved!");
});

        function toggleControls(n) {
            switch (n) {
            case "on":
                $('#contactForm').css('display', 'none');
                $('#clearLink').css('display', 'inline');
                break;
            case "off":
                $('#contactForm').css('display', 'block');
                $('#clearLink').css('display','none');
                $('#displayLink').css('display','inline');
                $('#addNew').css('display','none');
                $('#items').css('display','none');
                break;
            default:
                return false;
            }
        }


//Declareing the values coming from the form
        var toggle 	    = value[0];
        var firstName 	= value[1];
        var lastName 	= value[2];
        var email 		= value[3];
        var gesture 	= value[4];
        var tone 		= value[5];
        var sex 		= value[6];
        var fav 		= value[7];
        var date 		= value[8];
        var textArea	= value[9];
        
// CRUD Update continued - Edit items in the Object for local Storage
function editItem(id){
        alert("Loading Forgiveness list ID: "+id);
    
        var itemId = id;
        var value = localStorage.getItem(itemId);
        value = value.split(',');


// Console log to peek in Fire Bug or stubbing to grab a handle
        console.log(itemId);

// Passing the values
        $('#firstName')	.val(firstName);
        $('#lastName')	.val(lastName);
        $('#email')		.val(email);
        $('#gesture')	.val(gesture);
        $('#tone')		.val(tone);
        
// Selecting toggle of radio button for gender      
    if(sex == "Male"){
        $('#male')      .attr('checked', 'checked');
    }else{
        $('#female')    .attr('checked', 'checked');
    }
// Checking to post data on Social networks
    if(fav== "Yes"){
        $('#fav').attr('checked', 'checked');
    }
        $('#date')	    .val(data);
        $('#textArea')	.val(textArea);
        
// show edit item button, hide submit button
        var editItem = $('#edit-item-btns').css('display', 'block');
        var editSubmit = $('#submit-reset-btns').css('display', 'none');

// When clicking editItem button
function clickEdit(){
        var toggle = $('#toggle').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var gesture = $('#gesture').val();
        var tone= $('#tone').val();
    if(tone== "on"){
        var fav= "Yes"
    }else{
        var fav= "No"
    }
    if($('#male').attr('checked')){
        var sex = "Male"
    }else{
        var sex = "Female"
    }
        var date = $('#date').val();
        var textArea = $('#textArea').val();
        var allItems = [
            toggle,
            firstName,
            lastName,
            email,
            gesture,
            tone,
            sex,
            fav,
            date,
            textArea
        ];
    if(toggle != "" && toggle != "toggle" && firstName != ""){
        localStorage.setItem(itemId, allItems);
    alert("Local Storage Profile Updated!");
        location.reload();
    }else{
        alert("Last Name and First Name fields are required.");
    }
    };
    
        $('#edit-item').bind('click', clickEdit);
    }
    
    // Deletes items from local storage
function deleteItem(id){
        var ask = confirm("Are you sure you want to delete?");
    if(ask){
        localStorage.removeItem(id);
        window.location.reload();
    }else{
        alert("Profile not removed.");
    }
    }
    
    // Clears items in local storage
function clearItems(){
    localStorage.clear();
    return false;
    }
    
    // Validation Brute Force Local Storage Profile Updated!
        $('#submit').bind('click', function(){
        var getFirstName = $('#firstName').val();
        var getLastName = $('#lastName').val();
        var getTextArea = $('#textArea').val();
    
    if(getFirstName == ""){
        $('#firstName').css('border', '2px solid red');
    return false;
    }
    if(getLastName == ""){
        $('#lastName').css('border', '2px solid red');
    return false;
    }
    if(getTextArea == ""){
        $('#textArea').css('border', '2px solid red');
    return false;
    }else{
        $('#firstName').css('border', '3px solid #fff');
        $('#lastName').css('border', '3px solid #fff');
        $('#textArea').css('border', '3px solid #eee');
        alert("Friend or Foe Gesture has been stored.");
        saveItems();
    
        }
    });
    
function clickRemove(thisSpace, placeHolderText) {
    if (thisSpace.value == placeHolderText) {
        thisSpace.value = "";
    }
    }
    
function clickRefresh(thisSpace, placeHolderText) {
    if (thisSpace.value == "") {
        thisSpace.value = placeHolderText;
        }
    }



$('form').submit(function() {
    alert($.toJSON($('form').serializeObject()));
    return false;
});



    
    