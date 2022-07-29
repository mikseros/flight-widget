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
        remarks: "ON TIME"
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
        remarks: "ON TIME"
    },
    {
        time: "11:20",
        destination: "TORONTO",
        flight: "CA 040",
        gate: "B01",
        remarks: "ON TIME"
    },
    {
        time: "12:05",
        destination: "HANNOVER",
        flight: "DE 444",
        gate: "A12",
        remarks: "ON TIME"
    }
]

function populateTable() {
    for (const flight of fligths) {
        const tableRow = document.createElement("tr")

        for(const flightDetail in flight) {
            const tableCell = document.createElement("td")
            tableCell.innerText = flight[flightDetail]
            tableRow.append(tableCell)
        }
        
        tableBody.append(tableRow)
    }
}

populateTable()