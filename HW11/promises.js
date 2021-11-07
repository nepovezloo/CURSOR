getRandomChinese = async(length) =>{
    i = 0;
    let result = '';
   try {
    while(i < length) {
        await new Promise ((resolve) => {
           result += String.fromCharCode(([Date.now()]).slice(-5));
           i ++;
        setInterval(() => {
            resolve(result)
        }, 50 * length);
        });
       }
   } catch (error) {
       console.log(error)
   }
   console.log(result)
}
getRandomChinese(4)