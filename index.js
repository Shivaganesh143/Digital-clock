function my_clock() {
    const currentDate = new Date();

    const sys_hrs = currentDate.getHours();
    const sys_mins = currentDate.getMinutes().toString().padStart(2, '0');
    const sys_secs = currentDate.getSeconds().toString().padStart(2, '0');

    document.getElementById('hrs').innerHTML = sys_hrs.toString().padStart(2, '0');
    document.getElementById('mnt').innerHTML = sys_mins;
    document.getElementById('sec').innerHTML = sys_secs;

    let wish;
    if (sys_hrs >= 0 && sys_hrs < 12) {
        wish = 'Good Morning';
    } else if (sys_hrs >= 12 && sys_hrs <= 16) {
        wish = 'Good Afternoon';
    } else {
        wish = 'Good Evening';
    }
    document.getElementById('wishing').innerHTML = `Hello, ${wish}!`;

    const date = currentDate.getDate().toString().padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;

    let week_day;
    switch (currentDate.getDay()) {
        case 0: week_day = 'Sunday'; break;
        case 1: week_day = 'Monday'; break;
        case 2: week_day = 'Tuesday'; break;
        case 3: week_day = 'Wednesday'; break;
        case 4: week_day = 'Thursday'; break;
        case 5: week_day = 'Friday'; break;
        case 6: week_day = 'Saturday'; break;
    }
    document.getElementById('weekDay').innerHTML = week_day;

    console.log(currentDate.getDay());
}

setInterval(my_clock, 1000);
