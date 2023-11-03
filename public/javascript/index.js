const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      const characters = await charactersAPI.getFullList();
      const container = await document.querySelector(".characters-container");
      container.innerHTML = "";
      const html = await characters.forEach((element) => {
        container.innerHTML += `
            <div class="character-info">
              <div class="name">Character Name: ${element.name}</div>
              <div class="occupation">Character Occupation: ${
                element.occupation
              }</div>
              <div class="cartoon">Is a Cartoon? ${
                element.cartoon ? "Yes" : "No"
              }</div>
              <div class="weapon">Character Weapon: ${element.weapon}</div>
            </div>`;
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      event.preventDefault;
      const id = document.querySelector("input[name=character-id]").value;
      const character = await charactersAPI.getOneRegister(id);
      const container = await document.querySelector(".characters-container");
      container.innerHTML = "";
      container.innerHTML = `
            <div class="character-info">
              <div class="name">Character Name: ${character.name}</div>
              <div class="occupation">Character Occupation: ${
                character.occupation
              }</div>
              <div class="cartoon">Is a Cartoon? ${
                character.cartoon ? "Yes" : "No"
              }</div>
              <div class="weapon">Character Weapon: ${character.weapon}</div>
            </div>`;
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      event.preventDefault;
      const id = document.querySelector(
        "input[name=character-id-delete]"
      ).value;
      const character = await charactersAPI.deleteOneRegister(id);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault;
      const id = document.querySelector(
        "#edit-character-form input[name=chr-id]"
      ).value;
      const name = document.querySelector(
        "#edit-character-form input[name=name]"
      ).value;
      const occupation = document.querySelector(
        "#edit-character-form input[name=occupation]"
      ).value;
      const weapon = document.querySelector(
        "#edit-character-form input[name=weapon]"
      ).value;
      const cartoon = document.querySelector(
        "#edit-character-form input[name=weapon]"
      ).checked;
      const character = {
        id: id,
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon,
      };
      const newUser = await charactersAPI.updateOneRegister(character);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault;
      const name = document.querySelector(
        "#new-character-form input[name=name]"
      ).value;
      const occupation = document.querySelector(
        "#new-character-form input[name=occupation]"
      ).value;
      const weapon = document.querySelector(
        "#new-character-form input[name=weapon]"
      ).value;
      const cartoon = document.querySelector(
        "#new-character-form input[name=weapon]"
      ).checked;
      const character = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon,
      };
      const newUser = await charactersAPI.createOneRegister(character);
    });
});
