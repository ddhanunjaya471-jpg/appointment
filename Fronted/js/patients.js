const patientList =
    document.getElementById("patientList");


fetch("http://localhost:3000/api/patients")

    .then(response => {

        return response.json();

    })

    .then(patients => {

        patients.forEach(patient => {

            const card =
                document.createElement("div");

            card.className = "card";


            card.innerHTML = `

                <h2>${patient.name}</h2>

                <p>
                    Age: ${patient.age}
                </p>

                <p>
                    Gender: ${patient.gender}
                </p>

                <p>
                    Phone: ${patient.phone}
                </p>

                <p>
                    Email: ${patient.email}
                </p>

            `;


            patientList.appendChild(card);

        });

    })

    .catch(error => {

        console.log(error);

    });