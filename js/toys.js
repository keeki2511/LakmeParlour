function toys() {
    document.getElementById('parent_toys').style.display = 'block';
}
setTimeout(toys, 10000);

document.getElementById('close').onclick = function() {
    document.getElementById('parent_toys').style.display='none';
}