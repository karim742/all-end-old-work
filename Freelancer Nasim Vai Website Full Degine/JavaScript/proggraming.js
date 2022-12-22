
// go to top btn visible for scroll

function scroll() {
  if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
    document.querySelector('.gotoTop').style.opacity = '1';
    document.querySelector('.gotoTop').style.transition = '1s';
  } else {
    document.querySelector('.gotoTop').style.transition = '1s';
    document.querySelector('.gotoTop').style.opacity = '0';
  }

  let pseido = document.querySelectorAll('.AboutUs');

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    pseido[0].style.setProperty("--animation", "zoomin 2s 1");
  }


  let x = document.querySelectorAll('.FecilitiesSinglebox');
  let i;

  if (document.body.scrollTop > 1090 || document.documentElement.scrollTop > 1090) {
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = '1';
      x[i].style.transition = '1s all linear';
      x[i].style.transform = 'translateY(0px)';
    }
  }


  let twoBox = document.querySelectorAll('.ATSinglebox');

  if (document.body.scrollTop > 4915 || document.documentElement.scrollTop > 4915) {
    for (i = 0; i < twoBox.length; i++) {
      twoBox[i].style.opacity = '1';
      twoBox[i].style.transition = '1s all linear';
      twoBox[i].style.transform = 'translateY(0px)';
    }
  }

  let credit = document.querySelectorAll('.SingleCredit');

  if (document.body.scrollTop > 2620 || document.documentElement.scrollTop > 2620) {
    for (i = 0; i < credit.length; i++) {
      credit[i].style.opacity = '1';
      credit[i].style.transform = 'translateY(43%)';
    }
    // credit[1].style.transition = 'all 0.8s cubic-bezier(0.26, 0, 0, 0.99) 0s';
    // credit[2].style.transition = 'all 1s cubic-bezier(0.26, 0, 0, 0.99) 0s';
    // credit[3].style.transition = 'all 1.2s cubic-bezier(0.26, 0, 0, 0.99) 0s';
    // credit[4].style.transition = 'all 1.4s cubic-bezier(0.26, 0, 0, 0.99) 0s';
  }

  const counters = document.querySelectorAll('.achieve');

  // if (document.body.scrollTop > 2931 || document.documentElement.scrollTop > 2931) {
  //   counters.forEach(counter => {

  //     let counterLength = counter.getAttribute('data-target');
  //     let counterSpeed = counter.getAttribute('data-speed');
  //     let i = 0;


  //     setInterval(() => {
  //       if (i <= counterLength) {
  //         i++;
  //         counter.innerHTML = i
  //       }
  //     }, counterSpeed)
  //   })

  // }

  if ((document.documentElement.scrollTop > 2931 && document.documentElement.scrollTop < 3000)) {
    counters.forEach(counter => {

      let counterLength = counter.getAttribute('data-target');
      let counterSpeed = counter.getAttribute('data-speed');
      let i = 0;


      setInterval(() => {
        if (i <= counterLength) {
          i++;
          counter.innerHTML = i
        }
      }, counterSpeed)
    })

  }

}

console.log(document.documentElement.scrollTop);



