// const onAndOffFunction=async e=>{let n=null;try{n=(await axios.get(`http://onandoff.co.il/api/website?_id=${e}`)).data}catch(e){console.log("error: "+e)}var i=new Date,l=i.getDay(),s=i.getHours(),o=i.getMinutes(),t=i.getSeconds();s<10?s="0"+s+":":s+=":",o<10?o="0"+o+":":o+=":";var a=s+o+(t=t<10?"0"+t:t),r=`${n[0].timeSchedule.Sunday.openHour}`,d=`${n[0].timeSchedule.Sunday.closeHour}`,y=`${n[0].timeSchedule.Monday.openHour}`,u=`${n[0].timeSchedule.Monday.closeHour}`,c=`${n[0].timeSchedule.Tuesday.openHour}`,h=`${n[0].timeSchedule.Tuesday.closeHour}`,f=`${n[0].timeSchedule.Wednesday.openHour}`,g=`${n[0].timeSchedule.Wednesday.closeHour}`,H=`${n[0].timeSchedule.Thursday.openHour}`,m=`${n[0].timeSchedule.Thursday.closeHour}`,S=`${n[0].timeSchedule.Friday.openHour}`,w=`${n[0].timeSchedule.Friday.closeHour}`,$=`${n[0].timeSchedule.Saturday.openHour}`,p=`${n[0].timeSchedule.Saturday.closeHour}`,T=!1,M=document.getElementById(`${n[0].divId}`);switch(null==M&&(M=document.getElementsByClassName(`${n[0].divId}`),T=!0),l){case 0:if(r<a&&d>a)if(T)for(var L=0,b=M.length;L<b;L++)M[L].style.display="none";else M.style.display="none";break;case 1:if(y<a&&u>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].style.display="none";else M.style.display="none";break;case 2:if(c<a&&h>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].style.display="none";else M.style.display="none";break;case 3:if(f<a&&g>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].style.display="none";else M.style.display="none";break;case 4:if(H<a&&m>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].style.display="none";else M.style.display="none";break;case 5:if(S<a&&w>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].style.display="none";else M.style.display="none";break;case 6:if($<a&&p>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].style.display="none";else M.style.display="none"}},timerPlus=async e=>{let n=null;try{n=(await axios.get(`http://onandoff.co.il/api/timerplus?_id=${e}`)).data}catch(e){console.log("error: "+e)}var i=new Date,l=i.getDay(),s=i.getHours(),o=i.getMinutes(),t=i.getSeconds();s<10?s="0"+s+":":s+=":",o<10?o="0"+o+":":o+=":";var a=s+o+(t=t<10?"0"+t:t),r=`${n[0].timeSchedule.Sunday.openHour}`,d=`${n[0].timeSchedule.Sunday.closeHour}`,y=`${n[0].timeSchedule.Monday.openHour}`,u=`${n[0].timeSchedule.Monday.closeHour}`,c=`${n[0].timeSchedule.Tuesday.openHour}`,h=`${n[0].timeSchedule.Tuesday.closeHour}`,f=`${n[0].timeSchedule.Wednesday.openHour}`,g=`${n[0].timeSchedule.Wednesday.closeHour}`,H=`${n[0].timeSchedule.Thursday.openHour}`,m=`${n[0].timeSchedule.Thursday.closeHour}`,S=`${n[0].timeSchedule.Friday.openHour}`,w=`${n[0].timeSchedule.Friday.closeHour}`,$=`${n[0].timeSchedule.Saturday.openHour}`,p=`${n[0].timeSchedule.Saturday.closeHour}`,T=!1,M=document.getElementById(`${n[0].divId}`);switch(null==M&&(M=document.getElementsByClassName(`${n[0].divId}`),T=!0),l){case 0:if(r<a&&d>a)if(T)for(var L=0,b=M.length;L<b;L++)M[L].innerHTML=n[0].wysiwyg;else M.innerHTML=n[0].wysiwyg;break;case 1:if(y<a&&u>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].innerHTML=n[0].wysiwyg;else M.innerHTML=n[0].wysiwyg;break;case 2:if(c<a&&h>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].innerHTML=n[0].wysiwyg;else M.innerHTML=n[0].wysiwyg;break;case 3:if(f<a&&g>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].innerHTML=n[0].wysiwyg;else M.innerHTML=n[0].wysiwyg;break;case 4:if(H<a&&m>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].innerHTML=n[0].wysiwyg;else M.innerHTML=n[0].wysiwyg;break;case 5:if(S<a&&w>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].innerHTML=n[0].wysiwyg;else M.innerHTML=n[0].wysiwyg;break;case 6:if($<a&&p>a)if(T)for(L=0,b=M.length;L<b;L++)M[L].innerHTML=n[0].wysiwyg;else M.innerHTML=n[0].wysiwyg}};


