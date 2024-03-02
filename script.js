// Menu 
let menu =
  document.querySelector('.menu')
let menu_box =
  document.querySelector('.menu_box')
let div1 =
  document.querySelector('.div1')
let div2 =
  document.querySelector('.div2')
let div3 =
  document.querySelector('.div3')

menu.addEventListener('click', closemenu)
function closemenu() {
  if (div1.style.transform === 'rotate(0deg)') {
    div1.style.transform = 'rotate(50deg)';
    div1.style.top = '7px';
    div2.style.opacity = '0';
    div3.style.transform = 'rotate(-50deg)';
    div3.style.bottom = '7px';
    menu_box.style.left = '0'
  } else {
    div1.style.transform = 'rotate(0deg)';
    div1.style.top = '0px';
    div2.style.opacity = '1';
    div3.style.transform = 'rotate(0deg)';
    div3.style.bottom = '0px';
    menu_box.style.left = '-50%'
  }
}

let home =
  document.querySelector('.Home')
let adkar =
  document.querySelector('.Adkar')
let home_btn =
  document.querySelector('.home_btn')
let adkar_btn =
  document.querySelector('.adkar_btn')
let quran_btn =
  document.querySelector('.quran_btn')
let quran =
  document.querySelector('.quran')
let app_logo =
  document.querySelector('.app_logo')
let tasabih =
  document.querySelector('.tasabih')
let tasabih_btn =
  document.querySelector('.tasabih_btn')
let alahadit =
  document.querySelector('.alahadit')
let ahadit_btn =
  document.querySelector('.ahadit_btn')
let tafasir =
  document.querySelector('.tafasir')
let tafasir_btn =
  document.querySelector('.tafasir_btn')
  
home_btn.addEventListener('click', () => {
  setTimeout(() => {
    home.style.display = 'inline-block'
    adkar.style.display = 'none'
    quran.style.display = 'none'
    tasabih.style.display = 'none'
    alahadit.style.display = 'none'
    tafasir.style.display = 'none'
    app_logo.textContent = 'الصفحة الرئيسية'
  },200)
  closemenu()
})
adkar_btn.addEventListener('click', () => {
  setTimeout(() => {
    home.style.display = 'none'
    adkar.style.display = 'inline-block'
    quran.style.display = 'none'
    tasabih.style.display = 'none'
    alahadit.style.display = 'none'
    tafasir.style.display = 'none'
    app_logo.textContent = 'الأذكار'
  },200)
  closemenu()
})
quran_btn.addEventListener('click', () => {
  setTimeout(() => {
    home.style.display = 'none'
    adkar.style.display = 'none'
    quran.style.display = 'inline-block'
    tasabih.style.display = 'none'
    alahadit.style.display = 'none'
    tafasir.style.display = 'none'
    app_logo.textContent = "القرآن الكريم"
  },200)
  closemenu()
})
tasabih_btn.addEventListener('click', () => {
  setTimeout(() => {
    home.style.display = 'none'
    adkar.style.display = 'none'
    quran.style.display = 'none'
    tasabih.style.display = 'grid'
    alahadit.style.display = 'none'
    tafasir.style.display = 'none'
    app_logo.textContent = "التسابيح"
  }, 200)
  closemenu()
}) 
ahadit_btn.addEventListener('click', () => {
  setTimeout(() => {
    home.style.display = 'none'
    adkar.style.display = 'none'
    quran.style.display = 'none'
    tasabih.style.display = 'none'
    alahadit.style.display = 'flex'
    tafasir.style.display = 'none'
    app_logo.textContent = "الأحاديث"
  }, 200)
  closemenu()
})
tafasir_btn.addEventListener('click', () => {
  setTimeout(() => {
    home.style.display = 'none'
    adkar.style.display = 'none'
    quran.style.display = 'none'
    tasabih.style.display = 'none'
    alahadit.style.display = 'none'
    tafasir.style.display = 'flex'
    app_logo.textContent = "التفاسير"
  }, 200)
  closemenu()
})

// user img 
let user_img = 
  document.querySelector('.user_img')
let user_img2 =
  document.querySelector('.user_img2 img')
function changeimg(input) {
  let theimg = input.files[0]
  if (theimg) {
    let alkari2 = new FileReader()
  
    alkari2.onload = function(e) {
      user_img.src = e.target.result
      user_img2.src = e.target.result
    }
    alkari2.readAsDataURL(theimg)
  }
}

// Time 
let time_box =
  document.querySelector('.time_box')
let theDate =
  document.querySelector('.time span:last-child')
