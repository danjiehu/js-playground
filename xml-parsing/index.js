// ref: https://www.youtube.com/watch?v=VxKGVb0oOBw
let xmlContent = ""; // create an empty xml 
let tableBooks = document.querySelector("#books"); // tableBooks is the table with id books in the html file

fetch("books.xml").then(res => { // getting xml content from "books.xml"
    res.text().then(xml => { // getting file text
        xmlContent = xml;
        let parser = new DOMParser;
        let xmlDOM = parser.parseFromString(xmlContent, "application/xml"); // xmlDOM will contain the entire strucutre of the file "books.xml"

        let books = xmlDOM.querySelectorAll("book");

        books.forEach(bookXmlNode => {
            let row = document.createElement("tr");

            //author
            let td = document.createElement("td");
            td.innerText = bookXmlNode.children[0].innerHTML;
            row.appendChild(td);

            //title
            td = document.createElement("td");
            td.innerText = bookXmlNode.children[1].innerHTML;
            row.appendChild(td);

            //genre
            td = document.createElement("td");
            td.innerText = bookXmlNode.children[2].innerHTML;
            row.appendChild(td);

            //price
            td = document.createElement("td");
            td.innerText = bookXmlNode.children[3].innerHTML;
            row.appendChild(td);

            //publish_date
            td = document.createElement("td");
            td.innerText = bookXmlNode.children[4].innerHTML;
            row.appendChild(td);

            //description
            td = document.createElement("td");
            td.innerText = bookXmlNode.children[5].innerHTML;
            row.appendChild(td);

            tableBooks.children[1].appendChild(row);
        })
    })
})

// ref: https://yourblogcoach.com/export-html-table-to-csv-using-javascript/
// function def: html to csv
function htmlToCSV(html, filename) {
    let data = [];
    let rows = document.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll("td, th");

        for (let j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }

        data.push(row.join(","));
    }

    downloadCSVFile(data.join("\n"), filename);
}

// function def: downloadCSVFile
function downloadCSVFile(csv, filename) {
    var csv_file, download_link;

    csv_file = new Blob([csv], { type: "text/csv" });

    download_link = document.createElement("a");

    download_link.download = filename;

    download_link.href = window.URL.createObjectURL(csv_file);

    download_link.style.display = "none";

    document.body.appendChild(download_link);

    download_link.click();
}

document.getElementById("download-button").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
    htmlToCSV(html, "students.csv");
})