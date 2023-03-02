const oneDay = 1000 * 60 * 60 * 24;


let str = "Fri, 02 Dec 2022 12:22:05 GMT";

const date1 = new Date(str);
console.log(date1);

const now = new Date();
console.log(now);

const diffInTime = now.getTime() - date1.getTime();
console.log(diffInTime);

const diffInDays = diffInTime / oneDay;
console.log(diffInDays, Math.round(diffInDays));

console.log("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + now + " is: <br> " 
               + diffInDays);
			   
https://bobbyhadz.com/blog/javascript-convert-date-to-timestamp
https://ui.dev/get-current-timestamp-javascript
https://www.tutorialrepublic.com/faq/how-to-convert-a-unix-timestamp-to-time-in-javascript.php
https://www.geeksforgeeks.org/compare-two-dates-using-javascript/
https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
