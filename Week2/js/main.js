// CHUCK SCHOTBORGH ASD-y12m10- ADVANCED SCALABLE DATA INFASTRUCTURES

// INITIATING THE PAGE + TURNING OFF THE AJAX \\________________________________

        $(document).bind
            ("mobileinit", function(){
        
        $.mobile.ajaxLinksEnabled=false;
    
        });

// PASSING THE VALUE \\_________________________________________________________

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace
            (/[?&]+([^=&]+)=([^&]*)/gi,function (m,key,value) {
            vars[key] = value;
        });
            
        return vars;
    }

// VIEW AND CREATE POST ID \\___________________________________________________

    var forgiveIncidents = ["--Make A Private Incident--",
                                "Famous Quotes",
                                "Relationships",
                                "Tools"
                            ];

    var postID= getUrlVars()["postID"];
    var category = getUrlVars()["cat"];

        $('#viewForgivePost').on
            ('pagehide', function (event) {
            
        $('#viewForgivePost #content').remove();
    
    });

        $('#viewForgivePost').on
            ('pageshow', function (event) {
            
        $('<div></div>').attr
            ('id', 'content').appendTo
            ('#viewForgivePost').trigger
                ('create');

// PARSING OBJECTS TO JSON \\___________________________________________________

    var postID= getUrlVars()["postID"];
    var category = getUrlVars()["cat"];
    var value = localStorage.getItem(postID);
    var obj = JSON.parse(value);

        $('<div></div>').addClass
            ('postprivate-container ui-btn ui-li ui-corner-top ui-corner-bottom ui-btn-up-c'+postID).appendTo
            ('#viewForgivePost #content');

    if (category === "Burns") {
        for(var n in obj) {
            
        $('<p></p>').addClass
            ('item-details '+postID+' '+obj[n][0]).appendTo
            ('div.'+postID);
        
    var optAltRemark = "<strong> "+obj[n][0]+"  </strong>"+obj[n][1];
        
        $('p:last').html
            (optAltRemark);
        
        }
    
    } else if (category === "blastoffs" || category === "devcons") {
        for(var m in obj) {
        
        $('<p></p>').addClass
            ('item-details '+postID).appendTo
            ('div.'+postID);
        
    }
}
    


});
        $('div[data-role="page"]').on
            ('pageshow', function (event) {
        
    if (localStorage.length > 0){
            
        $('#getListButton').hide();
            
    } else {
            
        $('#getListButton').show();
    }
});
            
// BURN NOTICE BUTTON \\________________________________________________________

        $('#Burns').on 
            ('pageinit', function (event) {
                
                localStorage.clear();

        $("#loaded-burns").on
            ("click", function () {

        $('#getListButton').hide();
        
// BURN NOTICE AJAX PARSER --JSON-- \\__________________________________________

    $.ajax({
        url: 'js/xhr/burns.json',
        type: 'GET',
        dataType: 'json',
        success: function (actionData) {
                
                for (var i=0, j=actionData.actions.length; i<j; i++) {
                    var jsonData = actionData.actions [i];
                    
                    var key = Math.floor
                        (Math.random()*10000001);
                        
                        localStorage.setItem
                            (key, JSON.stringify
                                (actionData.actions [i]));
                }
                getLocalData('Burns');
                
                $('#action-list').listview();
                
                $('#action-list').listview('refresh');
                
                }
            });
        });
    });

