// values
const button = document.getElementById("change-mode");
const link = document.getElementById("theme-style");

// functions
function change_icon(mode) {

    if (mode === "dark") {

        button.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>`;

    } else {

        button.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>`;

    }

}

function setTheme(mode) {

    if (mode === "dark") {

        link.href = "./dark.css";

    } else {

        link.href = "./light.css";

    }

    localStorage.setItem("theme-sazino", mode);
    change_icon(mode);

}

// load theme
const savedTheme = localStorage.getItem("theme-sazino") || "light";

setTheme(savedTheme);

// change theme
button.addEventListener("click", () => {

    const currentTheme = localStorage.getItem("theme-sazino");

    if (currentTheme === "light") {

        setTheme("dark");

    } else {

        setTheme("light");

    }

});