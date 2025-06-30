import "../style/index.css";

function render(variables = {}) {
  let cover = `<div class="cover"><img src="${variables.background ||
    "https://images.unsplash.com/photo-1511974035430-5de47d3b95da"}" /></div>`;
  if (variables.includeCover === false || variables.includeCover === "false")
    cover = "<div class='cover'></div>";

  let socialClass = variables.socialMediaPosition || "position-left";

  let twitter = variables.twitter
    ? `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`
    : "";
  let github = variables.github
    ? `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`
    : "";
  let linkedin = variables.linkedin
    ? `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`
    : "";
  let instagram = variables.instagram
    ? `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`
    : "";

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL ||
        "https://randomuser.me/api/portraits/women/42.jpg"}" class="photo" />
      <h1>${variables.name || "Nombre"} ${variables.lastName || "Apellido"}</h1>
      <h2>${variables.role || "Rol"}</h2>
      <h3>${variables.city || "Ciudad"}, ${variables.country || "País"}</h3>
      <ul class="${socialClass}">
        ${twitter}
        ${github}
        ${linkedin}
        ${instagram}
      </ul>
    </div>
  `;
}

window.onload = () => {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(el => {
    el.addEventListener("change", e => {
      const attribute = e.target.getAttribute("for");
      let value = e.target.value;

      if (value === "") value = null;
      if (value === "true") value = true;
      if (value === "false") value = false;

      window.variables[attribute] = value;
      render(window.variables);
    });
  });
};
