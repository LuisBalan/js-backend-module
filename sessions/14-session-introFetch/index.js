function loadKoders(){
    //url será el server
 const url = 'https://localhost:8080/koders';

 const koders = await fetch(url, {
     mode: 'cors'
 })

    alert(koders)
}