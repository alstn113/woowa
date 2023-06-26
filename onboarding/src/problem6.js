const problem6 = (forms) => {
  const set = new Set();
  const dic = {};

  forms.forEach((form) => {
    const [email, nickname] = form;
    if (!email.endsWith("@email.com")) return;
    nickname
      .split("")
      .filter((_, idx) => idx !== nickname.length - 1)
      .forEach((_, idx) => {
        const word = nickname[idx] + nickname[idx + 1];
        if (dic[word]) {
          set.add(email);
          set.add(dic[word]);
        } else {
          dic[word] = email;
        }
      });
  });

  return [...set].sort();
};

module.exports = problem6;
