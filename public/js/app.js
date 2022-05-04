const url = window.location.href;

// const 
// console.log(url.split('/'));

let params = new URL(window.location.href);
let lang = params.searchParams.get('lang');
console.log(lang)

// console.log(langChange)
// console.log(document.location)