// BLASTOFF NOTICE LIST VIEW BUTTON \\__________________________________________
    
        $('#blast-off').on
            ('pageinit', function (event) {
                
                localStorage.clear();
        
        $("#loaded-blastoff").on
            ("click", function () {
    
        $('#blast-off #getListButton').hide();
        
// BLASTOFF AJAX PARSER --XML-- \\______________________________________________

        $.ajax({
            url: 'js/xhr/blastoffs.xml',
            type: 'GET',
            dataType: 'xml',
            success: function (actionData) {
        
                $(actionData).find("actions").each(function(){
                        
// FIELD DECLARATIONS PASSING  <XML> TAGS TO THE DOM\\__________________________
            
                    var name         =     $(this).find    ('name')          .text();
                    var friend       =     $(this).find    ('friend')        .text();
                    var remarks      =     $(this).find    ('action')        .text();
                    var email        =     $(this).find    ('email')         .text();
                    var date         =     $(this).find    ('date')          .text();
                    var incident     =     $(this).find    ('incident')      .text();
                    var genre        =     $(this).find    ('genre')         .text();
                    var website      =     $(this).find    ('website')       .text();
                    var socials      =     $(this).find    ('socials')       .text();
                    var length       =     $(this).find    ('length')        .text();
            
                    
// CREATE TAGS TO THE DOM \\____________________________________________________
                    
                    var actionString = $('<div data-role="collapsible" data-theme="c">' +
                      '<h3>' + name + '</h3>' +
                      '<p>    <strong>  Friend:      </strong>     ' + friend +       '</p>' +
                      '<p>    <strong>  Email:       </strong>     ' + email +        '</p>' +
                      '<p>    <strong>  Remarks:     </strong>     ' + text +         '</p>' +           
                      '<p>    <strong>  Date:        </strong>     ' + date +         '</p>' +
                      '<p>    <strong>  Incidents:   </strong>     ' + incident +     '</p>' +
                      '<p>    <strong>  Genre:       </strong>     ' + genre +        '</p>' +
                      '<p>    <strong>  Website:     </strong>     ' + website +      '</p>' +
                      '<p>    <strong>  Socials:     </strong>     ' + socials +      '</p>' +
                      '<p>    <strong>  Length:      </strong>     ' + length +       '</p>' +
                      '</div>').appendTo
                        ('#blast-off #blast-off-action-list');
                    
                      $('#blast-off #blast-off-action-list').collapsibleset
                        ('refresh');
                      
                    var key = Math.floor
                        (Math.random()*10000001);
                        
                        localStorage.setItem
                            (key, JSON.stringify(actionString));
                    });
                }
            }); 
        });
    });

// DEVCON 5 NOTICE LIST VIEW BUTTON \\__________________________________________

        $("#devcon").on
            ('pageinit', function (event) {
                
                localStorage.clear();
        
        $("#loaded-devcon").on
            ("click", function () {
        
        $('#devcon #getListButton').hide();
        
// DEVCON 5 AJAX PARSER --XML-- \\______________________________________________

    $.ajax({
        url: 'js/xhr/devcons.xml',
        type: 'GET',
        dataType: 'xml',
        success: function (actionData) {
                
                $(actionData).find
                    ("actions").each
                        (function(){
                    
// FIELD DECLARATIONS PASSING  <XML> TAGS TO THE DOM\\__________________________
            
                    var name         =     $(this).find    ('name')           .text();
                    var friend       =     $(this).find    ('friend')         .text();
                    var email        =     $(this).find    ('email')          .text();
                    var remarks      =     $(this).find    ('action')         .text();
                    var date         =     $(this).find    ('date')           .text();
                    var incident     =     $(this).find    ('incident')       .text();
                    var genre        =     $(this).find    ('genre')          .text();
                    var website      =     $(this).find    ('website')        .text();
                    var socials      =     $(this).find    ('socials')        .text();
                    var length       =     $(this).find    ('length')         .text();
                    
                    
// CREATE TAGS TO THE DOM \\____________________________________________________
                    
                    var actionString = $('<div data-role="collapsible" data-theme="c">' +
                      '<h3>' + name + '</h3>' +
                      '<p>    <strong>  Friend:      </strong>     ' + friend +       '</p>' +
                      '<p>    <strong>  Email:       </strong>     ' + email +        '</p>' +
                      '<p>    <strong>  Date:        </strong>     ' + date +         '</p>' +
                      '<p>    <strong>  Incidents:   </strong>     ' + incident +     '</p>' +
                      '<p>    <strong>  Genre:       </strong>     ' + genre +        '</p>' +
                      '<p>    <strong>  Website:     </strong>     ' + website +      '</p>' +
                      '<p>    <strong>  Socials:     </strong>     ' + socials +      '</p>' +
                      '<p>    <strong>  Length:      </strong>     ' + length +       '</p>' +
                      '<p>    <strong>  Remarks:     </strong>     ' + text +         '</p>' +
                      '</div>').appendTo
                        ('#devcon #devcon-action-list');
                      
                      $('#devcon #devcon-action-list').collapsibleset
                        ('refresh');
                    
                    var key = Math.floor
                        (Math.random()*10000001);
                        
                        localStorage.setItem
                            (key, JSON.stringify(actionString));
                    });
                }
            }); 
        });
    });