const onAndOffFunction = async e => {
    let n = null;
    try {
        n = (await axios.get(`https://onandoff.co.il/api/website?_id=${e}`)).data
        console.log("this is onandoff result: " + n)

    } catch (e) {
        console.log("error: " + e)
    }
    var i = new Date,
        l = i.getDay(),
        s = i.getHours(),
        o = i.getMinutes(),
        t = i.getSeconds();
    s < 10 ? s = "0" + s + ":" : s += ":", o < 10 ? o = "0" + o + ":" : o += ":";
    var a = s + o + (t = t < 10 ? "0" + t : t),
        r = `${n[0].timeSchedule.Sunday.openHour}`,
        d = `${n[0].timeSchedule.Sunday.closeHour}`,
        y = `${n[0].timeSchedule.Monday.openHour}`,
        u = `${n[0].timeSchedule.Monday.closeHour}`,
        c = `${n[0].timeSchedule.Tuesday.openHour}`,
        h = `${n[0].timeSchedule.Tuesday.closeHour}`,
        f = `${n[0].timeSchedule.Wednesday.openHour}`,
        g = `${n[0].timeSchedule.Wednesday.closeHour}`,
        H = `${n[0].timeSchedule.Thursday.openHour}`,
        m = `${n[0].timeSchedule.Thursday.closeHour}`,
        S = `${n[0].timeSchedule.Friday.openHour}`,
        w = `${n[0].timeSchedule.Friday.closeHour}`,
        $ = `${n[0].timeSchedule.Saturday.openHour}`,
        p = `${n[0].timeSchedule.Saturday.closeHour}`,
        T = !1,
        M = document.getElementById(`${n[0].divId}`);
    switch (null == M && (M = document.getElementsByClassName(`${n[0].divId}`), T = !0), l) {
        case 0:
            if (r < a && d > a)
                if (T)
                    for (var L = 0, b = M.length; L < b; L++) M[L].style.display = "none";
                else M.style.display = "none";
            break;
        case 1:
            if (y < a && u > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].style.display = "none";
                else M.style.display = "none";
            break;
        case 2:
            if (c < a && h > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].style.display = "none";
                else M.style.display = "none";
            break;
        case 3:
            if (f < a && g > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].style.display = "none";
                else M.style.display = "none";
            break;
        case 4:
            if (H < a && m > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].style.display = "none";
                else M.style.display = "none";
            break;
        case 5:
            if (S < a && w > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].style.display = "none";
                else M.style.display = "none";
            break;
        case 6:
            if ($ < a && p > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].style.display = "none";
                else M.style.display = "none"
    }
},
timerPlus = async e => {
    let n = null;
    try {
        n = (await axios.get(`https://onandoff.co.il/api/timerplus?_id=${e}`)).data;
        console.log("this is result: " + n)

    } catch (e) {
        console.log("error: " + e)
    }
    var i = new Date,
        l = i.getDay(),
        s = i.getHours(),
        o = i.getMinutes(),
        t = i.getSeconds();
    s < 10 ? s = "0" + s + ":" : s += ":", o < 10 ? o = "0" + o + ":" : o += ":";
    var a = s + o + (t = t < 10 ? "0" + t : t),
        r = `${n[0].timeSchedule.Sunday.openHour}`,
        d = `${n[0].timeSchedule.Sunday.closeHour}`,
        y = `${n[0].timeSchedule.Monday.openHour}`,
        u = `${n[0].timeSchedule.Monday.closeHour}`,
        c = `${n[0].timeSchedule.Tuesday.openHour}`,
        h = `${n[0].timeSchedule.Tuesday.closeHour}`,
        f = `${n[0].timeSchedule.Wednesday.openHour}`,
        g = `${n[0].timeSchedule.Wednesday.closeHour}`,
        H = `${n[0].timeSchedule.Thursday.openHour}`,
        m = `${n[0].timeSchedule.Thursday.closeHour}`,
        S = `${n[0].timeSchedule.Friday.openHour}`,
        w = `${n[0].timeSchedule.Friday.closeHour}`,
        $ = `${n[0].timeSchedule.Saturday.openHour}`,
        p = `${n[0].timeSchedule.Saturday.closeHour}`,
        T = !1,
        M = document.getElementById(`${n[0].divId}`);
    switch (null == M && (M = document.getElementsByClassName(`${n[0].divId}`), T = !0), l) {
        case 0:
            if (r < a && d > a)
                if (T)
                    for (var L = 0, b = M.length; L < b; L++) M[L].innerHTML = n[0].wysiwyg;
                else M.innerHTML = n[0].wysiwyg;
            break;
        case 1:
            if (y < a && u > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].innerHTML = n[0].wysiwyg;
                else M.innerHTML = n[0].wysiwyg;
            break;
        case 2:
            if (c < a && h > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].innerHTML = n[0].wysiwyg;
                else M.innerHTML = n[0].wysiwyg;
            break;
        case 3:
            if (f < a && g > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].innerHTML = n[0].wysiwyg;
                else M.innerHTML = n[0].wysiwyg;
            break;
        case 4:
            if (H < a && m > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].innerHTML = n[0].wysiwyg;
                else M.innerHTML = n[0].wysiwyg;
            break;
        case 5:
            if (S < a && w > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].innerHTML = n[0].wysiwyg;
                else M.innerHTML = n[0].wysiwyg;
            break;
        case 6:
            if ($ < a && p > a)
                if (T)
                    for (L = 0, b = M.length; L < b; L++) M[L].innerHTML = n[0].wysiwyg;
                else M.innerHTML = n[0].wysiwyg
    }
};