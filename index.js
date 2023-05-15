const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

var current_color
var colors_option_1 = document.getElementById('option_1')
var colors_option_2 = document.getElementById('option_2')
var colors_option_3 = document.getElementById('option_3')
var colors_option_4 = document.getElementById('option_4')
var colors_option_5 = document.getElementById('option_5')
var colors_option_6 = document.getElementById('option_6')
var colors_option_7 = document.getElementById('option_7')
var colors_option_8 = document.getElementById('option_8')
var color_sample = document.getElementById('color_sample')
var color_sample_text = color_sample.innerHTML
var changed_sample_text
var scale = 0.6
var increase = 30
var diente_id = 1

var trapecios = [

]

function generar_diente(posX, posY) //100,0
{
    var point_A = [posX * scale + increase, posY * scale + increase] //90 30
    var point_B = [(point_A[0] + (100 * scale)), point_A[1]] //150 30
    var point_C = [(point_B[0] - (100 * scale) / 4), (point_B[1] + (100 * scale) / 2)] //135 60
    var point_D = [(point_C[0] - (100 * scale) / 2), point_C[1]] //105 60 
    var point_E = [point_D[0], point_D[1] + (100 * scale) / 2] //105 90
    var point_F = [point_A[0], point_E[1] + (100 * scale) / 2] //90 120
    var point_G = [point_C[0], point_E[1]] //135 90
    var point_H = [point_B[0], point_F[1]] //150 120

    var figure_1 = {}
    figure_1.diente_id = diente_id
    figure_1.type = 1
    figure_1.color = 'white'
    figure_1.x1 = point_A[0]
    figure_1.y1 = point_A[1]
    figure_1.x2 = point_B[0]
    figure_1.y2 = point_B[1]
    figure_1.x3 = point_C[0]
    figure_1.y3 = point_C[1]
    figure_1.x4 = point_D[0]
    figure_1.y4 = point_D[1]

    var figure_2 = {}
    figure_2.diente_id = diente_id
    figure_2.type = 2
    figure_2.color = 'white'
    figure_2.x1 = point_B[0]
    figure_2.y1 = point_B[1]
    figure_2.x2 = point_H[0]
    figure_2.y2 = point_H[1]
    figure_2.x3 = point_G[0]
    figure_2.y3 = point_G[1]
    figure_2.x4 = point_C[0]
    figure_2.y4 = point_C[1]

    var figure_3 = {}
    figure_3.diente_id = diente_id
    figure_3.type = 3
    figure_3.color = 'white'
    figure_3.x1 = point_H[0]
    figure_3.y1 = point_H[1]
    figure_3.x2 = point_F[0]
    figure_3.y2 = point_F[1]
    figure_3.x3 = point_E[0]
    figure_3.y3 = point_E[1]
    figure_3.x4 = point_G[0]
    figure_3.y4 = point_G[1]

    var figure_4 = {}
    figure_4.diente_id = diente_id
    figure_4.type = 4
    figure_4.color = 'white'
    figure_4.x1 = point_F[0]
    figure_4.y1 = point_F[1]
    figure_4.x2 = point_A[0]
    figure_4.y2 = point_A[1]
    figure_4.x3 = point_D[0]
    figure_4.y3 = point_D[1]
    figure_4.x4 = point_E[0]
    figure_4.y4 = point_E[1]

    var figure_5 = {}
    figure_5.diente_id = diente_id
    figure_5.type = 5
    figure_5.color = 'white'
    figure_5.x1 = point_D[0]
    figure_5.y1 = point_D[1]
    figure_5.x2 = point_C[0]
    figure_5.y2 = point_C[1]
    figure_5.x3 = point_G[0]
    figure_5.y3 = point_G[1]
    figure_5.x4 = point_E[0]
    figure_5.y4 = point_E[1]

    diente_id++;
    trapecios.push(figure_1)
    trapecios.push(figure_2)
    trapecios.push(figure_3)
    trapecios.push(figure_4)
    trapecios.push(figure_5)

}

function generate_All() {
    var posX = 0
    var posY = 100

    for (let i = 0; i < 16; i++) {
        generar_diente(posX, posY)
        console.log(`i = ${i} `, trapecios)
        posX = (trapecios[i * 5].x2 - increase) / scale
        posY = (trapecios[i * 5].y2 - increase) / scale
    }

    posX = 0, posY = 500
    for (let i = 16; i < 32; i++) {
        generar_diente(posX, posY)
        console.log(`i = ${i} `, trapecios)
        posX = (trapecios[i * 5].x2 - increase) / scale
        posY = (trapecios[i * 5].y2 - increase) / scale
    }
}



