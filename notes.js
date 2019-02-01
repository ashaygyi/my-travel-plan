const fs = require("fs");

var fetchNotes = () => {
    try{
        var jsonData = fs.readFileSync("notes.json");
        return JSON.parse(jsonData);
    } catch(e){
        return [];
    }
}

var saveNotes = (note)=>{
    fs.writeFileSync(JSON.stringify(note), 'notes.json');
}

var addNotes= (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title===title);
    if(duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
    }
}

module.exports = {
    addNotes()
};