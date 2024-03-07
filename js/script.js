const imgChangeJS = document.getElementById("img-change");

const buttonJS = document.querySelectorAll(".button-id").forEach(button => {
  button.addEventListener('click', event => {
    if (button.innerHTML === " MIKHAIL GORBACHEV ") {
      imgChangeJS.src = "Photos/Mikhail_Gorbachev.jpg";
    } else if (button.innerHTML === " TOP QUARK ") {
      imgChangeJS.src = "Photos/Top_antitop_quark_event.svg.png";
    } else if (button.innerHTML === " KING KONG ") {
      imgChangeJS.src = "Photos/King_Kong.png";
    } else if (button.innerHTML === " DR. SEUSS ") {
      imgChangeJS.src = "Photos/Dr_Seuss.jpg";
    } else if (button.innerHTML === " RHODESIA ") {
      imgChangeJS.src = "Photos/Rhodesia.png";
    }
  })
})

const pChangeJS = document.getElementById("p-change");

const buttonJS1 = document.querySelectorAll(".button-id").forEach(button => {
  button.addEventListener('click', event => {
    console.log(button.innerHTML);
    if (button.innerHTML === " MIKHAIL GORBACHEV ") {
      pChangeJS.innerHTML = "Soviet lawyer, politician, President of the Soviet Union, Nobel Prize laureate. Mikhail Sergeyevich Gorbachev[f][g] (2 March 1931 to 30 August 2022) was a Soviet and Russian politician who served as the last leader of the Soviet Union from 1985 to the country's dissolution in 1991. He served as General Secretary of the Communist Party of the Soviet Union from 1985 and additionally as head of state beginning in 1988, as Chairman of the Presidium of the Supreme Soviet from 1988 to 1989, Chairman of the Supreme Soviet from 1989 to 1990 and the only President of the Soviet Union from 1990 to 1991. Ideologically, Gorbachev initially adhered to Marxism Leninism but moved towards social democracy by the early 1990s.";
    } else if (button.innerHTML === " TOP QUARK ") {
      pChangeJS.innerHTML = "The existence of this elementary particle, the bottom quark's counterpart, had been presumed since the 1970's. The top quark, sometimes also referred to as the truth quark, (symbol: t) is the most massive of all observed elementary particles. It derives its mass from its coupling to the Higgs Boson. This coupling Y-T is very close to unity; in the Standard Model of particle physics, it is the largest (strongest) coupling at the scale of the weak interactions and above. The top quark was discovered in 1995 by the CDF[2] and DØ[3] experiments at Fermilab.";
    } else if (button.innerHTML === " KING KONG ") {
      pChangeJS.innerHTML = "The black and white movie marked a milestone in the history of film, especially due to Willis O Brien's stop-motion effects. King Kong is a fictional giant monster, or kaiju,[13] resembling a gorilla, who has appeared in various media since 1933. Dubbed the King of the Beasts from its inception,[14] over time it would also be bestowed the title of the Eighth Wonder of the World,[15] a widely recognized expression within the franchise. His first appearance was in the novelization of the 1933 film King Kong from RKO Pictures, with the film premiering a little over two months later.";
    } else if (button.innerHTML === " DR. SEUSS ") {
      pChangeJS.innerHTML = "American author, poet, illustrator.  Theodor Seuss Geisel  March 2, 1904 to September 24, 1991)[5] was an American children's author and cartoonist. He is known for his work writing and illustrating more than 60 books under the pen name Dr. Seuss. His work includes many of the most popular children's books of all time, selling over 600 million copies and being translated into more than 20 languages by the time of his death.[7]";
    } else if (button.innerHTML === " RHODESIA ") {
      pChangeJS.innerHTML = "By severing the country's ties with the United Kingdom, white Prime Minister Ian Smith attempted to prevent the institution of black majority rule. Rhodesia, officially from 1970 the Republic of Rhodesia,[3] was an unrecognised state in Southern Africa from 1965 to 1979, equivalent in territory to modern Zimbabwe. Rhodesia was the de facto successor state to the British colony of Southern Rhodesia, which had been self-governing since achieving responsible government in 1923. A landlocked nation, Rhodesia was bordered by South Africa to the south, Bechuanaland (later Botswana) to the southwest, Zambia (formerly Northern Rhodesia) to the northwest, and Mozambique (a Portuguese province until 1975) to the east. From 1965 to 1979, Rhodesia was one of two independent states on the African continent governed by a white minority of European descent and culture, the other being South Africa.";
    }
  })
})

const headingChangeJS = document.getElementById("h-change");

const buttonJS2 = document.querySelectorAll(".button-id").forEach(button => {
  button.addEventListener('click', event => {
    console.log(button.innerHTML);
    if (button.innerHTML === " MIKHAIL GORBACHEV ") {
      headingChangeJS.innerHTML = "1931: Mikhail Gorbachev";
    } else if (button.innerHTML === " TOP QUARK ") {
      headingChangeJS.innerHTML = "1995: The top quark is discovered";
    } else if (button.innerHTML === " KING KONG ") {
      headingChangeJS.innerHTML = "1933: The film King Kong premieres";
    } else if (button.innerHTML === " DR. SEUSS ") {
      headingChangeJS.innerHTML = "1904: Dr. Seuss";
    } else if (button.innerHTML === " RHODESIA ") {
      headingChangeJS.innerHTML = "1970: Rhodesia declares itself an independent republic";
    }
  })
})