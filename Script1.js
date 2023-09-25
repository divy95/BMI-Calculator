const form = document.querySelector('form')
// this usecase will give you empty value
// const height= parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please Give a valid height"
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please Give a valid Weight"
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>You BMI is: ${BMI}</span>`
        document.getElementById('#prediction')
        if(BMI<16){
            prediction.innerHTML="Severe Thinness"
        }else if(BMI>=16 && BMI<=17){
            prediction.innerHTML="Moderate thinnese" 
        }
        else if(BMI>=17 && BMI<=18.5){
            prediction.innerHTML="Mild thinnese" 
        }
        else if(BMI>18.5 && BMI<=25){
            prediction.innerHTML="Normal" 
        }
        else if(BMI>25 && BMI<=30){
            prediction.innerHTML="Overweight" 
        }
        else if(BMI>30 && BMI<=35){
            prediction.innerHTML="Obese Class 1" 
        }
    }

    //to fixed is used to show the value till 2 decimal numbers
    // show the result
});