setInterval(() => {
  let date = new Date()
  let H = date.getHours()
  let M = date.getMinutes()
  let S = date.getSeconds()
  let day = date.getDate()
  let mon = date.getMonth() + 1
  let year = date.getFullYear()
  let myday = (H > 7 && H < 18) ? 'AM' : 'PM'
  if (H < 10) {
    H = '0' + H
  }
  if (M < 10) {
    M = '0' + M
  }
  if (S < 10) {
    S = '0' + S
  }
  time_box.textContent = H + ':' + M + ':' + S + ' ' + myday
  if (day < 10) {
    day = '0' + day
  }
  if (mon < 10) {
    mon = '0' + mon
  }
  theDate.textContent = day + '/' + mon + '/' + year
  
// Weather 
let img_night =
  document.querySelector('.Weather img:first-child')
let img_day =
  document.querySelector('.Weather img:last-child')
  if ((H > 7 && H < 18)) {
    img_day.style.display = 'flex'
    img_night.style.display = 'none'
  } else {
    img_day.style.display = 'none'
    img_night.style.display = 'flex'
  }
})

// Slat time
let date2 = new Date()
let day = date2.getDate()
let mon = date2.getMonth() + 1
let year = date2.getFullYear()
if (day < 10) {
  day = '0' + day
}
if (mon < 10) {
  mon = '0' + mon
}
let url = `https://api.aladhan.com/v1/timingsByCity/${day}-${mon}-${year}?city=guercif&country=morocco`
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    let fajr =
      document.querySelector('.fajr')
    let dohr =
      document.querySelector('.dohr')
    let al3ast =
      document.querySelector('.al3ast')
    let ma4rib =
      document.querySelector('.ma4rib')
    let al3icha2 =
      document.querySelector('.al3icha2')
    fajr.textContent = data.data.timings.Fajr
    dohr.textContent = data.data.timings.Dhuhr
    al3ast.textContent = data.data.timings.Asr
    ma4rib.textContent = data.data.timings.Maghrib
    al3icha2.textContent = data.data.timings.Isha
    
    let nx_name =
      document.querySelector('.nx_name')
    let nx_time =
      document.querySelector('.nx_time')
    setInterval(() => {
      let date = new Date()
      let H = date.getHours()
      let M = date.getMinutes()
      let time_now = H + ':' + M
      let fajr = data.data.timings.Fajr
      let dohr = data.data.timings.Dhuhr
      let asr = data.data.timings.Asr
      let ma4rib = data.data.timings.Maghrib
      let isha = data.data.timings.Isha
      if (time_now > fajr && time_now <= dohr) {
        nx_name.textContent = 'الظهر'
        nx_time.textContent = dohr
      }
      if (time_now > dohr && time_now < asr) {
        nx_name.textContent = 'العصر'
        nx_time.textContent = asr
      }
      if (time_now > asr && time_now < ma4rib) {
        nx_name.textContent = 'المغرب'
        nx_time.textContent = ma4rib
      }
      if (time_now > ma4rib && time_now < isha) {
        nx_name.textContent = 'العشاء'
        nx_time.textContent = isha
      }
      if (time_now > isha) {
        nx_name.textContent = 'الفجر'
        nx_time.textContent = fajr
      }
    })
  })
  .catch(error => {
    console.error('Fetch error:', error);
  },1000);

// salat alarm
let adan =
  document.querySelector('.adan')
function palyAdan() {
  adan.play()
}
function pauseAdan() {
  adan.pause()
}

let active1 = 
  document.querySelector('.active1')
let noActive1 =
  document.querySelector('.noActive1')
  
noActive1.addEventListener('click', () => {
  noActive1.style.display = 'none'
  active1.style.display = 'flex'
})
active1.addEventListener('click', () => {
  active1.style.display = 'none'
  noActive1.style.display = 'flex'
})
let date = new Date()
let H = date.getHours()
let M = date.getMinutes()
let time_now = H + ':' + M
let fajr =
  document.querySelector('.fajr')
let dohr =
  document.querySelector('.dohr')
let al3ast =
  document.querySelector('.al3ast')
let ma4rib =
  document.querySelector('.ma4rib')
let al3icha2 =
  document.querySelector('.al3icha2')

setInterval(() => {
  if (active1.style.display === 'flex' && fajr.textContent === time_now) {
    palyAdan()
  } else {
    pauseAdan()
  }
})

let active2 =
  document.querySelector('.active2')
let noActive2 =
  document.querySelector('.noActive2')

noActive2.addEventListener('click', () => {
  noActive2.style.display = 'none'
  active2.style.display = 'flex'
})
active2.addEventListener('click', () => {
  active2.style.display = 'none'
  noActive2.style.display = 'flex'
})
setInterval(() => {
  if (active2.style.display === 'flex' && dohr.textContent === time_now) {
    palyAdan()
  } else {
    pauseAdan()
  }
})

