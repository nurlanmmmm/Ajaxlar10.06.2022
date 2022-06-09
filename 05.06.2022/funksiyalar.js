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
    try {
        let userlerigetir = await ajaxlar.userler().get();
        for (let i = 0; i < userlerigetir.length; i++) {
            let userler = userlerigetir[i];
            let setirler = userlersetir(userler);
            $('#userler-body').append(setirler);
            
        }
    
    } catch (error) {
        alert('olmadi')
    }
   

}