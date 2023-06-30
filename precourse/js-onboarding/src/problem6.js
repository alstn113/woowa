/**
 * 이메일 주소의 유효성을 확인하는 함수
 * @param {string} email - 이메일 주소
 * @returns {boolean} - 유효한 이메일 주소인지 여부 (true: 유효함, false: 유효하지 않음)
 */
const isValidEmail = (email) => {
  return email.endsWith('@email.com');
};

/**
 * 닉네임에서 연속된 두 글자를 추출하는 함수
 * @param {string} nickname - 닉네임
 * @returns {string[]} - 추출된 연속된 두 글자의 배열
 */
const extractTwoLetters = (nickname) => {
  const twoLetters = [];
  for (let i = 0; i < nickname.length - 1; i++) {
    twoLetters.push(nickname.slice(i, i + 2));
  }
  return twoLetters;
};

/**
 * 중복된 이메일 주소를 찾아서 반환하는 함수
 * @param {string[][]} forms - 이메일과 닉네임 정보를 담은 2차원 배열
 * @returns {string[]} - 중복된 이메일 주소들의 배열 (오름차순 정렬)
 */
const problem6 = (forms) => {
  const set = new Set();
  const twoLetterDic = {};

  forms.forEach((form) => {
    const [email, nickname] = form;
    if (!isValidEmail(email)) return;

    const twoLetters = extractTwoLetters(nickname);
    twoLetters.forEach((twoLetter) => {
      // 중복되는 닉네임일 경우
      if (twoLetterDic[twoLetter]) {
        set.add(email); // userA의 이메일
        set.add(twoLetterDic[twoLetter]); // userB의 이메일
      } else {
        twoLetterDic[twoLetter] = email;
      }
    });
  });

  return [...set].sort();
};

module.exports = problem6;