let active3 =
  document.querySelector('.active3')
let noActive3 =
  document.querySelector('.noActive3')

noActive3.addEventListener('click', () => {
  noActive3.style.display = 'none'
  active3.style.display = 'flex'
})
active3.addEventListener('click', () => {
  active3.style.display = 'none'
  noActive3.style.display = 'flex'
})
setInterval(() => {
  if (active3.style.display === 'flex' && asr.textContent === time_now) {
    let adan_message =
    document.createElement('div')
    adan_message.className = 'adan_message'
    let div_1 = 
    document.createElement('div')
    div_1.textContent = 'حان وقت صلاة العصر'
    adan_message.appendChild(div_1)
    let div_2 =
    document.createElement('div')
    div_2.className = 'adan_pause'
    adan_message.appendChild(div_2)
    let div_2_span =
    document.createElement('div')
    div_2_span.setAttribute('onclick', 'pauseAdan()')
    div_2_span.textContent = 'حسنا'
    div_2.appendChild(div_2_span)
    body.appendChild(adan_message)
    palyAdan()
  } else {
    pauseAdan()
  }
})

let active4 =
  document.querySelector('.active4')
let noActive4 =
  document.querySelector('.noActive4')

noActive4.addEventListener('click', () => {
  noActive4.style.display = 'none'
  active4.style.display = 'flex'
})
active4.addEventListener('click', () => {
  active4.style.display = 'none'
  noActive4.style.display = 'flex'
})
setInterval(() => {
  if (active4.style.display === 'flex' && ma4rib.textContent === time_now) {
    palyAdan()
  } else {
    pauseAdan()
  }
})

let active5 =
  document.querySelector('.active5')
let noActive5 =
  document.querySelector('.noActive5')

noActive5.addEventListener('click', () => {
  noActive5.style.display = 'none'
  active5.style.display = 'flex'
})
active5.addEventListener('click', () => {
  active5.style.display = 'none'
  noActive5.style.display = 'flex'
})
setInterval(() => {
  if (active5.style.display === 'flex' && al3icha2.textContent === time_now) {
    palyAdan()
  } else {
    pauseAdan()
  }
})

