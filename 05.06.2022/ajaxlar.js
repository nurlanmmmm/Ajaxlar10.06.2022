let domain = 'https://jsonplaceholder.typicode.com/';
let link = (x) => domain+x;

function postlar(){
    return   {
        get: function () {
           return $.ajax({
               url:link('posts'),
               method:'get'       
           })
                     
        },
        delete: function (id) {
         return $.ajax({
             url:link('posts/'+id),
             method:'delete'
         })   
        }
    }
}
function userler() {
    let objuser={};
    objuser.get = ()=> {
        return $.ajax({
            url:link('users'),
            method:'get'
        })
    }
    objuser.delete =(id)=> {
        return $.ajax({
            url:link('users/' + id),
            method:'delete'
        })
    }
    return objuser;
}