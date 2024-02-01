const stylesheetElement = document.querySelector('link[rel="stylesheet"]');
const currentStylesheet = document.cookie
    .split("; ")
    .find((row) => row.startsWith("stylesheet="))
    ?.split("=")[1];
if (currentStylesheet) {
    toggleStylesheet(currentStylesheet);
}

window.addEventListener('load', () => {
    const classToggle = document.querySelector('.ClassToggle');
    const stylesheetToggle = document.querySelector('.StylesheetToggle select');
    if (stylesheetToggle) {
        if (currentStylesheet) {
            stylesheetToggle.value = currentStylesheet;
        }
        stylesheetToggle.addEventListener('input', (e) => {
            toggleStylesheet(e.target.value);
        });
    }
    if (classToggle) {
        classToggle.addEventListener('input', (e) => {
            toggleClassElements(e.target.name, e.target.checked);
        });
    }    
})

function toggleClassElements(name, isVisible) {
    const classElements = document.querySelectorAll(`[data-class="${ name }"]`);
    classElements.forEach((classElement) => {
        if (isVisible) {
            classElement.style.display = "";
        } else {
            classElement.style.display = "none";
        }
    });
}

function toggleStylesheet(url) {
    stylesheetElement.href = url;
    document.cookie = `stylesheet=${ url }; SameSite=Lax; path=/`; 
}