// القارئ القرآن الكريم
let asowar = 
[
{
  id: 0,
  name: "اختر السورة",
},
{
id: 1,
name: "الفاتحة",
link: "https://server6.mp3quran.net/akdr/001.mp3"
}
,{
id: 2,
name: "البقرة",
link: "https://server6.mp3quran.net/akdr/002.mp3"
}
,{
id: 3,
name: "آل عمران",
link: "https://server6.mp3quran.net/akdr/003.mp3"
}
,{
id: 4,
name: "النساء",
link: "https://server6.mp3quran.net/akdr/004.mp3"
}
,{
id: 5,
name: "المائدة",
link: "https://server6.mp3quran.net/akdr/005.mp3"
}
,{
id: 6,
name: "الأنعام",
link: "https://server6.mp3quran.net/akdr/006.mp3"
}
,{
id: 7,
name: "الأعراف",
link: "https://server6.mp3quran.net/akdr/007.mp3"
}
,{
id: 8,
name: "الأنفال",
link: "https://server6.mp3quran.net/akdr/008.mp3"
}
,{
id: 9,
name: "التوبة",
link: "https://server6.mp3quran.net/akdr/009.mp3"
}
,{
id: 10,
name: "يونس",
link: "https://server6.mp3quran.net/akdr/010.mp3"
}
,{
id: 11,
name: "هود",
link: "https://server6.mp3quran.net/akdr/011.mp3"
}
,{
id: 12,
name: "يوسف",
link: "https://server6.mp3quran.net/akdr/012.mp3"
}
,{
id: 13,
name: "الرعد",
link: "https://server6.mp3quran.net/akdr/013.mp3"
}
,{
id: 14,
name: "ابراهيم",
link: "https://server6.mp3quran.net/akdr/014.mp3"
}
,{
id: 15,
name: "الحجر",
link: "https://server6.mp3quran.net/akdr/015.mp3"
}
,{
id: 16,
name: "النحل",
link: "https://server6.mp3quran.net/akdr/016.mp3"
}
,{
id: 17,
name: "الإسراء",
link: "https://server6.mp3quran.net/akdr/017.mp3"
}
,{
id: 18,
name: "الكهف",
link: "https://server6.mp3quran.net/akdr/018.mp3"
}
,{
id: 19,
name: "مريم",
link: "https://server6.mp3quran.net/akdr/019.mp3"
}
,{
id: 20,
name: "طه",
link: "https://server6.mp3quran.net/akdr/020.mp3"
}
,{
id: 21,
name: "الأنبياء",
link: "https://server6.mp3quran.net/akdr/021.mp3"
}
,{
id: 22,
name: "الحج",
link: "https://server6.mp3quran.net/akdr/022.mp3"
}
,{
id: 23,
name: "المؤمنون",
link: "https://server6.mp3quran.net/akdr/023.mp3"
}
,{
id: 24,
name: "النور",
link: "https://server6.mp3quran.net/akdr/024.mp3"
}
,{
id: 25,
name: "الفرقان",
link: "https://server6.mp3quran.net/akdr/025.mp3"
}
,{
id: 26,
name: "الشعراء",
link: "https://server6.mp3quran.net/akdr/026.mp3"
}
,{
id: 27,
name: "النمل",
link: "https://server6.mp3quran.net/akdr/027.mp3"
}
,{
id: 28,
name: "القصص",
link: "https://server6.mp3quran.net/akdr/028.mp3"
}
,{
id: 29,
name: "العنكبوت",
link: "https://server6.mp3quran.net/akdr/029.mp3"
}
,{
id: 30,
name: "الروم",
link: "https://server6.mp3quran.net/akdr/030.mp3"
}
,{
id: 31,
name: "لقمان",
link: "https://server6.mp3quran.net/akdr/031.mp3"
}
,{
id: 32,
name: "السجدة",
link: "https://server6.mp3quran.net/akdr/032.mp3"
}
,{
id: 33,
name: "الأحزاب",
link: "https://server6.mp3quran.net/akdr/033.mp3"
}
,{
id: 34,
name: "سبإ",
link: "https://server6.mp3quran.net/akdr/034.mp3"
}
,{
id: 35,
name: "فاطر",
link: "https://server6.mp3quran.net/akdr/035.mp3"
}
,{
id: 36,
name: "يس",
link: "https://server6.mp3quran.net/akdr/036.mp3"
}
,{
id: 37,
name: "الصافات",
link: "https://server6.mp3quran.net/akdr/037.mp3"
}
,{
id: 38,
name: "ص",
link: "https://server6.mp3quran.net/akdr/038.mp3"
}
,{
id: 39,
name: "الزمر",
link: "https://server6.mp3quran.net/akdr/039.mp3"
}
,{
id: 40,
name: "غافر",
link: "https://server6.mp3quran.net/akdr/040.mp3"
}
,{
id: 41,
name: "فصلت",
link: "https://server6.mp3quran.net/akdr/041.mp3"
}
,{
id: 42,
name: "الشورى",
link: "https://server6.mp3quran.net/akdr/042.mp3"
}
,{
id: 43,
name: "الزخرف",
link: "https://server6.mp3quran.net/akdr/043.mp3"
}
,{
id: 44,
name: "الدخان",
link: "https://server6.mp3quran.net/akdr/044.mp3"
}
,{
id: 45,
name: "الجاثية",
link: "https://server6.mp3quran.net/akdr/045.mp3"
}
,{
id: 46,
name: "الأحقاف",
link: "https://server6.mp3quran.net/akdr/046.mp3"
}
,{
id: 47,
name: "محمد",
link: "https://server6.mp3quran.net/akdr/047.mp3"
}
,{
id: 48,
name: "الفتح",
link: "https://server6.mp3quran.net/akdr/048.mp3"
}
,{
id: 49,
name: "الحجرات",
link: "https://server6.mp3quran.net/akdr/049.mp3"
}
,{
id: 50,
name: "ق",
link: "https://server6.mp3quran.net/akdr/050.mp3"
}
,{
id: 51,
name: "الذاريات",
link: "https://server6.mp3quran.net/akdr/051.mp3"
}
,{
id: 52,
name: "الطور",
link: "https://server6.mp3quran.net/akdr/052.mp3"
}
,{
id: 53,
name: "النجم",
link: "https://server6.mp3quran.net/akdr/053.mp3"
}
,{
id: 54,
name: "القمر",
link: "https://server6.mp3quran.net/akdr/054.mp3"
}
,{
id: 55,
name: "الرحمن",
link: "https://server6.mp3quran.net/akdr/055.mp3"
}
,{
id: 56,
name: "الواقعة",
link: "https://server6.mp3quran.net/akdr/056.mp3"
}
,{
id: 57,
name: "الحديد",
link: "https://server6.mp3quran.net/akdr/057.mp3"
}
,{
id: 58,
name: "المجادلة",
link: "https://server6.mp3quran.net/akdr/058.mp3"
}
,{
id: 59,
name: "الحشر",
link: "https://server6.mp3quran.net/akdr/059.mp3"
}
,{
id: 60,
name: "الممتحنة",
link: "https://server6.mp3quran.net/akdr/060.mp3"
}
,{
id: 61,
name: "الصف",
link: "https://server6.mp3quran.net/akdr/061.mp3"
}
,{
id: 62,
name: "الجمعة",
link: "https://server6.mp3quran.net/akdr/062.mp3"
}
,{
id: 63,
name: "المنافقون",
link: "https://server6.mp3quran.net/akdr/063.mp3"
}
,{
id: 64,
name: "التغابن",
link: "https://server6.mp3quran.net/akdr/064.mp3"
}
,{
id: 65,
name: "الطلاق",
link: "https://server6.mp3quran.net/akdr/065.mp3"
}
,{
id: 66,
name: "التحريم",
link: "https://server6.mp3quran.net/akdr/066.mp3"
}
,{
id: 67,
name: "الملك",
link: "https://server6.mp3quran.net/akdr/067.mp3"
}
,{
id: 68,
name: "القلم",
link: "https://server6.mp3quran.net/akdr/068.mp3"
}
,{
id: 69,
name: "الحاقة",
link: "https://server6.mp3quran.net/akdr/069.mp3"
}
,{
id: 70,
name: "المعارج",
link: "https://server6.mp3quran.net/akdr/070.mp3"
}
,{
id: 71,
name: "نوح",
link: "https://server6.mp3quran.net/akdr/071.mp3"
}
,{
id: 72,
name: "الجن",
link: "https://server6.mp3quran.net/akdr/072.mp3"
}
,{
id: 73,
name: "المزمل",
link: "https://server6.mp3quran.net/akdr/073.mp3"
}
,{
id: 74,
name: "المدثر",
link: "https://server6.mp3quran.net/akdr/074.mp3"
}
,{
id: 75,
name: "القيامة",
link: "https://server6.mp3quran.net/akdr/075.mp3"
}
,{
id: 76,
name: "الانسان",
link: "https://server6.mp3quran.net/akdr/076.mp3"
}
,{
id: 77,
name: "المرسلات",
link: "https://server6.mp3quran.net/akdr/077.mp3"
}
,{
id: 78,
name: "النبإ",
link: "https://server6.mp3quran.net/akdr/078.mp3"
}
,{
id: 79,
name: "النازعات",
link: "https://server6.mp3quran.net/akdr/079.mp3"
}
,{
id: 80,
name: "عبس",
link: "https://server6.mp3quran.net/akdr/080.mp3"
}
,{
id: 81,
name: "التكوير",
link: "https://server6.mp3quran.net/akdr/081.mp3"
}
,{
id: 82,
name: "الإنفطار",
link: "https://server6.mp3quran.net/akdr/082.mp3"
}
,{
id: 83,
name: "المطففين",
link: "https://server6.mp3quran.net/akdr/083.mp3"
}
,{
id: 84,
name: "الإنشقاق",
link: "https://server6.mp3quran.net/akdr/084.mp3"
}
,{
id: 85,
name: "البروج",
link: "https://server6.mp3quran.net/akdr/085.mp3"
}
,{
id: 86,
name: "الطارق",
link: "https://server6.mp3quran.net/akdr/086.mp3"
}
,{
id: 87,
name: "الأعلى",
link: "https://server6.mp3quran.net/akdr/087.mp3"
}
,{
id: 88,
name: "الغاشية",
link: "https://server6.mp3quran.net/akdr/088.mp3"
}
,{
id: 89,
name: "الفجر",
link: "https://server6.mp3quran.net/akdr/089.mp3"
}
,{
id: 90,
name: "البلد",
link: "https://server6.mp3quran.net/akdr/090.mp3"
}
,{
id: 91,
name: "الشمس",
link: "https://server6.mp3quran.net/akdr/091.mp3"
}
,{
id: 92,
name: "الليل",
link: "https://server6.mp3quran.net/akdr/092.mp3"
}
,{
id: 93,
name: "الضحى",
link: "https://server6.mp3quran.net/akdr/093.mp3"
}
,{
id: 94,
name: "الشرح",
link: "https://server6.mp3quran.net/akdr/094.mp3"
}
,{
id: 95,
name: "التين",
link: "https://server6.mp3quran.net/akdr/095.mp3"
}
,{
id: 96,
name: "العلق",
link: "https://server6.mp3quran.net/akdr/096.mp3"
}
,{
id: 97,
name: "القدر",
link: "https://server6.mp3quran.net/akdr/097.mp3"
}
,{
id: 98,
name: "البينة",
link: "https://server6.mp3quran.net/akdr/098.mp3"
}
,{
id: 99,
name: "الزلزلة",
link: "https://server6.mp3quran.net/akdr/099.mp3"
}
,{
id: 100,
name: "العاديات",
link: "https://server6.mp3quran.net/akdr/100.mp3"
}
,{
id: 101,
name: "القارعة",
link: "https://server6.mp3quran.net/akdr/101.mp3"
}
,{
id: 102,
name: "التكاثر",
link: "https://server6.mp3quran.net/akdr/102.mp3"
}
,{
id: 103,
name: "العصر",
link: "https://server6.mp3quran.net/akdr/103.mp3"
}
,{
id: 104,
name: "الهمزة",
link: "https://server6.mp3quran.net/akdr/104.mp3"
}
,{
id: 105,
name: "الفيل",
link: "https://server6.mp3quran.net/akdr/105.mp3"
}
,{
id: 106,
name: "قريش",
link: "https://server6.mp3quran.net/akdr/106.mp3"
}
,{
id: 107,
name: "الماعون",
link: "https://server6.mp3quran.net/akdr/107.mp3"
}
,{
id: 108,
name: "الكوثر",
link: "https://server6.mp3quran.net/akdr/108.mp3"
}
,{
id: 109,
name: "الكافرون",
link: "https://server6.mp3quran.net/akdr/109.mp3"
}
,{
id: 110,
name: "النصر",
link: "https://server6.mp3quran.net/akdr/110.mp3"
}
,{
id: 111,
name: "المسد",
link: "https://server6.mp3quran.net/akdr/111.mp3"
}
,{
id: 112,
name: "الإخلاص",
link: "https://server6.mp3quran.net/akdr/112.mp3"
}
,{
id: 113,
name: "الفلق",
link: "https://server6.mp3quran.net/akdr/113.mp3"
}
,{
id: 114,
name: "الناس",
link: "https://server6.mp3quran.net/akdr/114.mp3"
}
]
let kora2 = 
[
  {
    name: "اختر القارئ",
    key: 'null'
  },
  {
    name: "سعد الغامدي",
    key: 's_gmd'
  },
  {
    name: "إبراهيم الأخضر",
    key: 'akdr'
  },
  {
    name: "محمد جبريل",
    key: 'jbrl'
  }
]
// asowar
let ayat_div = 
  document.querySelector('.ayat_div')
