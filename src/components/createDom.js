import '../assets/css/div.css'
import '../assets/css/title.less'
import '../assets/css/bg.css'
import bear from '../assets/images/bear.jpg'

let dom = document.createElement('div')

dom.textContent = 'Hello World'
dom.classList.add('content')

document.body.append(dom)

let title = document.createElement('h2')

title.textContent = 'title'
title.classList.add('title')

document.body.append(title)

let imgEl = document.createElement('img')
imgEl.src = bear
document.body.append(imgEl)

let imgBg = document.createElement('div')
imgBg.classList.add('bg')
document.body.append(imgBg)
