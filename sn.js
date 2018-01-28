/**
 * Created by ow on 2018/1/28.
 */
window.onload=function () {
        let n=0;
        let lis=document.querySelectorAll('.bannerpic li');
        let banner=document.querySelector('.bannerpic')
        function move() {
            n++;
            if (n>=lis.length) {
                n=0;
            }
            lis.forEach(function (dom, index) {
                dom.classList.remove('active');
            })
            lis[n].classList.add('active')

        }
        let t=setInterval(move,2000)
        banner.onmouseover=function () {
            clearInterval(t)
        }
        banner.onmouseout=function () {
            t=setInterval(move,2000)
        }
        document.querySelector('.jiantoudi.right').onclick=function () {
            move()
        }
        document.querySelector('.jiantoudi.left').onclick=function () {
            n--;
            if(n<0){
                n=lis.length-1
            }
            lis.forEach(function (dom, index) {
                dom.classList.remove('active');
            })
            lis[n].classList.add('active')
        }

    let nav=document.querySelectorAll('.djh-top .dajuhui_top_center');
    let list=document.querySelectorAll('.dajuhui .djh-bottom')
    nav.forEach(function (val,index) {
        val.onmouseover=function () {
            nav.forEach(function (a,b) {
                a.classList.remove('active1')
                list[b].classList.remove('activebtm')
            })
            this.classList.add('active1')
            list[index].classList.add('activebtm')
        }
    })
    }

