function showPracticalProject() {
    const projectPanel = document.getElementById("voltage-divider");
    const selectedProject = document.getElementById("practical-projects-select").value;
    projectPanel.hidden = selectedProject !== "voltage-divider";
}
