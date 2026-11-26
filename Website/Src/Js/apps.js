function showContent() {
    const selected = document.getElementById("apps").value;
    document.querySelectorAll(".project-panel").forEach((panel) => {
        panel.hidden = panel.id !== selected;
    });
}
