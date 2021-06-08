
const form = {
    input0: document.getElementById('input0'),
    input1: document.getElementById('input1'),
    input2: document.getElementById('input2'),
    input3: document.getElementById('input3'),
    input4: document.getElementById('input4'),
    input5: document.getElementById('input5'),
    input6: document.getElementById('input6'),
    input7: document.getElementById('input7'),
    input8: document.getElementById('input8'),
    input9: document.getElementById('input9'),
    input10: document.getElementById('input10'),
    input11: document.getElementById('input11'),
    input12: document.getElementById('input12'),
    input13: document.getElementById('input13'),
    input14: document.getElementById('input14'),
    input15: document.getElementById('input15'),
    input16: document.getElementById('input16'),
    input17: document.getElementById('input17'),
    input18: document.getElementById('input18'),
    input19: document.getElementById('input19'),
    input20: document.getElementById('input20'),
    input21: document.getElementById('input21'),
    submit: document.getElementById('btnLoad'),
};
document.getElementById('btnLoad').addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);
        } catch (e) {
            console.error('Could not parse JSON!');
        }

        if (responseObject) {
            Swal.fire({
                title: 'Prediction!',
                text: responseObject['prediction'],
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }

    };

    request.open('get', 'http://career4hub.herokuapp.com/api/predict/?'+'input0='+form.input0.value+'&'+'input1='+form.input1.value+'&'+'input2='+form.input2.value+'&'+'input3='+form.input3.value+'&'+'input4='+form.input4.value+'&'+'input5='+form.input5.value+'&'+'input6='+form.input6.value+'&'+'input7='+form.input7.value+'&'+'input8='+form.input8.value+'&'+'input9='+form.input9.value+'&'+'input10='+form.input10.value+'&'+'input11='+form.input11.value+'&'+'input12='+form.input12.value+'&'+'input13='+form.input13.value+'&'+'input14='+form.input14.value+'&'+'input15='+form.input15.value+'&'+'input16='+form.input16.value+'&'+'input17='+form.input17.value+'&'+'input18='+form.input18.value+'&'+'input19='+form.input19.value+'&'+'input20='+form.input20.value+'&'+'input21='+form.input21.value);
    request.send();

});

