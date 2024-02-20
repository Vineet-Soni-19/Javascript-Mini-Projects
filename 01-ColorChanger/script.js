const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)      // event
        console.log(e.target)   //to get from where the event is fired
        const colorId=e.target.id;      //e.target => element that fired event
        switch(colorId){
            // case 'grey': body.style.backgroundColor=e.target.id;     //bcz id contains color name
            case 'grey': body.style.backgroundColor='grey'
            break;
            case 'white': body.style.backgroundColor='white'
            break;
            case 'blue': body.style.backgroundColor='blue'
            break;
            case 'yellow': body.style.backgroundColor='yellow'
            break;
        }
    })
})