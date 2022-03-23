// string methods 

// 1. Extraction method

/*..........................slice method ..............................*/
// slice(start, end) -> start index is inclusive and end index is exclusive 
//start index se shuru hoga aur ending index se ek pehle index tak string kategi
            var slicedStr = str.slice(6,15); 
            console.log(slicedStr);
            //console.log(str); //original source of information is not changed 
            
            var slicedStr = str.slice(6); //start se leke pori end tak string kategi
            console.log(slicedStr);
                                    //(2,str.length+(end))-> (2,15+(-4)) -> (2,15-4) -> (2,11)
            var slicedStr = str.slice(2,-4); //start se leke peeche ke end times jane chod do 
            console.log(slicedStr);
            
            //substring method 
            
            // substr(start, length); start index se shuru hoga aur aage ke kitne character capture krne h 
            
            let ans = str.substr(2, 6);
            console.log(ans);
            console.log(str);
            
            //replacing 
            str = "YOLO";
            console.log(str);
            
            //to lower and uppercase 
            console.log(str.toLowerCase()); //yolo
            str = "fomo"
            console.log(str.toUpperCase()); //FOMO
            console.log(str); //information is intact and has not been tampered with 
            
            // concatenation method-> 2 combine 2 strings and make them one string
            
            let firstStr = "Believe in ";
            let secondStr = "yourself";
            
            let concatenatedStr = firstStr + secondStr;
            console.log(concatenatedStr);
            
            //concat method
            let concatStr = firstStr.concat(secondStr, " and me");
            console.log(concatStr);
            
            // trim method -> removes all the whitespaces of starting and ending of a string 
            
            let trimStr = "                                     Hello       how are you                 ";
            console.log(trimStr);
            console.log(trimStr.length);
            
            console.log(trimStr.trim());
            console.log(trimStr.trim().length);
            
            
            // 2, 10, 13, 14, 16, 26 27, 28, 29, 32, 52, 61, 67,69, 82, 
            //     functionWithArgs
            //     global scope and functions
            //     Escaping literal quotes
            //     Modify array with indexes
            //     Find the length of string
            //     word blanks
            var ans13 = 1 +"5";
            console.log(ans13);
            //
            
            console.log("ten"*3)
            
            //show next line use ---\n
            // str = "How you doing ?\nI am fine how about you?"
            // console.log(str);
            
            //backtick(``) - use the string is next line
            // str = `How you doing ? 
            // I am fine how about you?`;
            // console.log(str);
            //------------------------------------------
            
            //number backtick(``)
            // var num = 5;
            // console.log(`half of ${num} is ${num/2}`);