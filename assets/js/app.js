

let start_year = 2022
let years_label = document.querySelector(".years")
let year = (new Date).getFullYear()

if (year < start_year){
    year = (new Date).getUTCFullYear()
}

if (year == start_year){
    years_label.innerText = start_year
}
else{
    years_label.innerText = `${start_year} - ${year}`
}