// about
const aboutMenuItem = document.getElementById("about-menu-item");
const aboutContent = document.getElementById("about");

// experience
const expMenuItem = document.getElementById("exp-menu-item");
const expContent = document.getElementById("experience");

// experience
const projMenuItem = document.getElementById("proj-menu-item");
const projContent = document.getElementById("projects");

// education
const eduMenuItem = document.getElementById("edu-menu-item");
const eduContent = document.getElementById("education");

var currentTabContent = aboutContent;

const toggleContent = (toDisplay) => () => {
    currentTabContent.style.display = "None";
    toDisplay.style.display = "Block";
    currentTabContent = toDisplay;
}

aboutMenuItem.onclick = toggleContent(aboutContent);
expMenuItem.onclick = toggleContent(expContent);
projMenuItem.onclick = toggleContent(projContent);
eduMenuItem.onclick = toggleContent(eduContent);