const form =
    document.getElementById("appointmentForm");


form.addEventListener("submit", async (event) => {

    event.preventDefault();


    const patient_id =
        Number(
            document.getElementById("patient_id").value
        );


    const doctor_id =
        Number(
            document.getElementById("doctor_id").value
        );


    const appointment_date =
        document.getElementById(
            "appointment_date"
        ).value;


    const appointment_time =
        document.getElementById(
            "appointment_time"
        ).value;


    const data = {

        patient_id: patient_id,

        doctor_id: doctor_id,

        appointment_date:
            appointment_date,

        appointment_time:
            appointment_time

    };


    try {

        const response = await fetch(
            "http://localhost:3000/api/appointments",
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify(data)

            }
        );


        const result =
            await response.json();


        document.getElementById(
            "message"
        ).textContent =
            result.message;


        form.reset();


    } catch (error) {

        console.log(error);

    }

});