var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
//  navBar (mobile)

if (sPage != "index.html" &&sPage != "") {
  var menu = document.querySelector("#menu");
  var drawer = document.querySelector("#drawer");
  var closeMenu = document.querySelector("#close");

  menu.addEventListener("click", function (e) {
    drawer.classList.toggle("open");
    e.stopPropagation;
  });

  closeMenu.addEventListener("click", function (e) {
    drawer.classList.remove("open");
    e.stopPropagation;
  });
  closeMenu.addEventListener("click", function (e) {
    drawer.classList.remove("open");
    e.stopPropagation;
  });
}

//bar for navigation on the page (not to other page)

if (sPage == "history.html") {

  var img = document.querySelectorAll(".imgBox");
  var des = document.querySelectorAll(".descreption");

  var DefaultSize = window.matchMedia("(max-width: 750px)");
  DefaultSize.addEventListener("change", TS);

  function TS(params) {
      if(DefaultSize.matches)
      {
        fadeout(0);
      }
  }

  for (i = 0; i < img.length; i++) {
    AEL(i);
  }
  function AEL(i) {
    img[i].addEventListener("mouseover", function (e) {
      des[i].classList.add("show");
    });

    img[i].addEventListener("mouseout", function (e) {
      des[i].classList.remove("show");
    });

    img[i].addEventListener("click", function (e) {
      fadeout(i);
    });
  }

  var title = document.querySelector("#year");

  var img = document.querySelector("#images");

  var words = document.querySelector("#words");

  //history
  const myJSON =
    '{"year" : ["Origin","Culture","Production"],"img" : ["img/origin.jpg","img/culture.jpg","img/Production.PNG"],"word": ["The history of rice cultivation is an interdisciplinary subject that studies archaeological and documentary evidence to explain how rice was first domesticated and cultivated by humans, the spread of cultivation to different regions of the planet, and the technological changes that have impacted cultivation over time. The current scientific consensus, based on archaeological and linguistic evidence, is that Oryza sativa rice was first domesticated in the Yangtze River basin in China 13,500 to 8,200 years ago. From that first cultivation, migration and trade spread rice around the world - first to much of east Asia, and then further abroad, and eventually to the Americas as part of the Columbian exchange. The now less common Oryza glaberrima rice was independently domesticated in Africa 3,000 to 3,500 years ago. Other wild rices have also been cultivated in different geographies, such as in the Americas.","Rice plays an important role in certain religions and popular beliefs. In many cultures relatives will scatter rice during or towards the end of a wedding ceremony in front of the bride and groom. The pounded rice ritual is conducted during weddings in Nepal. The bride gives a leafplate full of pounded rice to the groom after he requests it politely from her. In the Philippines rice wine, popularly known as tapuy, is used for important occasions such as weddings, rice harvesting ceremonies and other celebrations.","In 2020, world production of paddy rice was 756.7 million metric tons (834.1 million short tons)s, led by China and India with a combined 52% of this total. Other major producers were Bangladesh, Indonesia and Vietnam. The five major producers accounted for 72% of total production, while the top fifteen producers accounted for 91% of total world production in 2017 (see table on right). Developing countries account for 95% of the total production."]}';
  const myArray = JSON.parse(myJSON);
  function fadeout(i) {
    console.log(img);
    title.style.opacity = 0.0;

    img.style.opacity = 0.0;

    words.style.opacity = 0.0;

    setTimeout(() => fadeIn(i), 1000);
  }

  function fadeIn(i) {
    title.style.opacity = 1.0;

    img.style.opacity = 1.0;

    words.style.opacity = 1.0;
    title.innerHTML = myArray.year[i];
    img.src = myArray.img[i];
    words.innerHTML = myArray.word[i];
  }


} else if (sPage == "benefit.html") {
  var mode = 0;

  var img = document.querySelectorAll(".imgBox");
  var des = document.querySelectorAll(".descreption");

  for (i = 0; i < des.length; i++) {
    AEL(i);
  }
  function AEL(i) {
    img[i].addEventListener("mouseover", function (e) {
      des[i].classList.add("show");
    });

    img[i].addEventListener("mouseout", function (e) {
      des[i].classList.remove("show");
    });

    img[i].addEventListener("click", function (e) {
      Move(i);
    });
  }

  var left = document.querySelector("#leftText");

  var center = document.querySelector("#CenterImage");

  var right = document.querySelector("#rightText");

  var topOfPage = document.querySelector("#top");
  var VSTEXT = document.querySelector("#VS");
  var changeImg=document.querySelector("#changePicture");

  function Move(i) {
    if (i == 0) {
      left.style.width = "0%";
      right.style.width = "60%";
      
      changeImg.src = "img/rice.jpg";
      setTimeout(reveal, 500);

    } else if (i == 1) {
      left.style.width = "60%";
      right.style.width = "0%";
      
      changeImg.src = "img/brown.jpg";
      setTimeout(reveal, 500);
    } else if (i == 2) {
      topOfPage.style.height = "100%";
    }
  }

  function reveal() {
    topOfPage.style.height = "0%";
  }
} else if (sPage == "quiz.html") {
  const question = [
    {
      question: "Who have the highest production of rice Rice",
      answer: ["China", "India", "USA", "Russia"],
      Correct: 0,
      Link: "https://www.youtube.com/watch?v=1rgH7fo4ztI",
    },
    {
      question: "Which culture",
      answer: ["food", "something to play", "nothing", "space"],
      Correct: 0,
      Link: "https://www.youtube.com/watch?v=1rgH7fo4ztI",
    },
    {
      question: "Is white rice healther the brown rice ",
      answer: ["True", "False"],
      Correct: 1,
      Link: "https://www.youtube.com/watch?v=1rgH7fo4ztI",
    },
    {
      question: "Planting rice is never ______ ",
      answer: [
        "Boring",
        "Fun",
        "Worth",
        "A good way to earn money in this day and age",
      ],
      Correct: 1,
      Link: "https://www.youtube.com/watch?v=1rgH7fo4ztI",
    },
  ];

  var QuestionLeft = [];
  var score = 0;
  var scoreText = document.querySelector(".score");
  var questionText = document.querySelector(".question");
  var ansBox = document.querySelectorAll(".box");
  var ansBoxText = document.querySelectorAll(".text");
  var pressd = false;

  var Retry = document.querySelector(".start");

  var RetryText = document.querySelector(".StartRetry");
  var QuestionText = document.querySelector(".hide");

  Retry.addEventListener("click", function (e) {
    start();
  });

  //assign lenght to questionLeft;

  for (i = 0; i < 4; i++) {
    AEL(i);
  }

  function start() {
    Retry.classList.toggle("hide");
    RetryText.innerHTML = "RETRY";
    QuestionText.classList.remove("hide");
    score = 0;
    for (i = 0; i < question.length; i++) {
      QuestionLeft.push(i);
    }
    var RandomQuestion = 0;
    scoreText.firstElementChild.innerHTML = "Score :" + score;

    getQuestion();
  }

  function AEL(i) {
    ansBox[i].addEventListener("click", (e) => {
      CheckAnswer(i);
    });
  }

  function updateScore() {
    score++;
    scoreText.firstElementChild.innerHTML = "Score :" + score;
  }

  function getQuestion() {
    //assing question
    pressd = false;
    if (QuestionLeft.length > 0) {
      var rng = 0;
      rng = Math.floor(Math.random() * QuestionLeft.length);
      RandomQuestion = QuestionLeft[rng];
      questionText.firstElementChild.innerHTML =
        question[RandomQuestion].question;
      setAnswer();

      var index = QuestionLeft.indexOf(QuestionLeft[rng]);
      if (index > -1) {
        QuestionLeft.splice(index, 1);
      }
    } else {
      questionText.firstElementChild.innerHTML =
        "SCORE :" + score + " / " + question.length;
      Retry.classList.toggle("hide");
      Retry.style.top = "60%";
      RetryText.innerHTML = "RETRY";

      setAnswer();
    }

    //assing answer
  }
  function setAnswer() {
    if (QuestionLeft.length > 0) {
      var ansToGive = [];
      for (i = 0; i < question[RandomQuestion].answer.length; i++) {
        ansToGive.push(i);
      }
      var rng = 0;

      for (i = 0; i < 4; i++) {
        ansBox[i].parentElement.classList.remove("hide");
        ansBox[i].classList.remove("green");
        ansBox[i].classList.remove("red");
        if (ansToGive.length > 0) {
          rng = Math.floor(Math.random() * ansToGive.length); // choose from the anstogive var
          var giveThis = ansToGive[rng];
          ansBoxText[i].innerHTML = question[RandomQuestion].answer[giveThis];
          //splice the ansTogive to not make duplicate answer
          var index = ansToGive.indexOf(giveThis);
          if (index > -1) {
            ansToGive.splice(index, 1);
          }
        } else {
          ansBox[i].parentElement.classList.add("hide");
        }
      }
    } else {
      for (i = 0; i < 4; i++) {
        ansBox[i].parentElement.classList.add("hide");
      }
    }
  }
  function CheckAnswer(i) {
    console.log(pressd);
    if (pressd === true) {
      return;
    }
    pressd = true;
    if (
      ansBoxText[i].innerHTML ==
      question[RandomQuestion].answer[question[RandomQuestion].Correct]
    ) {
      ansBox[i].classList.add("green");
      updateScore();
    } else {
      ansBox[i].classList.add("red");
    }
    for (var g = 0; g < ansBox.length; g++) {
      if (
        ansBoxText[g].innerHTML ==
        question[RandomQuestion].answer[question[RandomQuestion].Correct]
      ) {
        ansBox[g].classList.add("green");
      } else {
        ansBox[g].classList.add("red");
      }
    }

    if (ansBox[i].classList.contains("green")) {
      questionText.firstElementChild.innerHTML += "<br> correct";

      setTimeout(() => getQuestion(), 1000);
    } else if (ansBox[i].classList.contains("red")) {
      questionText.firstElementChild.innerHTML += "<br> wrong";
      setTimeout(() => getQuestion(), 2000);
    }
  }
} else if (sPage == "index.html" ||  sPage == "") {
  //0 history,1 how its made, 2 benefit

  var DefaultSize = window.matchMedia("(max-width: 1080px)");
  DefaultSize.addEventListener("change", TS);
  TS();
  var a = 0;
  const img = document.querySelectorAll(".col");
  for (let god of img) {
    help(a);
    a++;
  }

  function help(num) {
    img[num].addEventListener("mouseover", function () {
      mouseOn(num);
    });

    img[num].addEventListener("mouseout", function () {
      mouseOff(num);
    });
  }

  function mouseOn(cols) {
    const cc = document.querySelectorAll(".innerCol");
    img[cols].style.cursor = "pointer";
    console.log(cols);
    cc[cols].style.height = 50 + "%";
  }

  function mouseOff(cols) {
    const cc = document.querySelectorAll(".innerCol");
    cc[cols].style.height = 0 + "%";
  }


  function TS() {
    if (!DefaultSize.matches) {
      console.log(DefaultSize.matches);
      const cc = document.querySelectorAll(".innerCol");
      for (let c of cc) {
        c.style.height = 0 + "%";
      }
    } else {
      const cc = document.querySelectorAll(".innerCol");
      for (let c of cc) {
        c.style.height = 50 + "%";
      }
    }
  }
}

