const http=require('http');
const port=9000;
const fs=require('fs');// this is the module which is used to read the files
/////////////////it is the part of step-3
//////////////////////////////////////////////step-1
function requestHandler(req,res){
    /*
    console.log(req.url);//it prints or change the url in the tab according to what you have write
    res.end("Gotcha!");// this how we send the request in the server or browser
    */

    /*
    res.writeHead(200,{'content-type':'text/html'});// here, 200 is response code. you have also listen about 404.so, here we are taking bydefault it is 200
    // content-type signifies which type of content the page will conatin. is it text or something else. we can can also defined that.
    // it is not visible on the page. we can check it using developer tools.
    res.end("<h1>Gotcha!</h1>"); 
    */

    /*
    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log("error",err);
            return res.end("<h1>Error!</h1>");
        }
        return res.end(data);
    // after this we have to install our first package which is called 'nodemon' using cmd prompt. This package is basically monitors our project and as soon as the js file chnaged. it will restarts the server automatically.
    // syntax to install is 
    // sudo npm install -g nodemon 
    // -g stands for global
    // if it will create problem remove the word 'sudo'
    });
    */
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    let filepath;
    switch(req.url){
        case '/':
            filepath='./index.html';
            break;
        case '/profile':
            filepath='./profile.html';
            break;
        default:
            filepath='./404.html';
    }
    fs.readFile(filepath,function(err,data){
        if(err){
            console.log('error',err);
            return res.end("<h1>Error!<h1>");
        }
        return res.end(data);
    });
}
/////////////////////////////////////////////step-3
/////////////////////////////////////////////step-2
const server=http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
       console.log(err);
       return;
    }
    else{
        console.log("Server is up and running:",port);
    }
});