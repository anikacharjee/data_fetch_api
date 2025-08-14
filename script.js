async function fetchData() {
    try{
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        const response = await fetch(apiUrl);

        if(!response.ok) {
            throw new Error(`Response Status ${response.status}`);
        }

        const data = await response.json();

        displayData(data)
    } catch(err) {
        console.error('Error :- ',err);
    }
}

function displayData(data) {
    const dataDisplay = document.getElementById('dataDisplay');

    dataDisplay.innerHTML = '';

    const table = document.createElement('table');
    dataDisplay.appendChild(table);

    const headers = ['ID', 'Name', 'Username', 'Email', 'Phone No', 'Website', 'Company Name'];
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    data.forEach(user => {
        const row = document.createElement('tr');
        const cells = [
            user.id,
            user.name,
            user.username,
            user.email,
            user.phone,
            user.website,
            user.company.name
        ];

        cells.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            row.appendChild(td);
        });

        table.appendChild(row);
    });
}

fetchData();




