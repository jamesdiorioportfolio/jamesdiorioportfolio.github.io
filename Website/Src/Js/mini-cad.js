function showContent() {
    // Hide all content divs
    document.getElementById("bracket-for-workbench").style.display = "none";
    document.getElementById("iphone-holder").style.display = "none";
    // Show selected one
    let selected = document.getElementById("mini-cad-prjcts").value;
    if (selected) {
        document.getElementById(selected).style.display = "flex";
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const projectId = window.location.hash.slice(1);
    const select = document.getElementById("mini-cad-prjcts");
    if (projectId && select && [...select.options].some((option) => option.value === projectId)) {
        select.value = projectId;
        showContent();
    }
});