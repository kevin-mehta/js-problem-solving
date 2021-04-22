const findNemoK = sentence => {
  const strNemo = "Nemo";
  let arrSentence = sentence.split(" ");
  let strFinalOutput = "I can't find Nemo :(";
  if (arrSentence.includes(strNemo)) {
    for (var i = 0; i < arrSentence.length; i++) {
      if (arrSentence[i] === strNemo) {
        strFinalOutput = "I found Nemo at " + (i + 1) + "!";
        break;
      }
    }
  }
  return strFinalOutput;
};

const findNemo = sentence => {
  const index = sentence.split(" ").findIndex(e => e === "Nemo");
  return index >= 0 ? `I found Nemo at ${index + 1}!` : "I can't find Nemo :(";
};