asowar.map(e => {
  let aya_items =
    document.createElement('option')
  aya_items.className = 'aya_items'
  aya_items.value = e.id
  aya_items.textContent = e.name
  ayat_div.appendChild(aya_items)
})
// kora22
let kora2_div =
  document.querySelector('.kora2_div')
kora2.map(e => {
  let kati2_items =
    document.createElement('option')
  kati2_items.className = 'kati2_items'
  kati2_items.id = e.id
  kati2_items.value = e.key
  kati2_items.setAttribute('dir', 'rtl')
  kati2_items.textContent = e.name
  kora2_div.appendChild(kati2_items)
})
let button =
  document.querySelector('button')
button.addEventListener('click', () => {
  let aya_source = 
    document.querySelector('.aya_source')
  let aya_audio =
    document.querySelector('.aya_audio')
   
  let myselect = ayat_div.value
  let alkari2 = kora2_div.value
  let server = 0;
  if (kora2_div.value === 's_gmd') {
    server = 7
  }
  if (kora2_div.value === 'akdr') {
    server = 6
  }
  if (kora2_div.value === 'jbrl') {
    server = 8

  }
  if (myselect <= 9) {
    myselect = "00" + myselect
  }
  if (myselect >= 10 && myselect <= 99) {
    myselect = "0" + myselect
  }
  aya_source.setAttribute('src', 
  `https://server${server}.mp3quran.net/${alkari2}/${myselect}.mp3`)
  aya_source.setAttribute('type', 'audio/mp3')
  aya_audio.load()
  button.style.background = 'var(--red)'
  button.style.color = 'var(--white)'
  play.style.background = 'var(--white)'
  play.style.color = 'var(--blue)'
  pause.style.background = 'var(--white)'
  pause.style.color = 'var(--blue)'
})

