

const names = ["Happy","Nkosiphandule","Sithembiso","Andiswe","Sophie","Mduduzi","Wandile","Vusi","Precious","Selina","Kagisho","Mhlompheni","Lucky","Lebo","Khumbulani"]
const age = ["30","43","19","34","18","20","25","27","54","22","33","39","44","28","40"]
const display = document.getElementById("display");
for (let i= 0; i < names.length; i++ ) {
    display.innerHTML += "<li>" + names[i] + ", " + age[i] + "</li>";
}