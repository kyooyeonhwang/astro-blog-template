const url = window.location.href;

// const 
// console.log(url.split('/'));

let params = new URLSearchParams(document.location.search);

console.log(params.get('lang'))
