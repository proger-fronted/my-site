/* const project = document.querySelector("[data-js-project]")
const projectScroll = document.querySelector("[data-js-project-scroll]")
const stack = document.querySelector("[data-js-stack]")
const stackScroll = document.querySelector("[data-js-stack-scroll]")



project.addEventListener('click', (event) => {
    projectScroll.scrollIntoView({
        behavior: 'smooth'
    })
})
stack.addEventListener('click', (event) => {
    stackScroll.scrollIntoView({
        behavior: 'smooth'
    })
}) */

    document.querySelector("[data-js-project]").addEventListener("click", ()=> {
    document.querySelector("[data-js-project-scroll]").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("[data-js-stack]").addEventListener("click", ()=> {
    document.querySelector("[data-js-stack-scroll]").scrollIntoView({ behavior: "smooth" });
});