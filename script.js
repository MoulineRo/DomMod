
const addElement = document.getElementById("addElementBtn")
const toggleClass = document.getElementById("toggleClassBtn")
const replaceElement = document.getElementById("replaceElementBtn")
const insertFragment = document.getElementById("insertFragmentBtn")
const pageContent = document.getElementById("content")


const addElementFn = () => {
    const para = document.createElement("p");
    para.innerText = "This is a sample paragraph.";
    pageContent.appendChild(para)
}

const toggleClassFn = () => {
    const pTag = pageContent.getElementsByTagName("p")
    for (let i = 0; i < pTag.length; i++) {
         pTag[i].classList.toggle("highlight")
    }
}

const replaceElementFn =() => {
    const pTag = pageContent.getElementsByTagName("p")
    pTag.item(0).innerText = "Hello world"
}

const insertFragmentFn = () => {
    const documentFragment = document.createElement("div")
    documentFragment.className = "second-content"
    documentFragment.innerText = "second fragment"

    const pageContent = document.getElementById("content")
    pageContent.insertBefore(documentFragment, pageContent.children[0])
}




addElement.addEventListener("click", addElementFn);
toggleClass.addEventListener("click", toggleClassFn);
replaceElement.addEventListener("click", replaceElementFn);
insertFragment.addEventListener("click", insertFragmentFn);
document.addEventListener("keydown", () => console.log("keydown"))
document.addEventListener("keyup", () => console.log("keyup"))


