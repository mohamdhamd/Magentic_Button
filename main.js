let btn = document.querySelectorAll(".btn").forEach(btn => {
    btn.onmousemove = function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        // console.log(x +"and "+y)
        let btnWidth = btn.clientWidth;
        let btnHeight = btn.clientHeight;
        // console.log(btnWidth + "and " + btnHeight)
        let transX = (x - btnWidth / 2)
        let transY = (y - btnHeight / 2)
        // console.log(transX + "and " + transY)
        btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`

        // /////// about color
        let mx =e.pageX - btn.offsetLeft; 
        let my =e.pageY - btn.offsetTop ;
        btn.style.setProperty('--x',mx+'px')
        btn.style.setProperty('--y',my +'px')

    }
    btn.onmouseout = function (e) {
        btn.style.transform = ``
    }


})