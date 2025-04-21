function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    /* ou usar */
    //pegar a tag img
    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
       img.setAttribute('src', 'assets/Avatarwhite.png')
    } else {
        img.setAttribute('src', 'assets/avatar.png')
    }




    // substituir a imagem

}