colors_option_1.addEventListener("click", () => {
    current_color = 'yellow'
    changed_sample_text = color_sample_text.replace(/█/g, `<span style="color:${current_color};">█</span>`)
    color_sample.innerHTML = changed_sample_text;
})

colors_option_2.addEventListener("click", () => {
    current_color = 'red'
    changed_sample_text = color_sample_text.replace(/█/g, `<span style="color:${current_color};">█</span>`)
    color_sample.innerHTML = changed_sample_text;
})

colors_option_3.addEventListener("click", () => {
    current_color = 'blue'
    changed_sample_text = color_sample_text.replace(/█/g, `<span style="color:${current_color};">█</span>`)
    color_sample.innerHTML = changed_sample_text;
})

colors_option_4.addEventListener("click", () => {
    current_color = 'green'
    changed_sample_text = color_sample_text.replace(/█/g, `<span style="color:${current_color};">█</span>`)
    color_sample.innerHTML = changed_sample_text;
})

colors_option_5.addEventListener("click", () => {
    current_color = 'black'
    changed_sample_text = color_sample_text.replace(/█/g, `<span style="color:${current_color};">█</span>`)
    color_sample.innerHTML = changed_sample_text;
})

colors_option_6.addEventListener("click", () => {
    current_color = 'pink'
    changed_sample_text = color_sample_text.replace(/█/g, `<span style="color:${current_color};">█</span>`)
    color_sample.innerHTML = changed_sample_text;
})

colors_option_7.addEventListener("click", () => {
    current_color = 'orange'
    changed_sample_text = color_sample_text.replace(/█/g, `<span style="color:${current_color};">█</span>`)
    color_sample.innerHTML = changed_sample_text;
})

colors_option_8.addEventListener("click", () => {
    current_color = 'white'
    changed_sample_text = color_sample_text.replace(/█/g, `<span style="color:${current_color};">█</span>`)
    color_sample.innerHTML = changed_sample_text;
})


function draw() {

    trapecios.forEach((e => {
        context.beginPath();
        context.moveTo(e.x1, e.y1);
        context.lineTo(e.x2, e.y2);
        context.lineTo(e.x3, e.y3);
        context.lineTo(e.x4, e.y4);
        context.closePath();

        context.fillStyle = e.color;
        context.fill();

        // Borde del trapecio
        context.lineWidth = 1;
        context.strokeStyle = '#000000';
        context.stroke();

        // context.font = '12px Arial';
        // context.fillStyle = '#000000';
        // context.fillText(`(${e.x1}, ${e.y1})`, e.x1, e.y1);
        // context.fillText(`(${e.x2}, ${e.y2})`, e.x2, e.y2);
        // context.fillText(`(${e.x3}, ${e.y3})`, e.x3, e.y3);
        // context.fillText(`(${e.x4}, ${e.y4})`, e.x4, e.y4);
    }))

}



// Agregar interacción al hacer clic en el trapecio
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
    isPointInTrapezoid(clickX, clickY)
    console.log('cX', clickX, 'cY', clickY)
});

function isPointInTrapezoid(x, y) {

    trapecios.forEach(e => {
        if ((e.type == 1 || e.type == 5) && x >= e.x1 && x <= e.x2 && y >= e.y1 && y <= e.y3) {
            e.color = current_color
            draw()
            return
        } else if ((e.type == 2) && x >= e.x4 && x < e.x1 && y >= e.y4 && y <= e.y3) {
            e.color = current_color
            draw()
            return
        } else if (e.type == 3 && x >= e.x2 && x <= e.x1 && y >= e.y4 && y <= e.y1) {
            e.color = current_color
            draw()
            return
        } else if (e.type == 4 && x >= e.x1 && x <= e.x4 && y >= e.y3 && y <= e.y4) {
            e.color = current_color
            draw()
            return
        }
    })

}

function tomarCapturaYDescargar() {
    var area = document.getElementById('myCanvas');
    html2canvas(area).then(function(canvas) {
        var imagenData = canvas.toDataURL('image/png');
        var enlace = document.createElement('a');
        enlace.href = imagenData;
        enlace.download = 'Odontograma.png';
        enlace.click();
    });
}


generate_All()
draw()