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
