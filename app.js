let myStudents = ["ali", "omar", "anas"]
let myStudentsMarks = [90, 40, 50]

function markCalculate(params) {

    for (let i = 0; i <= myStudents.length; i++) {

        if (myStudentsMarks[i] < 50) {
            console.log("sorry "+ myStudents[i] + " you scored "+ myStudentsMarks[i]+ " and you have failed")

        }

        else if (myStudentsMarks[i] >= 50) {
            console.log("congradulations "+ myStudents[i] + " you scored "+ myStudentsMarks[i]+ " and you have passed")
        }

        else {
            console.log("plz enter valid data")
        }

    }




}

markCalculate()
