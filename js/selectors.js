function _findPropertyNameByRegex(o, r) {
  if (!o) {
    return null;
  }
  for (var key in o) {
    if (key.match(r)) {
      return key;
    }
  }
  return undefined;
}

function enableAutoPlayNext(selectors) {
  /*Pulls all classes that start with "Watch Next" */
  selectors.push('[data-testid="skipButton"]');
  selectors.push('[aria-label="Credits überspringen"]'); // German version will have this text, most reliable
}

function enableSkipTitleSequence(selectors) {
  /*Skip title sequence*/
  selectors.push('[data-testid="skipButton"]'); // Also include first descendant of skip-intro, in case it's international?
  selectors.push('[aria-label="Opening überspringen"]'); // German version will have this text, most reliable
}

function enableSkipStillHere(selectors) {
  selectors.push('.interrupter-actions > .nf-icon-button:first-child');
  selectors.push('[aria-label^="Continue Playing"]');
}