// play and pause 
let play =
  document.querySelector('.play')
let pause =
  document.querySelector('.pause')
let aya_audio =
  document.querySelector('.aya_audio')

play.addEventListener('click', () => {
  aya_audio.play()
  play.style.background = 'var(--red)'
  pause.style.background = 'var(--white)'
  play.style.color = 'var(--white)'
  pause.style.color = 'var(--blue)'
  button.style.background = 'var(--white)'
  button.style.color = 'var(--blue)'
})
pause.addEventListener('click', () => {
  aya_audio.pause()
  play.style.background = 'var(--white)'
  pause.style.background = 'var(--red)'
  play.style.color = 'var(--blue)'
  pause.style.color = 'var(--white)'
  button.style.background = 'var(--white)'
  button.style.color = 'var(--blue)'
})
  
// الادكار 
let ad_sb =
  document.querySelector('.ad_sb')
let ad_ms =
  document.querySelector('.ad_ms')
let ad_sb_box =
  document.querySelector('.ad_sb_box')
let ad_ms_box =
  document.querySelector('.ad_ms_box')

ad_sb.addEventListener('click', () => {
  ad_sb_box.style.display = 'grid'
  ad_ms_box.style.display = 'none'
  ad_sb.style.background = 'var(--red)'
  ad_ms.style.background = 'var(--white)'
  ad_sb.style.color = 'var(--white)'
  ad_ms.style.color = 'var(--blue)'
})
ad_ms.addEventListener('click', () => {
  ad_sb_box.style.display = 'none'
  ad_ms_box.style.display = 'grid'
  ad_ms.style.background = 'var(--red)'
  ad_sb.style.background = 'var(--white)'
  ad_ms.style.color = 'var(--white)'
  ad_sb.style.color = 'var(--blue)'
})

  let adkar_sabah =
  [
{
  count: 1,
  text: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير"
}
,{
  count: 1,
  text: "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ ."
}
,{
  count: 3,
  text: "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. "
}
,{
  count: 4,
  text: "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك."
},
{
  count: 7,
  text: "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم."
}
,{
  count: 3,
  text: "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم."
}
,{
  count: 1,
  text: "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور."
}
,{
  count: 1,
  text: "أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ."
}
,{
  count: 3,
  text: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه."
}
,{
  count: 3,
  text: "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ."
}
,{
  count: 3,
  text: "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ."
}
,{
  count: 1,
  text: "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي."
}
,{
  count: 3,
  text: "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ."
}
,{
  count: 1,
  text: "أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه."
}
,{
  count: 1,
  text: "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم."
}
,{
  count: 3,
  text: "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق."
}
,{
  count: 10,
  text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد."
}
,{
  count: 3,
  text: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ."
}
,{
  count: 3,
  text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ."
}
,{
  count: 3,
  text: "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ."
}
,{
  count: 3,
  text: "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ."
}
,{
  count: 1,
  text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا."
}
,{
  count: 100,
  text: "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ."
}
,{
  count: 100,
  text: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ."
}
,{
  count: 100,
  text: "أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ"
}
    ]
  adkar_sabah.map(e => {
      let dikr_div =
        document.createElement('div')
      dikr_div.className = 'dikr_div'
      let dikr_con = 
        document.createElement('span')
      dikr_con.className = 'dikr_con'
      dikr_con.textContent = e.text
      dikr_div.appendChild(dikr_con)
      let dikr_count =
        document.createElement('span')
      dikr_count.className = 'dikr_count'
      dikr_count.dir = "rtl"
      if (e.count === 1) {
        dikr_count.textContent = 'مرة واحدة'
      } else {
        dikr_count.textContent = `${e.count} مرات`
      }if (e.count === 100) {
        dikr_count.textContent = `${e.count} مرة`
      }
      dikr_div.appendChild(dikr_count)
      ad_sb_box.appendChild(dikr_div)
    })
  let adkar_masa2 = 
  [
{
  count: 1,
  text: "أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر."
}
,{
  count: 1,
  text: "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ ."
}
,{
  count: 3,
  text: "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً."
}
,{
  count: 4,
  text: "اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك."
}
,{
  count: 1,
  text: "اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر."
}
,{
  count: 7,
  text: "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم."
}
,{
  count: 3,
  text: "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم."
}
,{
  count: 1,
  text: "اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ."
}
,{
  count: 1,
  text: "أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ."
}
,{
  count: 3,
  text: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه."
}
,{
  count: 3,
  text: "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ."
}
,{
  count: 3,
  text: "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ."
}
,{
  count: 01,
  text: "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي."
}
,{
  count: 3,
  text: "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ."
}
,{
  count: 1,
  text: "أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا."
}
,{
  count: 1,
  text: "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم."
}
,{
  count: 3,
  text: "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق."
}
,{
  count: 10,
  text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد."
}
,{
  count: 3,
  text: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ."
}
,{
  count: 3,
  text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ."
}
,{
  count: 3,
  text: "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ."
}
,{
  count: 3,
  text: "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ."
}
,{
  count: 100,
  text: "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ."
}
,{
  count: 1,
  text: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ."
}
,{
  count: 100,
  text: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ."
}
]
  adkar_masa2.map(e => {
      let dikr_div =
        document.createElement('div')
      dikr_div.className = 'dikr_div'
      let dikr_con =
        document.createElement('span')
      dikr_con.className = 'dikr_con'
      dikr_con.textContent = e.text
      dikr_div.appendChild(dikr_con)
      let dikr_count =
        document.createElement('span')
      dikr_count.className = 'dikr_count'
      dikr_count.dir = "rtl"
      if (e.count === 1) {
        dikr_count.textContent = 'مرة واحدة'
      } else {
        dikr_count.textContent = `${e.count} مرات`
      } if (e.count === 100) {
        dikr_count.textContent = `${e.count} مرة`
      }
      dikr_div.appendChild(dikr_count)
      ad_ms_box.appendChild(dikr_div)
   })
 
