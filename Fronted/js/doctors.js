const doctorList = document.getElementById("doctorList");

fetch("http://localhost:3000/api/doctors")
    .then(response => response.json())
    .then(doctors => {

        doctors.forEach(doctor => {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h2>${doctor.name}</h2>

                <p>
                    Specialization:
                    ${doctor.specialization}
                </p>

                <p>
                    Experience:
                    ${doctor.experience} years
                </p>

                <p>
                    Phone:
                    ${doctor.phone}
                </p>

                <p>
                    Email:
                    ${doctor.email}
                </p>
            `;

            doctorList.appendChild(card);

        });

    })
    .catch(error => {

        console.log("Error:", error);

    });