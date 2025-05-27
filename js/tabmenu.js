document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabLinks span");
    const contents = document.querySelectorAll(".tabContent");

    tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");

        contents.forEach((c) => c.classList.remove("active"));
        tabs.forEach((t) => t.classList.remove("active"));

        tab.classList.add("active");
        const activeContent = document.querySelector(`.tabContent[data-tab="${target}"]`);
        if (activeContent) {
        activeContent.classList.add("active");
        }
    });
    });
});