// التسابيح 
  let tasabihs = 
  [
    {
  count: 100,
  text: "سُبْحَانَ اللَّهِ"
}
,{
  count: 100,
  text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ"
}
,{
  count: 100,
  text: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ"
}
,{
  count: 100,
  text: "سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ" 
}
,{
  count: 100,
  text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ"
}
,{
  count: 100,
  text: "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ."
}
,{
  count: 100,
  text: "لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ"
}
,{
  count: 100,
  text: "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ"
}
,{
  count: 100,
  text: "الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد"
}
,{
  count: 100,
  text: "أستغفر الله"
}
,{
  count: 100,
  text: "سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ"
}
,{
  count: 100,
  text: "لَا إِلَهَ إِلَّا اللَّهُ"
}
,{
  count: 100,
  text: "الْلَّهُ أَكْبَرُ"
}
,{
  count: 100,
  text: "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلا إِلَهَ إِلا اللَّهُ ، وَاللَّهُ أَكْبَرُ ، اللَّهُمَّ اغْفِرْ لِي ، اللَّهُمَّ ارْحَمْنِي ، اللَّهُمَّ ارْزُقْنِي."
}
,{
  count: 100,
  text: "اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً."
}
,{
  count: 100,
  text: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ."
}
    ]
  tasabihs.map(e => {
    let tasabih_box =
      document.querySelector('.tasabih_box')
    let tasabih_div =
      document.createElement('div')
    tasabih_div.className = 'tasabih_div'
    tasabih_div.id = e.count
    tasabih_div.dir = "rtl"
    tasabih_box.appendChild(tasabih_div)
    let tasabih_span =
      document.createElement('span')
    tasabih_span.className = 'tasabih_span'
    tasabih_span.textContent = e.text
    tasabih_div.appendChild(tasabih_span)
    let tasabih_time =
      document.createElement('span')
    tasabih_time.className = 'tasabih_time'
    tasabih_time.textContent = `${e.count} مرة`
    tasabih_div.appendChild(tasabih_time)
  })

