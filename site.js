window.addEventListener("load", includeHTML);
/**
 * Finds all elements with an include-html attribute and attampts an ajax call to append html contents
 */
function includeHTML() {
    var elements = document.querySelectorAll('[include-html]');
    elements.forEach((element) => {
        file = element.getAttribute("include-html");
        fetch(file).then(file => {
            file.text().then(content => {
                element.insertAdjacentHTML('afterend', content);
                element.remove();
            });
        });
        return;
    });
}