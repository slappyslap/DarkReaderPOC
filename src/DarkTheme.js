import {
    enable as enableDarkMode,
    disable as disableDarkMode,
    setFetchMethod
} from 'darkreader';

function setup() {
    let isDarkMode = window.localStorage.getItem("darkMode");

    if(isDarkMode === null){
        window.localStorage.setItem("darkMode", "false");
        isDarkMode = "false";
    }

    isDarkMode = (isDarkMode === 'true');

    change(isDarkMode)
}

function change(bool){
    window.localStorage.setItem("darkMode", bool.toString());

    if(bool){
        setFetchMethod(window.fetch);
        enableDarkMode({},{url: ['*'], css: '', ignoreImageAnalysis: ['.leaflet-marker-icon'], ignoreInlineStyle: ['.leaflet-marker-icon'], invert: []});
    } else {
        disableDarkMode();
    }
}

function toggle(){
    let isDarkMode = window.localStorage.getItem("darkMode");

    if(isDarkMode === null){
        window.localStorage.setItem("darkMode", "false");
        isDarkMode = "false";
    }

    isDarkMode = (isDarkMode !== 'true');

    change(isDarkMode);
}

const DarkTheme = {
    setup,
    toggle
}

export default DarkTheme;