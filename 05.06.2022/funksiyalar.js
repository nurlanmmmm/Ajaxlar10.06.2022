function userlercedveli(){
    return ` <table class="table table-bordered table-hower">
    <thead>
        <tr>
            <th>ad</th>
            <th>email</th>
            <th>seher</th>
            <th>sirket</th>
            <th>telefon </th>
        </tr>
    </thead>
    <tbody id = "userler-body"></tbody>
</table>`
}

function userlersetir(x) {
    return `   <tr>
    <td>${x.name}</td>
    <td>${x.email}</td>
    <td>${x.address.city}</td>
    <td>${x.company.name}</td>
    <td>${x.phone}</td>
</tr>`
    
}

async function userlercedveliniduzelt(){
    let cedvel = userlercedveli();
    $('#userler').empty();
    $('#userler').append(cedvel);
    let userlerigetir = await 
}