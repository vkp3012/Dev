const fs = require("fs")//fs module
const path = require("path");//path module

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    //1. to check if srcPath is present
    if(srcPath == undefined){
        //the process.pwd() method return the current working dir node is process
        //console.log(srcPath); //undefined
        srcPath = process.cwd();
        //console.log("source path is",srcPath);
    }

    //2. to create a directory-> organized_files
    // let organizedFiles = srcPath + "/" + "organized_files";
    let organizedFiles = path.join(srcPath,"organize_files");
    console.log("organize file folder path is ",organizedFiles);
    if(fs.existsSync(organizedFiles)==false){
        //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
        fs.mkdirSync(organizedFiles)
    } else console.log("folder already exits");


     //3. scan the entire srcPath(doenloads folder in this case)

    //Reads the contents of the directory.-> basically reads the names of files present in directory
    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

    //4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    for (let i = 0; i < allFiles.length; i++){
        // let ext = allFiles[i].split(".")[1];
        //extname returns the extension of the file 
        let ext = path.extname(allFiles[i]);
        console.log(ext);
    }
}


let srcPath="C:/Users/Vivek Kumar Singh/Desktop/web/Node/fileOrganizer/downloads"
organize(srcPath);
