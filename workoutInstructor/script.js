async function fetchExercises() {
  const bodyPart = document.getElementById("bodyPart").value;
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=9`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "154a40065fmsh5f293ed8609b828p1cc5edjsnb747981c9cfe",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  });
  const data = await response.json();
  console.log(data);
  displayExercises(data);
}

function displayExercises(data) {
  const exerciseList = document.getElementById("exerciseList");
  exerciseList.innerHTML = "";
  data.forEach((exercise) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.classList.add("rounded-3");
    exerciseDiv.classList.add("card");
    exerciseDiv.innerHTML = `
        <h4 class="text-break ">${exercise.name}</h4>
        <div>
        <img class="rounded-3" src="${exercise.gifUrl}" alt="${exercise.name}">
        </div>
        <button class="btn btn-danger fw-bold mt-3 text-light">Instruction</button>
        `;
    exerciseDiv
      .querySelector("button")
      .addEventListener("click", PopulateModal.bind(null, exercise));
    exerciseList.appendChild(exerciseDiv);
  });
}

function PopulateModal(exercise) {
  //create modal
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
<div class="modal-dialog modal-dialog-scrollable">
<div class="modal-content bg-dark text-light">
  <div class="modal-header">
    <h5 class="modal-title text-capitalize fw-bold">${exercise.name}</h5>
    <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body bg-dark text-light">
  <p>
    <span class="fw-bold"> Body Part :- </span>${exercise.bodyPart}
    <br>
    <span class="fw-bold"> Equipment :- </span>${exercise.equipment}
    <br>
    <span class="fw-bold"> Instructions : </span>
    <ol>
    ${exercise.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
    </ol>

    </p>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary  text-light" data-bs-dismiss="modal">Close</button>
    </div>
    </div>
    </div>
    </div>
    `;
  document.body.appendChild(modal);
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}
fetchExercises();
