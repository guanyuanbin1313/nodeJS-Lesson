const cheerio = require("cheerio");

const $ = cheerio.load("<ul><li> li node1</li></ul>");
$("ul").append("<li> li node2 </li>")

$("li").each(function(index,el){
    console.log($(this).text());
})
$("h1").text("hello node");

console.log($("h1").html());