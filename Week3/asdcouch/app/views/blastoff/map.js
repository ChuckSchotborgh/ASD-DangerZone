function(doc) {
  if (doc.audience[1].substr(0,1) === "A") {
    emit(doc.audience, {
    	"name": doc.name,
    	"friend": doc.friend,
    	"email": doc.email,
		"remarks":doc.action,
    	"date": doc.date,
    	"incident": doc.incident,
    	"genre": doc.genre,
    	"website": doc.website,
    	"socials": doc.socials,
    	"length": doc.length,
    	"action": doc.action
   });
  }
};