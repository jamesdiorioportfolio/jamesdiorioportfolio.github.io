function showContent() {
    // Hide all content divs
    document.getElementById("tracescope").style.display = "none";

    // Show selected one
    let selected = document.getElementById("apps").value;
    if (selected) {
        document.getElementById(selected).style.display = "block";
    }
}