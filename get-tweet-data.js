// Please do not change the name of this function
function getTweetData(tweet) {

  // The whole tweet length is taken into account.
  const length = tweet.length

  // Mentions are defined by any word that starts with @. These are all counted and subsequently printed by the below regex,
  // except for cases where the same exact mention occurs multiple times in which case only one instance is taken into account.
  // Since match will result in null when no match occurs, we have to instead print out an empty string or an empty array for this exercise.
  const mentionCount = (tweet.match(/@\b(\w*)\b(?!.*\1)/g) || "").length;
  const mentions = tweet.match(/@\b(\w*)\b(?!.*\1)/g) || [];

  // The logic for tweets is exactly the same as that for mentions so the regex is identical except for the # instead of the @.
  const tagCount = (tweet.match(/#\b(\w*)\b(?!.*\1)/g) || "").length;
  const tags = tweet.match(/#\b(\w*)\b(?!.*\1)/g) || [];

  // Return the required object litteral with the entries populated according to the above.
  // Since all the variables were named according to the desired output we do not need to list key-value pairs separately.
  return { tags, mentions, tagCount, mentionCount, length };
};

module.exports = getTweetData;
