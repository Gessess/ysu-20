// pobranie referencji do elementu HTML
var napisElement = document.getElementById("napis");

// zmienna z treścią, która ma zostać wpisana
var napis = "Hello, and welcome to ysu-20!";

// funkcja, która wpisuje kolejne litery napisu do elementu HTML
function piszNapis(i) {
  if (i < napis.length) {
    napisElement.innerHTML += napis.charAt(i);
    i++;
    setTimeout(function() {
      piszNapis(i);
    }, 100); // czas opóźnienia między kolejnymi literami
  } else {
    // animacja pisania zakończona, wywołanie funkcji callback z kolejnym napisem
    piszNapis1(0);
  }
}

// rozpoczęcie pisania pierwszego napisu
piszNapis(0);

// pobranie referencji do elementu HTML
var napis1Element = document.getElementById("napis1");

// zmienna z treścią, która ma zostać wpisana
var napis1 = "See our games!";

// funkcja, która wpisuje kolejne litery napisu do elementu HTML
function piszNapis1(i) {
  if (i < napis1.length) {
    napis1Element.innerHTML += napis1.charAt(i);
    i++;
    setTimeout(function() {
      piszNapis1(i);
    }, 100); // czas opóźnienia między kolejnymi literami
  } else {
    // animacja pisania zakończona, wywołanie funkcji callback z kolejnym napisem
    piszNapis2(0);
  }
}

// pobranie referencji do elementu HTML
var napis2Element = document.getElementById("napis2");

// zmienna z treścią, która ma zostać wpisana
var napis2 = 'Snake Game!';

// funkcja, która wpisuje kolejne litery napisu do elementu HTML
function piszNapis2(i) {
  if (i < napis2.length) {
    napis2Element.innerHTML += napis2.charAt(i);
    i++;
    setTimeout(function() {
      piszNapis2(i);
    }, 100); // czas opóźnienia między kolejnymi literami
} else {
    // animacja pisania zakończona, wywołanie funkcji callback z kolejnym napisem
    piszNapis3(0);
  }
}

var napis3Element = document.getElementById("napis3");

// zmienna z treścią, która ma zostać wpisana
var napis3 = "Basketball!"; //More games later...

// funkcja, która wpisuje kolejne litery napisu do elementu HTML
function piszNapis3(i) {
  if (i < napis3.length) {
    napis3Element.innerHTML += napis3.charAt(i);
    i++;
    setTimeout(function() {
      piszNapis3(i);
    }, 100); // czas opóźnienia między kolejnymi literami
} else {
    // animacja pisania zakończona, wywołanie funkcji callback z kolejnym napisem
    piszNapis4(0);
  }
}

var napis4Element = document.getElementById("napis4");

// zmienna z treścią, która ma zostać wpisana
var napis4 = "I wish you lots of fun!"; //More games later...

// funkcja, która wpisuje kolejne litery napisu do elementu HTML
function piszNapis4(i) {
  if (i < napis4.length) {
    napis4Element.innerHTML += napis4.charAt(i);
    i++;
    setTimeout(function() {
      piszNapis4(i);
    }, 100); // czas opóźnienia między kolejnymi literami
} else {
    // animacja pisania zakończona, wywołanie funkcji callback z kolejnym napisem
    piszNapis5(0);
  }
}

var napis5Element = document.getElementById("napis5");

// zmienna z treścią, która ma zostać wpisana
var napis5 = "⚠️ ATTENTION! ALL GAMES ARE OFF FOR NOW! ⚠️"; //More games later...

// funkcja, która wpisuje kolejne litery napisu do elementu HTML
function piszNapis5(i) {
  if (i < napis5.length) {
    napis5Element.innerHTML += napis5.charAt(i);
    i++;
    setTimeout(function() {
      piszNapis5(i);
    }, 100); // czas opóźnienia między kolejnymi literami
    }
}