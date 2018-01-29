/**
 * Created by ow on 2018/1/28.
 */
window.onload=function () {
        let n=0;
        let lis=document.querySelectorAll('.bannerpic li');
        let banner=document.querySelector('.bannertu')
        let right=document.querySelector('.jiantoudi.right')
        let left=document.querySelector('.jiantoudi.left')
        let cirs=document.querySelectorAll('.lunbodian li')
        function move() {
            n++;
            if (n>=lis.length) {
                n=0;
            }
            lis.forEach(function (dom, index) {
                dom.classList.remove('active');
                cirs[index].classList.remove('active')
            })
            lis[n].classList.add('active')
            cirs[n].classList.add('active')

        }
        let t=setInterval(move,2000)
        banner.onmouseover=function () {
            clearInterval(t)
        }
        banner.onmouseout=function () {
            t=setInterval(move,2000)
        }
        let flag=true
        right.onclick=function () {
            if(!flag){
                return
            }
            flag=false
            move()
        }
        left.onclick=function () {
            if(!flag){
                return
            }
            flag=false
            n--;
            if(n<0){
                n=lis.length-1
            }
            lis.forEach(function (dom, index) {
                dom.classList.remove('active');
                cirs[index].classList.remove('active')
            })
            lis[n].classList.add('active')
            cirs[n].classList.add('active')
        }

    cirs.forEach(function (val,index) {
        val.onclick=function () {
            if(!flag){
                return
            }
            flag=false
            lis.forEach(function (va,ind) {
                va.classList.remove('active')
                cirs[ind].classList.remove('active')
            })
            lis[index].classList.add('active')
            this.classList.add('active')
            n=index
        }
    })

    lis.forEach(function (dom) {
        dom.addEventListener('transitionend',function () {
            flag=true
        })
    })


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

