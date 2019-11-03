const http = require("http");
const fs = require("fs");
const url = require("url");
const https = require("https");


http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathName = urlObj.pathname;
    if (pathName == "/") {
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(fileContent);
        res.end();
    } else if (pathName == "/getlist") {
        https.get("https://maoyan.com/films", function (resObj) {
            var result = "";
            resObj.on("data", function (chunk) {
                result += chunk;
            })
            resObj.on("end", function () {
                var $ = cheerio.load(result);
                var movieList = [];
                $(".movie-item-title a").each(function () {
                    var movie = {};
                    movie.movieId = $(this).attr("data-val").slice();
                    movie.movieName = $(this).text();
                    //movie.moieOrange=$(this).parent().next();
                    if (isNaN(parseInt($(this).parent().next))) {
                        movie.movieRange = "暂无评分"
                    } else {
                        movie.movieRange = $(this).parent().next().children("")
                    }
                    movie.movieRange == "暂无评分";
                    console.log(movie);
                    movieList.push(movie);
                })
            })
        })
    }


}).listen(8081);

console.log(" server is listening 8081");





/** 
 * 1.创建server读取index.html响应到客户端显示
 * 
 * 2.在页面发起ajax请求获取数据
 * 服务端接收到的ajax请求，去猫眼电影上爬取数据
 * 使用cheerio来解析得到需要的数据，存储到数组里面，响应到客户端
 * 
 * 3.在ajax回调函数中使用响应到的数据，拼接到页面上显示
 */




/*
res.on('end', () => {
    var $ = cheerio.load(result);
    var movieList = [];
    $(".movie-item-title a").each(function () {
        var movie = {};
        movie.movieId = $(this).attr("data-val").slice();
        movie.movieName = $(this).text();
        //movie.moieOrange=$(this).parent().next();
        if (isNaN(parseInt($(this).parent().next))) {
            movie.movieRange = "暂无评分"
        } else {
            movie.movieRange = $(this).parent().next().children("")
        }
        movie.movieRange == "暂无评分";
        console.log(movie);
        movieList.push(movie);
    })
})
*/