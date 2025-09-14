// let elem = document.querySelectorAll('.elem')

// elem.forEach(function(val){
//   val.addEventListener('mouseenter',function(){
//     val.childNodes[3].style.opacity = 1
//   })
//   val.addEventListener('mouseleave',function(){
//      val.childNodes[3].style.opacity = 0
//   })
//   val.addEventListener('mousemove',function(dets){
//     val.childNodes[3].style.left = dets.x+"px"
     
//   })
// })

var arr = [
  {dp:"https://images.unsplash.com/photo-1755278338891-e8d8481ff087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1757398313132-6a1a061adb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"

  },{
    dp:"https://plus.unsplash.com/premium_photo-1757423356664-e4a9a18c7f54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D",
    story:"https://plus.unsplash.com/premium_photo-1669828831467-bc0b867e2947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D"
  },{
    dp:"https://plus.unsplash.com/premium_photo-1747851578352-db1815623581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1756979962913-56647a904574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D"
  },{
    dp:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
  }

]

var story = document.querySelector('#storya')
var clutter = ""
arr.forEach(function(elem, idx){
 clutter += `<div class="storyan">
            <img id"${idx}" src="${elem.dp}" alt="">
        </div>`
  
})
story.innerHTML = clutter

story.addEventListener('click',function(){
  
  
  
})



