/* 
Problem: Write a function which can convert the time input given in 12 hours format to 24 hours format
The check for 'AM' and 'PM' can be verified using endsWith String method An extra 0 would be needed if the hours have single digit
*/

// Solution

const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here
const am_pm = time.split('').splice(-2).join('');
    time = time.split('');
    time = time.splice(0, (time.length-2)).join('');
    time = time.split(':');
    let hour = parseInt(time[0]);
    if (am_pm === 'AM') {
        time[0] = hour === 12 ? '00' : hour;
    }
    if (am_pm === 'PM') {
        time[0] = hour !== 12 ? hour + 12 : hour;        
    }
    time[0] = time[0].toString().length === 1  ? ('0' + time[0]) : time[0];
    time[1] = time[1].toString().length === 1  ? ('0' + time[1]) : time[1];
    return time.join(':');
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
