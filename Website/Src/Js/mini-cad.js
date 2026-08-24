function showContent() {
    // Hide all content divs
    document.getElementById("bracket-for-workbench").style.display = "none";

    // Show selected one
    let selected = document.getElementById("mini-cad-prjcts").value;
    if (selected) {
        document.getElementById(selected).style.display = "block";
    }
}