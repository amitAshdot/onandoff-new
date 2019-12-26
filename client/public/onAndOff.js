const onAndOffFunction = async (websiteId) => {
    let websites = null
    try {
        const res = await axios.get(`http://onandoff.co.il/api/website?_id=${websiteId}`);
        websites = res.data;
    } catch (err) {
        console.log('error: ' + err);
    }
    var d = new Date();
    var day = d.getDay();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    if (hours < 10) { hours = '0' + hours + ':' } else { hours = hours + ':' }
    if (mins < 10) { mins = '0' + mins + ':' } else { mins = mins + ':' }
    if (secs < 10) { secs = '0' + secs } else { secs = secs }
    var time = hours + mins + secs;

    var Sunday = { start: `${websites[0].timeSchedule.Sunday.openHour}`, end: `${websites[0].timeSchedule.Sunday.closeHour}` };
    var Monday = { start: `${websites[0].timeSchedule.Monday.openHour}`, end: `${websites[0].timeSchedule.Monday.closeHour}` };
    var Tuesday = { start: `${websites[0].timeSchedule.Tuesday.openHour}`, end: `${websites[0].timeSchedule.Tuesday.closeHour}` };
    var Wednesday = { start: `${websites[0].timeSchedule.Wednesday.openHour}`, end: `${websites[0].timeSchedule.Wednesday.closeHour}` };
    var Thursday = { start: `${websites[0].timeSchedule.Thursday.openHour}`, end: `${websites[0].timeSchedule.Thursday.closeHour}` };
    var Friday = { start: `${websites[0].timeSchedule.Friday.openHour}`, end: `${websites[0].timeSchedule.Friday.closeHour}` };
    var Saturday = { start: `${websites[0].timeSchedule.Saturday.openHour}`, end: `${websites[0].timeSchedule.Saturday.closeHour}` };

    var flag = false; //not a class
    var testElement = document.getElementById(`${websites[0].divId}`);
    if (typeof (testElement) === 'undefined' || testElement === null) {
        testElement = document.getElementsByClassName(`${websites[0].divId}`);
        flag = true // a class
    }
    // else {
    //     var testElement = '#' + testElement;
    // }

    switch (day) {
        case 0:
            // if class
            if (Sunday.start < time && Sunday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].style.display = 'none';
                    }
                }
                else testElement.style.display = 'none';
            }
            break;
        case 1:
            // if class
            if (Monday.start < time && Monday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].style.display = 'none';
                    }
                }
                else testElement.style.display = 'none';
            }
            break;
        case 2:
            // if class
            if (Tuesday.start < time && Tuesday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].style.display = 'none';
                    }
                }
                else testElement.style.display = 'none';
            }
            break;
        case 3:
            // if class
            if (Wednesday.start < time && Wednesday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].style.display = 'none';
                    }
                }
                else testElement.style.display = 'none';
            }
            break;
        case 4:
            // if class
            if (Thursday.start < time && Thursday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].style.display = 'none';
                    }
                }
                else testElement.style.display = 'none';
            }

            break;
        case 5:
            // if class
            if (Friday.start < time && Friday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].style.display = 'none';
                    }
                }
                else testElement.style.display = 'none';
            }
            break;
        case 6:
            // if class
            if (Saturday.start < time && Saturday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].style.display = 'none';
                    }
                }
                else testElement.style.display = 'none';
            }
            break;
    }
}


const timerPlus = async (websiteId) => {
    let websites = null
    try {
        const res = await axios.get(`http://onandoff.co.il/api/timerplus?_id=${websiteId}`);
        websites = res.data;
    } catch (err) {
        console.log('error: ' + err);
    }
    var d = new Date();
    var day = d.getDay();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    if (hours < 10) { hours = '0' + hours + ':' } else { hours = hours + ':' }
    if (mins < 10) { mins = '0' + mins + ':' } else { mins = mins + ':' }
    if (secs < 10) { secs = '0' + secs } else { secs = secs }
    var time = hours + mins + secs;

    var Sunday = { start: `${websites[0].timeSchedule.Sunday.openHour}`, end: `${websites[0].timeSchedule.Sunday.closeHour}` };
    var Monday = { start: `${websites[0].timeSchedule.Monday.openHour}`, end: `${websites[0].timeSchedule.Monday.closeHour}` };
    var Tuesday = { start: `${websites[0].timeSchedule.Tuesday.openHour}`, end: `${websites[0].timeSchedule.Tuesday.closeHour}` };
    var Wednesday = { start: `${websites[0].timeSchedule.Wednesday.openHour}`, end: `${websites[0].timeSchedule.Wednesday.closeHour}` };
    var Thursday = { start: `${websites[0].timeSchedule.Thursday.openHour}`, end: `${websites[0].timeSchedule.Thursday.closeHour}` };
    var Friday = { start: `${websites[0].timeSchedule.Friday.openHour}`, end: `${websites[0].timeSchedule.Friday.closeHour}` };
    var Saturday = { start: `${websites[0].timeSchedule.Saturday.openHour}`, end: `${websites[0].timeSchedule.Saturday.closeHour}` };
    var flag = false; //not a class
    var testElement = document.getElementById(`${websites[0].divId}`);
    if (typeof (testElement) === 'undefined' || testElement === null) {
        testElement = document.getElementsByClassName(`${websites[0].divId}`);
        flag = true // a class
    }
    // else {
    //     var testElement = '#' + testElement;
    // }
    
    switch (day) {
        case 0:
            // if class
            if (Sunday.start < time && Sunday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].innerHTML = websites[0].wysiwyg;
                    }
                }
                else testElement.innerHTML = websites[0].wysiwyg;
            }
            break;
        case 1:
            // if class
            if (Monday.start < time && Monday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].innerHTML = websites[0].wysiwyg;
                    }
                }
                else testElement.innerHTML = websites[0].wysiwyg;
            }
            break;
        case 2:
            // if class
            if (Tuesday.start < time && Tuesday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].innerHTML = websites[0].wysiwyg;
                    }
                }
                else testElement.innerHTML = websites[0].wysiwyg;
            }
            break;
        case 3:
            // if class
            if (Wednesday.start < time && Wednesday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].innerHTML = websites[0].wysiwyg;
                    }
                }
                else testElement.innerHTML = websites[0].wysiwyg;
            }
            break;
        case 4:
            // if class
            if (Thursday.start < time && Thursday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].innerHTML = websites[0].wysiwyg;
                    }
                }
                else testElement.innerHTML = websites[0].wysiwyg;
            }
            break;
        case 5:
            // if class
            if (Friday.start < time && Friday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].innerHTML = websites[0].wysiwyg;
                    }
                }
                else testElement.innerHTML = websites[0].wysiwyg;
            }
            break;
        case 6:
            // if class
            if (Saturday.start < time && Saturday.end > time) {
                if (flag) {
                    for (var i = 0, len = testElement.length; i < len; i++) {
                        testElement[i].innerHTML = websites[0].wysiwyg;
                    }
                }
                else testElement.innerHTML = websites[0].wysiwyg;
            }
            break;
    }
}