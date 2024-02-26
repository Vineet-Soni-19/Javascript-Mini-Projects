const form=document.querySelector('form')
// const height=parseInt(document.querySelector('#height').value)       // taking value without submitting the form so, as the page reload it will contain a value that may be empty

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML='Please give a valid height'
    }else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML='Please give a valid weight'
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            results.innerHTML=`<span>${bmi}</span><p>Under Weight</p>`
        }else if(bmi>24.6){
            results.innerHTML=`<span>${bmi}</span><p>Over Weight</p>`
        }else{
            results.innerHTML=`<span>${bmi}</span><p>Normal Weight</p>`
        }
    }
})