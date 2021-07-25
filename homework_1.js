const string = "Привет! Как дела?";
const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я", "А", "Е", "Ё", "И", "О", "У", "Ы", "Э", "Ю", "я"];
var extractedVowels = "";


const getVowels = string => {
  
  for (let i = 0; i < string.length; i++) {
    const Letter = string[i];

    if (vowels.includes(Letter)) {
      extractedVowels += Letter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));