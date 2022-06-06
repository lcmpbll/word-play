function WordCount(words){
  let matchWord = [0,0,0];
  let wordList= [" "];
  let = 0;
  words.forEach(function(word){
    if (!wordList.includes(word)) {
      wordList[i] = word;
      i++;
    };
  });

  let i=0;
  wordList.forEach(function(word1){
    words.forEach(function(word2){
      if(word1 === word2){
        matchWord[i]++;
      }
    });
    i++;
  });
  console.log(matchWord);
  console.log(wordList.join(" "));
};



function WordPlay(words){
  let longWords = [];
  words.forEach(function(word){
    if (word.length > 3) {
      longWords.push(word);
    };
  }); 
  longWords.reverse();
  return longWords;
};

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    const sentence = $("#answerOne").val();
    const words = sentence.split(" ");

    WordCount(words);

    let longWords = WordPlay(words);
    $("#rearrange-output").text(longWords.join(' '));

  });
});