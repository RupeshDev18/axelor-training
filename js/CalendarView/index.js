/* 
Wifi password  
Axelor :  w3@xsllr!
Axelor_Jio_5G :  xlrsrt@india
*/

/*
system
Axelor :  m3@xllr
*/
// 3. HTML Calendar view
/* Hints: Use date, array, loops, conditions, html dom for rendering. */
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const days31 = ["Jan", "Mar", "May", "July", "Aug", "Oct", "Dec"];
const days30 = ["Apr", "June", "Sept", "Nov"];
/** getting day and date from the date object  */
const d = new Date();
let month = months[d.getMonth()];
let date = d.getDate();
let dayNum = d.getDay();
let html = `<thead>
<tr>
    <td>Sun</td>
    <td>Mon</td>
    <td>Tue</td>
    <td>Wed</td>
    <td>Thu</td>
    <td>Fri</td>
    <td>Sat</td>
</tr>
</thead>
<tr>`;

function leap(year) {
    let leapDate = new Date(year, 1, 29);
    return leapDate.getMonth() === 1 && leapDate.getDate() === 29;
}

let x = dayNum;
/** calculating number of days in month */
let noOfDays;
if (days31.includes(month)) {
    noOfDays = 31;
}
else if (days30.includes(month)) {
    noOfDays = 30;
} else {
    if (leap(d.getFullYear())) {
        noOfDays = 29;
    }
    else {
        noOfDays = 28;
    }
}
/* leaving empty space before 1st date */
while (dayNum) {
    html += `<td></td>`
    dayNum--;
}

/** forming calender */
let i = 1;
while (i <= noOfDays) {
    for (; x < 7; x++) {
        if (x == 5) {
            html += `<td style="color:green">${i}</td>`
        } else if (x == 0) {
            html += `<td style="color:red">${i}</td>`
        } else {
            html += `<td>${i}</td>`
        }

        i++;
        if (i > noOfDays) break;
    }
    html += `</tr><tr>`
    x = 0;
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cal').innerHTML = html;
    document.getElementById('month').innerHTML = `${month} ${d.getFullYear()}`
});