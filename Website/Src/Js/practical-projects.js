function showPracticalProject() {
    const selectedProject = document.getElementById("project-select").value;
    document.querySelectorAll(".project-panel").forEach((panel) => {
        panel.hidden = panel.id !== selectedProject;
    });
}