if (sPage == "benefit.html") {
  //just for games portion
  var start = false;

  var Fstart = false;
  var buttonToGo = document.querySelector("#G");

  var car = document.querySelectorAll(".vroom");

  var CDT = document.querySelector("#TimerText");

  var CD = document.querySelector(".timer");

  
  var ButtonText = document.querySelector("#GOT");

  var speedDiff = 0;
  var spot = 0;
  var espot = [0];


  var CountDown = 3;
  CDT.innerHTML = "";

  var Count;
  buttonToGo.addEventListener("click", function () {
    if (start) {
      carGoVroom(0);
    } else if (!Fstart) {
      Fstart = true;
      CDT.innerHTML = "GET READY!";
       Count= setInterval(function () {
        CountDownTimer();
      }, 1000);
    }
  });

  for (var i = 1; i < car.length; i++) {
    espot.push(0);
    setAi(i);
  }
  

  function CountDownTimer() {
    if (CountDown == 0) {
      start = true;
      CountDown --;
      ButtonText.innerHTML="GO";
      clearInterval(Count);
      CD.classList.toggle("hide");
      CDT.innerHTML = "";
    } else {
      CountDown--;
      if (CountDown == 2) {
        CDT.innerHTML = "GET SET!";
      } else if (CountDown == 1) {
        CDT.innerHTML = "GO!";
      }
    }
  }

  function setAi(i) {
    var Timer = setInterval(function () {
      carGoVroom(i);
    }, Math.floor(Math.random() * 300) + 200);
  }
  function carGoVroom(i) {
    if (start) {
      if (i == 0) {
        car[i].style.left = spot + "%";
        spot += 5;
      } else if (i > 0) {
        car[i].style.left = espot[i] + "%";
        espot[i] += 5;
      }
      if(spot>=100)
      {
        CD.classList.remove("hide");
        CDT.innerHTML="YOU WIN";
       
        var test=setTimeout(function(){
          reset();
        },1000);
      }
      else if(espot[i]>=100)
      {
        CD.classList.remove("hide");
        CDT.innerHTML="YOU LOSE";
    
        var test=setTimeout(function(){
          reset();
        },1000);
      }
    }
 
  }

  function reset()
  {
    spot=0;
        for(var i=0;i<espot.length;i++)
        {
          espot[i]=0;
        }
        for(var i=0;i<car.length;i++)
        {
          carGoVroom(i);
        }
        
        start=false;

    CDT.innerHTML="";
    ButtonText.innerHTML="Retry"
    CountDown=3;
    Fstart=false;
  }
}



var button = document.querySelector(".button");

var stepText = document.querySelector(".whateverclass your text have");
