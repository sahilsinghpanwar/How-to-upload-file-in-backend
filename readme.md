esmai mai database ko src kai index.js mai set kr rha hu

database connect ho gya

app.js mai express app ko import krange

database connect hone kai baad  vo hume ek promise bhi return krta h toh hum function ko call krne kai baad vaha .then or .catch use krange (src/index.js) mai.

for more learning visit express api reference

mainly 
request, response  (req mai kub kub data aa rha h or kaise handle krna hai) (res mai ke kaise hume response bhejna h)

esmai jayada tar use hoge req.param (ke kya kya parameters honge data ko bhejne ke)



===================================video-10==========================================

step:1 aab hum files ko upload krange backend mai


cloudinary aap sai file leta h or server per daal date h, or hum multer ka use krte hue user sai file lange or aapne local server mai rakh dange temp mai, then hum cloudinary ka use krte hue us local server sai us file ko lange or us file ko cloudinary mai upload kr dange. this is two step setting  
step:2 also visit website cloudinary also run command (npm i cloudinary)


step:3 files ko add krne k liye basically required two packages h onge multer and express jusmai se hum filhal multer ka use krange.

1)express mai file upload ke command (npm i express-fileupload)
2)file upload kai liye multer use krne ke command  (read this) : (https://github.com/expressjs/multer)

step:4 visit webiste node fs (file system) and file unlink

step:5 hum cloudinary sai uska configuration bhi lai ayenge or .env mai uska naam, api key, api secret daal dange.


step:6 cloudinary.js dekho

step:7 abb hum multer ka use krte hue middlewares bnayenge   (middleware folder mai multer.middleware.js create krange)
also for more learing visit multer documentation (https://github.com/expressjs/multer)
aab hum use toh kr dange multer ka but usko save bhi toh krana hoga toh hum use krange multer.diskStorage() or multer.memoryStorage() use krte hue hum us file ko save kr dange but we use diskStorage() aager file , video .... badi aa gye toh memory bhar jayegi toh hum save kai liye diskStorage() use krte hain.