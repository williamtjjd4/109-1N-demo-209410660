function change(index){
    const p = document.getElementById('show');
    console.log('show',p);
    switch(index){
        case 1:
            p.innerHTML = '<iframe width=100% height=100% src="./w01-intro-pokemon/index.html" />';
            break;
        case 2:
        p.innerHTML = '<iframe width=100% height=100% src="./w01-intro-pokemon/pokemon.html" />';
            break;
        case 3:
        p.innerHTML = '<iframe width=100% height=100% src="./w02-imgGallery/imgGallery.html" />';
            break;
        case 4:
        p.innerHTML = '<iframe width=100% height=100% src="./w02-blog/blog.html" />';
            break;
        case 5:
        p.innerHTML = '<iframe width=100% height=100% src="./w03-div/div.html" />';
            break;
        case 6:
        p.innerHTML = '<iframe width=100% height=100% src="./w04/div_tku60.html" />';
            break;
        case 7:
        p.innerHTML = '<iframe width=100% height=100% src="./w07-ms-clone/w06拷貝/index.html" />'
        }
}
