// Select all tabs
const tabs = document.querySelectorAll(".tab");

// Select all tab contents
const contents = document.querySelectorAll(".tab-content");

// Add click event to every tab
tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove active class from all tabs
        tabs.forEach(t => {
            t.classList.remove("active");
        });

        // Remove active class from all contents
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // Activate the clicked tab
        tab.classList.add("active");

        // Get the corresponding content ID
        const targetId = tab.dataset.tab;

        // Display the corresponding content
        document.getElementById(targetId).classList.add("active");

    });

});