// BOMBS AWAY NOTICE LIST VIEW BUTTON \\________________________________________

        $('#bombs-away').on
            ('pageinit', function (event) {
                
                localStorage.clear();
            
        $("#load-bombs").on("click", function () {
    
        $('#bombs-away #getListButton').hide();
        
// BOMBS AWAY AJAX PARSER --CSV-- \\____________________________________________

    $.ajax({
        url: 'js/xhr/bombs.csv',
        type: 'GET',
        dataType: 'csv',
        success: function (actions) {
               
                    var text = [];
                    var csvData = actions.split(/[\r\n]+/);
                    var firstLine = csvData[0].split('|');
                    
// BOMBS AWAY FOR LOOP AJAX PARSER --CSV-- \\___________________________________

                for (var i=1; i<csvData.length; i++) {
                    var data = csvData[i].split('|');
                        
                    if (data.length == firstLine.length) {
                        var actionList = []; 
                         
                        for (var j=0; j<firstLine.length; j++) {
                            actionList.push(data[j]); 
                        }
                        
                        text.push(actionList);
                    
                    }
                    
                }
                
// BOMBS AWAY FOR LOOP AJAX PARSER --CSV-- \\___________________________________

                for (var k=0; k<text.length; k++) {
                    
                    var key = Math.floor(Math.random()*10000001);
                        localStorage.setItem(key, JSON.stringify(text[k]));
                    var actions = text[k];
                
                $('<div></div>').addClass
                    ('action'+key).attr
                    ('data-theme','c').attr
                    ('data-role','collapsible').appendTo
                    ('#bombs-away #bombs-away-action-list');
                
// FIELD DECLARATIONS PASSING  <CSV> TAGS TO THE DOM \\_________________________
                
                var hdrTxt = actions [0];
                
                $('<h3></h3>').addClass
                    ('header'+key).appendTo
                    ('div.action.'+key);
                    
                $('h3.header.'+key).html
                    (hdrTxt);
// FREIND TEXT \\_______________________________________________________________
                
                var friendText = "<strong> Friend: </strong>" + actions [1];
                
                $('<p></p>').addClass
                    ('friend '+key).appendTo
                    ('div.action.'+key);
                
                $('p.friend.'+key).html
                    (friendText);

// EMAIL TEXT \\________________________________________________________________
                
                var emailText = "<strong> Email: </strong>" + actions [2];            
                
                $('<p></p>').addClass
                    ('email '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.email.'+key).html
                    (emailText);

// DATE TEXT \\_________________________________________________________________
                
                var dateText = "<strong> Date: </strong>" + actions [3];
                
                $('<p></p>').addClass
                    ('date '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.date.'+key).html
                    (dateText);

// INCIDENT TEXT \\_____________________________________________________________
                
                var incidentText = "<strong> incident: </strong>" + actions [4];
                
                $('<p></p>').addClass
                    ('incident '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.incident.'+key).html
                    (incidentText);
                
// GENRE TEXT \\________________________________________________________________
                
                var genreText = "<strong> genre: </strong>" + actions [5];
                
                $('<p></p>').addClass
                    ('genre '+key).appendTo
                    ('div.action.'+key);
                
                $('p.genre.'+key).html
                    (genreText);
                
// WEBSITE TEXT \\______________________________________________________________
                
                var websiteText = "<strong> website: </strong>" + actions [6];
                
                $('<p></p>').addClass
                    ('website '+key).appendTo
                    ('div.action.'+key);
                
                $('p.website.'+key).html
                    (websiteText);
                
// SOCIALS TEXT \\______________________________________________________________
                
                var socialsText = "<strong> Socials: </strong>" + actions [7];
                
                $('<p></p>').addClass
                    ('socials '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.socials.'+key).html
                    (socialsText);
                
// LENGTH TEXT \\_______________________________________________________________
                
                var lengthText = "<strong> Days I've Been Angry: </strong>" + actions [8];
                
                $('<p></p>').addClass
                    ('length '+key).appendTo
                    ('div.action.'+key);
                
                $('p.length.'+key).html
                    (lengthText);
                
// ACTION TEXT \\_______________________________________________________________
                
                var actionText = "<strong> Remarks: </strong>" + actions [9];
                
                $('<p></p>').addClass
                    ('action-text '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.action-text.'+key).html
                    (actionText);
    
            }
    
                $('#bombs-away #bombs-away-action-list').collapsibleset
                    ('refresh');
                    
                }
                
            });
                
        });
            
    });
        
// MISSILES AWAY NOTICE LIST VIEW BUTTON \\_____________________________________

        $('#missiles').on
            ('pageinit', function (event) {
                
                localStorage.clear();
            
        $("#load-missiles").on("click", function () {
            
        $('#missiles #getListButton').hide();
    
// MISSILES AWAY NOTICE AJAX PARSER --CSV-- \\__________________________________
    
        $.ajax({
            url: 'js/xhr/missiles.csv',
            type: 'GET',
            dataType: 'text',
            success: function (actions) {
                
                var text = [];
                var csvData = actions.split(/[\r\n]+/);
                var firstLine = csvData[0].split('|');
                 
                for (var i=1; i<csvData.length; i++) {
                    var data = csvData[i].split('|');
                    
                    if (data.length == firstLine.length) {
                        var actionList = [];
                        
                        for (var j=0; j<firstLine.length; j++) {
                            actionList.push(data[j]); 
                        }
                        text.push(actionList); 
                    }
                }
                
// MISSILES AWAY FOR LOOP AJAX PARSER --CSV-- \\________________________________

            for (var k=0; i<text.length; i++) {
                
                var key = Math.floor(Math.random()*10000001);
                localStorage.setItem(key, JSON.stringify(text[i]));
                
                actions = text[i];
                
                $('<div></div>').addClass
                   ('action'+key).attr
                   ('data-theme','c').attr
                   ('data-role','collapsible').appendTo
                      ('#missiles #missiles-action-list');
                     
// FIELD DECLARATIONS PASSING  <CSV> TAGS TO THE DOM \\_________________________
            
                var hdrTxt = actions [0];
                
                $('<h3></h3>').addClass
                    ('header'+key).appendTo
                    ('div.action.'+key);
                    
                $('h3.header.'+key).html
                    (hdrTxt);
        
// FREIND TEXT \\_______________________________________________________________
                
                var friendText = "<strong> Friend: </strong>" + actions [1];
                
                $('<p></p>').addClass
                    ('friend '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.friend.'+key).html
                    (friendText);
       
// EMAIL TEXT \\________________________________________________________________
                
                var emailText = "<strong> Email: </strong>" + actions [2];
                
                $('<p></p>').addClass
                    ('email '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.email.'+key).html
                    (emailText);
       
// DATE TEXT \\_________________________________________________________________
                
                var dateText = "<strong> Date: </strong>" + actions [3];
                
                $('<p></p>').addClass
                    ('date '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.date.'+key).html(dateText);
       
// INCIDENT TEXT \\_____________________________________________________________
                
                var incidentText = "<strong> incident: </strong>" + actions [4];
                
                $('<p></p>').addClass
                    ('incident '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.incident.'+key).html
                    (incidentText);
                
// GENRE TEXT \\________________________________________________________________
                
                var genreText = "<strong> genre: </strong>" + actions [5];
                
                $('<p></p>').addClass
                    ('genre '+key).appendTo
                    ('div.action.'+key);
                
                $('p.genre.'+key).html
                    (genreText);
                
// WEBSITE TEXT \\______________________________________________________________
       
                var websiteText = "<strong> website: </strong>" + actions [6];
                
                $('<p></p>').addClass
                    ('website '+key).appendTo
                    ('div.action.'+key);
                
                $('p.website.'+key).html
                    (websiteText);
                
// SOCIALS TEXT \\______________________________________________________________
       
                var socialsText = "<strong> Socials: </strong>" + actions [7];
                
                $('<p></p>').addClass
                    ('socials '+key).appendTo
                    ('div.action.'+key);
                
                $('p.socials.'+key).html
                    (socialsText);
                
// LENGTH TEXT \\_______________________________________________________________
                
                var lengthText = "<strong> Length: </strong>" + actions [8];
                
                $('<p></p>').addClass
                    ('length '+key).appendTo
                    ('div.action.'+key);
                
                $('p.length.'+key).html
                    (lengthText);
                
// COMMENT TEXT \\______________________________________________________________
                var actionText = "<strong> Remarks: </strong>" + actions [9];
                
                $('<p></p>').addClass
                    ('action-text '+key).appendTo
                    ('div.action.'+key);
                    
                $('p.action-text.'+key).html
                    (actionText);
        
                }
        
            $('#missiles #missiles-action-list').collapsibleset
                ('refresh');
        
            }
        });  
     });
});
            
$('#addAction').live
('pageinit', function (event) {

var op = getUrlVars()["opt"];

if(opt === 'edit') {
    editAction(postID);
}

// WEBSITE LINKS \\_____________________________________________________________

    var uri_link_disclosure = function () {
    
    if ($("#genre").val() === "Popular") {
        
        $("#social-websites").show();
        
        $("#blog-websites").hide();
    
    } else if ($("#genre").val() === "Private") {
        
        $("#blog-websites").show();
        
        $("#social-websites").hide();
        }
    };

        $('#social-websites').hide();
        
        $('#blog-websites').hide();
        
        $("#genre").change(function () {

    uri_link_disclosure();

    });
    
    makeIncidents();
    setDate();

});


// RESET ERROR MESSAGES \\______________________________________________________

    var getLocalData = function (category) {
    
        $('#errors').empty(); 

// LOOP STORAGE ARRAY THE CONVERT BACK TO STRING ,THEN TO OBJ \\________________
    
    for (var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var obj = JSON.parse(value);

// CREATE THE LIST ITEMS \\_____________________________________________________
    
        $('<li></li>').addClass
            ('action'+key).attr
            ('data-theme','c').appendTo
            ('#action-list');

// FACTORY THE LIST ITEMS \\____________________________________________________

        $('<a></a>').addClass
            ('anchor '+key).attr
            ('rel','external').attr
            ('href', 'index.html#viewForgivePost?postID='+key+'&cat='+category).attr
            ('data-cache', 'false').attr
            ('data-ajax', false).appendTo
            ('#action-list li.'+key);

    if (category === "burns") {

// TITLE HEADER TEXT\\__________________________________________________________

    var hdrTxt = obj.name[1];
    
        $('<h3></h3>').addClass
            (key).appendTo
            ('li.'+key+' a.'+key);
        
        $('h3.'+key).html(hdrTxt);

// DETAIL THE ACTION \\_________________________________________________________

    var pText = obj.incident[0] + " " + obj.incident[1];
    
        $('<p></p>').addClass
            ('subhead '+key).attr
            ('style', 'font-weight: bold;').appendTo
            ('li.'+key+' a.'+key);
        
        $('p.subhead.'+key).html(pText);

// ACTION DESCRIPTOR \\_________________________________________________________

    var descText = obj.action[1];
        
        $('<p></p>').addClass
            ('ui-li-desc '+key).appendTo
            ('li.'+key+' a.'+key);
        
        $('p.ui-li-desc.'+key).html
            (descText);

// DATE TEXT\\__________________________________________________________________

    var dateText = obj.date[1];
    
        $('<p></p>').addClass
            ('date ui-li-aside '+key).appendTo
            ('li.'+key+' a.'+key);
        
        $('p.date.ui-li-aside.'+key).html
            (dateText);
    
    } else if
    (category === "blastoffs" || category === "devcons")
    {
    
// TITLE HEADER TEXT\\__________________________________________________________
    
    var hdrTxt = obj.name;
    
        $('<h3></h3>').addClass
            (key).appendTo
            ('li.'+key+' a.'+key);
        
        $('h3.'+key).html
            (hdrTxt);

// DETAIL THE ACTION \\_________________________________________________________

    var pText = "incident: " + obj.incident;
    
        $('<p></p>').addClass
            ('subhead '+key).attr
            ('style', 'font-weight: bold;').appendTo
            ('li.'+key+' a.'+key);
        
        $('p.subhead.'+key).html
            (pText);

// ACTION DESCRIPTOR \\_________________________________________________________

    var descText = obj.action;
    
        $('<p></p>').addClass
            ('ui-li-desc '+key).appendTo
            ('li.'+key+' a.'+key);
            
        $('p.ui-li-desc.'+key).html
            (descText);

// DATE TEXT\\__________________________________________________________________

    var dateText = obj.date;
    
        $('<p></p>').addClass
            ('date ui-li-aside '+key).appendTo
            ('li.'+key+' a.'+key);
        
        $('p.date.ui-li-aside.'+key).html
            (dateText);
    }         
}


// PRIORTIZE ORDER OF THE LISTVIEW \\___________________________________________

    var mylist = $('#action-list');
    var listitems = mylist.children
        ('li').get();
            listitems.sort(function (a, b) {
        
    var compA = $(a).text().toUpperCase();
    var compB = $(b).text().toUpperCase();
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
        });
        
        $.each(listitems, function (idx, itm) { 
        mylist.append(itm); 
        });
        
        $('#action-list').listview();
        
        $('#action-list').listview('refresh');
    
    };

// EDIT FUNCTION \\______________________________________________________________

    var editAction = function (postID) {
        
        $('#pageTitle').html
            ('Edit Action');
    
    var value = localStorage.getItem(postID);
    var item = JSON.parse(value);
    
        $('#action-title').val
            (item.name[1]);
        
        $('#friend').val
            (item.friend[1]);
        
        $('#email').val
            (item.email[1]);
        
        $('#date').val
            (item.date[1]);
    
            console.log
                (item.incident[1]);
    
        $('#incidents').val
            (item.incident[1]);setIncident(item.incident[1]);
    
        $('#genre').val
            (item.genre[1]);
    
    if($('#genre').val() === "Popular") {
        
        $("#blog-websites").hide();
        
        $("#social-websites").show();
        
        $('#website-popular').val
            (item.website[1]);
    
    } else if
        ($('#genre').val() === "Private") {
            
        $("#social-websites").hide();
        
        $("#blog-websites").show();
        
        $('#website-pop').val
            (item.website[1]);
    }

        $('select').selectmenu
            ('refresh');
        
        $('input:radio[name=socials]').removeAttr
            ('checked');
        
        $('input:radio[name=socials]').checkboxradio
            ('refresh');
        
        setRadio(item.socials[1]);
        
        $('#length').val
            (item.length[1]);
        
        $('#action-text').val
            (item.action[1]);

    var selectGenre = $('select#genre');

    selectGenre.selectmenu();
    selectGenre.selectmenu
    ('refresh');

    var selectWebsite = $('select#website');

    selectWebsite.selectmenu();
    selectWebsite.selectmenu
    ('refresh');

//INJECT SWAP FROM SUBMIT TO DELETE \\__________________________________________

        $('#submit').val
            ('Save Editted action');
        
        $('#submit').button
            ('refresh');
        
        $('#actionForm').submit(function () {
            validateForm(postID);
        });
    };

    var getRadio = function () {
    return($('input:radio[name=socials]:checked').val());
    };
    
    var setRadio = function (myRadio) {
    switch(myRadio)
        {
        case "burns":
            $('input:radio[name=socials]:nth(0)').attr
                ('checked', true);
            
            $('input:radio[name=socials]').checkboxradio
                ('refresh');
        break;
    
        case "blastoffs":
            $('input:radio[name=socials]:nth(1)').attr
                ('checked', true);
            
            $('input:radio[name=socials]').checkboxradio
                ('refresh');
        break;
    
        case "devcons":
            $('input:radio[name=socials]:nth(2)').attr
                ('checked', true);
            
            $('input:radio[name=socials]').checkboxradio
                ('refresh');
        break;
    
        case "bombs":
            $('input:radio[name=socials]:nth(3)').attr
                ('checked', true);
            
            $('input:radio[name=socials]').checkboxradio
                ('refresh');
        break;
    
        case "missiles" :
            $('input:radio[name=socials]:nth(4)').attr
                ('checked', true);
            
            $('input:radio[name=socials]').checkboxradio
                ('refresh');
        break;
    }
};

    var setIncident = function (myIncident) {
        
        switch(myIncident)
            {
            case "Famous Quotes":
                
                $("#incidents").val
                    ("Famous Quotes").attr
                    ("selected", "selected");
                
                $('#incidents').selectmenu
                    ('refresh');
                
            break;
            
            case "Relationships":
                
                $("#incidents").val
                    ("Relationships").attr
                    ("selected", "selected");
                
                $('#incidents').selectmenu
                    ('refresh');
                
            break;
            
            case "Tools":
                
                $("#incidents").val
                    ("Tools").attr
                    ("selected", "selected");
                
                $('#incidents').selectmenu
                    ('refresh');
                    
            break;
        }
    };

// VALIDATE ALL FUNCTION \\_____________________________________________________

    var validateForm = function (postID) {
    var getactionName = $("#action-title").val();
    var getFriend = $("#friend").val();
    var getEmail = $("#email").val();
    var getincident = $("#incidents").val();
    var formErrors = $('#formErrors');

//Reset error messages \\_____________________________________________________

    $(".error").hide();
    
    var hasError = false;
    
        $('#errors').empty();
        
        $('#action-title').css("border", "none") ;
        
        $('#friend').css("border", "none") ;
        
        $('#email').css("border", "none") ;
        
        $('#select > div').css("border", "none") ;

//Get Error messages \\_____________________________________________________

	var messageArray = [];
	
	//action Name validation
	
	if (getactionName === "") {
		
		$('#action-title').after
			('<span class="error">Please enter your action title.</span>');
		
		$('#action-title').css
			("border", "1px solid red") ;
		hasError = true;
	}
	
//friend validation \\_____________________________________________________

	if (getFriend === "") {
		
		$('#friend').after
			('<span class="error">Please enter a friends name.</span>');
		
		$('#friend').css
			("border", "1px solid red") ;
		
		hasError = true;
	}
//Email validation

	var re = /^\w+([\.-]?]\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if ((getEmail === '') || (!re.test(getEmail))) {
		
		$('#email').after
			('<span class="error">Please enter a valid email address.</span>');
		
		$('#email').css
			("border", "1px solid red") ;
		hasError = true;

} 

//incident validation \\_____________________________________________________

	if (getincident === "--Make An Incident --") {
	
		$('#select > div').after('<span class="error">Please choose a incident.</span>');
	
	var incidentError = "Please choose an incident.";
		
		$('#select > div').css
			("border", "1px solid red") ;
        hasError = true;
        }

//Set Errors  \\_____________________________________________________

	if (hasError === true) {
		$('#submit-container').after('<span class="error">Please correct the errors above.</span>');
			event.preventDefault();
			
			return false;
		
			} else {
			
		//If all is validated, save the data and send the key value from editData
		storeData(postID);
		}
	};

// STORE FUNCTION \\_____________________________________________________

    $('#submit').on('click', function storeData(key) {
    
    if(validateForm()) {

//Create new key if one doesn't exist.\\________________________________________
    
    if(!key) {
    
    var id = Math.floor(Math.random()*10000001);
    }else{

//Use the existing key.\\_____________________________________________________

    var id = key;
    }
    
    if ($('#genre').val() === 'Private') {
    var website = $('#website-pop').val();
    } else if ($('#genre').val() === 'Popular') {
    var website = $('#website-popular').val();
    }

// Gather up all form values and labels.\\_______________________________________
//Find the value of the selected radio button.\\_________________________________

	var newItem = {};

		newItem.name = ["Social Posting Title:", $('#action-title').val()];
		
		newItem.friend = ["Friend or FOE:", $('#friend').val()];
		
		newItem.email = ["Email:", $('#email').val()];
		
		newItem.date = ["Date:", $('#date').val()];
		
		newItem.incident = ["Incidents:", $('#incidents').val()];
		
		newItem.genre = ["Genre:", $('#genre').val()];
		
		newItem.website = ["Website:", website];
		
		newItem.socials = ["Socials:", getRadio()];
		
		newItem.length = ["Action Length:", $('#length').val()];
		
		newItem.action = ["Remarks:", $('#action-text').val()];

//Save data into local storage \\_______________________________________________

		alert("resource action successfully saved.");
		parent.history.back();
		}

});

//Create select field Elements and populate with options.\\_____________________
function makeIncidents() {
		$('<select></select>').attr
			('id', 'incidents').attr
			('data-theme', 'c').attr
			('data-native-elements',false).appendTo('#select');
			
	for (var i=0, j=forgiveIncidents.length; i<j; i++) {
		var optText = forgiveIncidents[i];
		
		$('<option></option>').attr
			('value', optText).attr
			('id', optText).attr
			('data-theme', 'c').appendTo
			('select#incidents');
			
		$('#incidents option:last-child').html
			(optText);
	}
	var selectincidents = $('select#incidents');
	selectincidents.selectmenu();
	selectincidents.selectmenu('refresh');
	}

//  Set default date \\_____________________________________________________

function setDate() {
    if (!($('#date').val()) ) {
        
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
        if(dd<10) {dd='0'+dd;}
        
        if(mm<10) {mm='0'+mm;}
        
        $('#date').val(mm+'/'+dd+'/'+yyyy);
        }
    }

// CLEAR ALL FUNCTION \\_____________________________________________________

    $("#clear").on('click', function () {
        if (localStorage.length === 0) {
            
        alert("There is no data to clear.");
        
            } else {
            var ask = confirm("Are you sure you want to delete all actions?");
			
            if (ask) {
            
            localStorage.clear();
            
            alert("All information deleted.");
            
            window.location.href = "index.html";
            return false;
            
            } else {
            
            alert("Action was NOT deleted.");
            }
        }
    });


// DELETE FUNCTION \\_____________________________________________________

    $("#delete").on
        ('click', function () {
        var ask = confirm("Are you sure you want to delete this action?");
        
        if (ask) {
            localStorage.removeItem(postID);
                alert("Action was successfully deleted.");
                
        if (localStorage.length === 0) {
            window.location.href = "index.html";
            
        } else {
            parent.history.back();
        }
        
        } else {
            alert("Action NOT deleted.");
        }
    });
