const TODO = "REPLACE ME!!!";
// Note: There are some simple test cases at the bottom of this file!

/**
 * @param {string[]} topics - an array of topic words
 * @param {string} sentence - a space-separated string of words
 * @returns {boolean} whether `sentence` contains any of the words in `topics`
 */


/**
 * @param {string[]} topics - an array of topic words
 * @returns {(sentence: string) => boolean} a function that takes a sentence
 *  and returns whether it is relevant to `topics`
 */

/**
 * @param {(sentence: string) => boolean} criterion - a function that
 *  takes a sentence and returns a boolean
 * @param {string[]} sentences - an array of space-separated strings of words
 * @returns {string[]} the subset of `sentences` for which `criterion` returns true
 */


/**
 * @param {string} str1 - the first string to compare
 * @param {string} str2 - the second string to compare
 * @returns {number} the absolute difference in length between `str1` and `str2`
 */


/**
 * @param {string} word - the original string
 * @param {string[]} words - an array of strings
 * @param {(str1: string, str2: string) => number} distanceFn - a function that
 *  takes two strings and returns a number representing the distance between them
 * @param {number} threshold - the maximum distance that is still considered "close"
 * @returns {string} the string in `words` with the minimum distance to `word`
 *  as calculated by `distanceFn`, unless that distance is strictly greater than
 *  the `threshold`, in which case the original `word` is returned.
 */


/**
 * @param {string} word - the original string
 * @param {string[]} words - an array of strings
 * @param {number} threshold - the maximum distance that is still considered "close"
 * @returns {string} the string in `words` that is the closest to `word` in _length_,
 *  unless that distance is strictly greater than the `threshold`,
 *  in which case the original `word` is returned.
 */

/* === Simple Test Cases === */
// The provided logs print the expected output first.

const isRelevant = (topics, sentence) => {
  const lowercasedSentence = sentence.toLowerCase();

  return topics.some((topic) => lowercasedSentence.includes(topic.toLowerCase()));
};

const dogWords =["dog", "puppy"];
const catWords = ["cat", "kitten"];
const sentence = "the quick brown fox jumps over the lazy dog";

console.log(isRelevant(dogWords, sentence)); // output: true
console.log(isRelevant(catWords, sentence)); // output: false

const about = (topics) => {
  const lowercasedTopics = topics.map((topic) => topic.toLowerCase());

  return (sentence) => {
    const lowercasedSentence = sentence.toLowerCase();

    return lowercasedTopics.some((topic) => lowercasedSentence.includes(topic));
  };
};

const aboutDogs = about(dogWords);
console.log(aboutDogs(sentence)); // output: true
console.log(aboutDogs("this sentence is about cats")); // output:false

const getRelevantSentences = (criterion, sentences) => {
  return sentences.filter((sentence) => criterion(sentence));
};

const sentences = [
  "I have a pet dog",
  "I have a pet cat",
  "I don't have any pets",
];

console.log(["I have a pet dog"], getRelevantSentences(aboutDogs, sentences));
console.log(
  ["I don't have any pets"],
  getRelevantSentences((s) => s.length > 17, sentences)
);

const getDistanceByLength = (str1, str2) => Math.abs(str1.length - str2.length);

const getClosestWord = (word, words, distanceFn, threshold) => {
  let minDistance = Infinity;
  let getClosestWord = word;

  words.forEach((w) => {
    const distance = distanceFn(word, w);
    if (distance < minDistance && distance <= threshold) {
      minDistance = distance;
      closestWord = w;
    }
  });

  return closestWord;
}

let words = ["bed", "bank", "fence", "bridges"];
console.log("bed", getClosestWord("hi", words, getDistanceByLength, 3));
console.log("hi", getClosestWord("hi", words, getDistanceByLength, 0));
console.log("fence", getClosestWord("rivers", words, getDistanceByLength, 2));

const getClosestWordByLength = (word, words, threshold) => {
  let minDistance = Infinity;
  let closestWord = word;

  words.forEach((w) => {
    const distance = Math.abs(word.length - w.length);
    if (distance < minDistance && distance <= threshold)  {
      minDistance = distance;
      closestWord = w;
    }
  });

  return closestWord;
};

console.log("bed", getClosestWordByLength("hi", words, 3));
console.log("hi", getClosestWordByLength("hi", words, 0));
console.log("fence", getClosestWordByLength("rivers", words, 2));
git 