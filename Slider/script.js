var models = [
    {
        name : 'BMW 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index = 0;
var slyatCount = models.length;
var interval;

var settings = {
    duration: '2000',
    random : true
};

init(settings);
 
document.querySelector('.fa-circle-arrow-left').addEventListener('click', function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-circle-arrow-right').addEventListener('click', function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.fa-solid').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval);
    });
});
document.querySelectorAll('.fa-solid').forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        init(settings);
    });
});

function init(settings){
    var prev;

    interval = setInterval(function() {
        if(settings.random) {
            do {
                index = Math.floor(Math.random() * slyatCount);
            } while (index == prev);
            prev = index;
        }
        else {
            if(slyatCount == index + 1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);

    }, settings.duration)
}

function showSlide(i) {
    index = i;

    if(i < 0){
        index = slyatCount - 1;
    }
    else if (i >= slyatCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}



