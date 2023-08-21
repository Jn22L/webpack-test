import photo from "./images/logo.jpg";
import photo2 from "./images/logo2.jpg";
import sytles from "./user.css";

export default function User({ name }) {
  const li = document.createElement("li");
  li.classList.add("user");
  li.addEventListener("click", () => {
    alert(name);
  });
  li.innerHTML = `
        <img src="${photo}" alt="${name}" />
        <img src="${photo2}" alt="${name}" />
        ${name}
    `;
  return li;
}
