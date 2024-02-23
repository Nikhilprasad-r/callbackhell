setTimeout(function () {
  var count = 10;
  let P = document.createElement("p");
  P.innerText = count;
  document.body.appendChild(P);

  setTimeout(function () {
    console.log(count);
    count--;
    P.innerText = count;
    setTimeout(function () {
      console.log(count);
      count--;
      P.innerText = count;
      setTimeout(function () {
        console.log(count);
        count--;
        P.innerText = count;
        setTimeout(function () {
          console.log(count);
          count--;
          P.innerText = count;
          setTimeout(function () {
            console.log(count);
            count--;
            P.innerText = count;
            setTimeout(function () {
              console.log(count);
              count--;
              P.innerText = count;
              setTimeout(function () {
                console.log(count);
                count--;
                P.innerText = count;
                setTimeout(function () {
                  console.log(count);
                  count--;
                  P.innerText = count;
                  setTimeout(function () {
                    console.log(count);
                    count--;
                    P.innerText = count;
                    setTimeout(function () {
                      P.innerText = "Happy Independence Day!";
                      console.log("Happy Independence Day!");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
