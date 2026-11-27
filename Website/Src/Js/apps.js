function showContent() {
    const selected = document.getElementById("apps").value;
    document.querySelectorAll(".project-panel").forEach((panel) => {
        panel.hidden = panel.id !== selected;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const projectId = window.location.hash.slice(1);
    const select = document.getElementById("apps");
    if (projectId && select && [...select.options].some((option) => option.value === projectId)) {
        select.value = projectId;
        showContent();
    }
});