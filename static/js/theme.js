let r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    let chosenTheme = rs.getPropertyValue('--accent');
    function myfunctionGreen() {
        r.style.setProperty('--accent', 'rgb(50,215,75)');
        let chosenTheme = rs.getPropertyValue('--accent');
        createCookie('savedtheme', chosenTheme, 7 );
    }
    function myfunctionRed() {
        r.style.setProperty('--accent', 'rgb(255,69,58)');
        let chosenTheme = rs.getPropertyValue('--accent');
        createCookie('savedtheme', chosenTheme, 7 );
    }
    function myfunctionPurple() {
        r.style.setProperty('--accent', '#869bfb');
        let chosenTheme = rs.getPropertyValue('--accent');
        createCookie('savedtheme', chosenTheme, 7);
    }
    function myfunctionWhite() {
        r.style.setProperty('--accent', 'white');
        let chosenTheme = rs.getPropertyValue('--accent');
        createCookie('savedtheme', chosenTheme, 7);
    }
    function myfunctionCyan() {
        r.style.setProperty('--accent', 'rgb(100,210,255)');
        let chosenTheme = rs.getPropertyValue('--accent');
        createCookie('savedtheme', chosenTheme, 7);
    }
    function myfunctionYellow() {
        r.style.setProperty('--accent', 'rgb(255,214,10)');
        let chosenTheme = rs.getPropertyValue('--accent');
        createCookie('savedtheme', chosenTheme, 7);
    }

    function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

let chosenThemeValue = readCookie('savedtheme');
if (chosenThemeValue) {
    r.style.setProperty('--accent', chosenThemeValue);
}
