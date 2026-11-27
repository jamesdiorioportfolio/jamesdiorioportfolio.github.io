function showPracticalProject() {
    const selectedProject = document.getElementById("project-select").value;
    document.querySelectorAll(".project-panel").forEach((panel) => {
        panel.hidden = panel.id !== selectedProject;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const projectId = window.location.hash.slice(1);
    const select = document.getElementById("project-select");
    if (projectId && select && [...select.options].some((option) => option.value === projectId)) {
        select.value = projectId;
        showPracticalProject();
    }
});