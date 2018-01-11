
var path = require("path");




function PathReader(){
    this.setDirName = function(dirname){
        this.dirname = dirname;
    }
    this.getDirName = function(){
        return this.dirname;
    }

    this.readHTMLFile = function(filePath,response){
        response.sendFile(this.getDirName()+filePath+".html");
    }
}



module.exports = new PathReader();