// الاحاديث
let randnum = Math.floor(Math.random() * 20)
let url3 = `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${randnum}&limit=20`
fetch(url3)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    let alahadit_data = data.items
    alahadit_data.map(e => {
      let alahadit =
        document.querySelector('.alahadit')
      let hadit_div =
        document.createElement('span')
      hadit_div.textContent = `${e.arab}.`
      hadit_div.dir = "rtl"
      hadit_div.className = 'hadit_div'
      alahadit.appendChild(hadit_div)
    })
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
  
// التفاسير
let tafasir_items =
  document.querySelector('.tafasir_items')
asowar.map(e => {
  let tafasir_item =
    document.createElement('option')
  tafasir_item.className = 'aya_items'
  tafasir_item.value = e.id
  tafasir_item.textContent = e.name
  tafasir_items.appendChild(tafasir_item)
})
tafasir_items.addEventListener('click', () => {
  let tafasir_box =
    document.querySelector('.tafasir_box')
  tafasir_box.innerHTML = ''
})
function fun() {
  aya_num = tafasir_items.value
  tafasir_data(aya_num)
}
function tafasir_data(aya_num) {
  let url3 = `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${aya_num}`
  fetch(url3)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      ayats = data.result
      console.log(ayats)
      ayats.map(e => {
        let tafasir_box =
          document.querySelector('.tafasir_box')
        let aya_text =
          document.createElement('span')
        aya_text.textContent = `الآية : ${e.arabic_text}`
        aya_text.dir = "rtl"
        aya_text.className = 'aya_text'
        tafasir_box.appendChild(aya_text)
        let aya_tafsir =
          document.createElement('span')
        aya_tafsir.textContent = `تفسيرها : ${e.translation}`
        aya_tafsir.dir = "rtl"
        aya_tafsir.className = 'aya_tafsir'
        tafasir_box.appendChild(aya_tafsir)
      })
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
