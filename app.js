const tableBody = document.getElementById('table-body')

let fligths = [
    {
        time: "08:08",
        destination: "OSLO",
        flight: "OS 144",
        gate: "B03",
        remarks: "ON TIME"
    },
    {
        time: "09:15",
        destination: "NEW YORK",
        flight: "NY 203",
        gate: "A01",
        remarks: "ON TIME"
    },
    {
        time: "09:45",
        destination: "BERLIN",
        flight: "BE 309",
        gate: "B01",
        remarks: "CANCELLED"
    },
    {
        time: "10:15",
        destination: "PARIS",
        flight: "FR 212",
        gate: "A05",
        remarks: "ON TIME"
    },
    {
        time: "10:45",
        destination: "LONDON",
        flight: "GB 122",
        gate: "B06",
        remarks: "DELAYED"
    },
    {
        time: "11:20",
        destination: "TORONTO",
        flight: "CA 040",
        gate: "B01",
        remarks: "CANCELLED"
    },
    {
        time: "12:05",
        destination: "HANNOVER",
        flight: "DE 444",
        gate: "A12",
        remarks: "ON TIME"
    }
]

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "BEIRUT"]
const remarks = ["ON TIME", "CANCELLED", "DELAYED"]
let hour = 15

function populateTable() {
    for (const flight of fligths) {
        const tableRow = document.createElement("tr")

        for(const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])

            for(const [index,letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() =>{
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "1234567890"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour

    if (hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }

    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    fligths.shift()
    fligths.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + " " + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp(), 2000)