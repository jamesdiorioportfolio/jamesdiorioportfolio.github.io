function showPracticalProject() {
    const selectedProject = document.getElementById("practical-projects-select").value;
    document.querySelectorAll(".practical-project-panel").forEach((panel) => {
        panel.hidden = panel.id !== selectedProject;
    });
}
