/**
 * 두 사용자 간의 관계를 추가합니다
 * @param {string} userA - 사용자 A
 * @param {string} userB - 사용자 B
 */
const addRelation = (friendRelations, userA, userB) => {
  if (friendRelations.has(userA)) {
    friendRelations.get(userA).push(userB);
  } else {
    friendRelations.set(userA, [userB]);
  }
};

/**
 * 사용자의 친구 목록을 가져옵니다.
 * @param {Map<string, string[]>} friendRelations - 친구 관계
 * @param {string} user - 사용자
 * @returns {string[]} - 친구 목록
 */
const getFriends = (friendRelations, user) => {
  return friendRelations.get(user) ?? [];
};

/**
 * 사용자별 점수를 계산합니다.
 * @param {string[]} visitors - 방문자 목록
 * @param {Map<string, string[]>} friendRelations - 친구 관계
 * @param {string} user - 현재 사용자
 * @returns {[string, number][]} - 사용자별 점수 배열
 */
const getScores = (visitors, friendRelations, user) => {
  const scores = new Map();

  const addScore = (user, score) => {
    const currentScore = scores.get(user) ?? 0;
    scores.set(user, currentScore + score);
  };

  // 방문자는 1점을 받습니다.
  visitors.forEach((visitor) => {
    addScore(visitor, 1);
  });

  // 현재 사용자와 함께 아는 친구는 10점을 받습니다.
  for (const friend of getFriends(friendRelations, user)) {
    getFriends(friendRelations, friend).forEach((friendOfFriend) => {
      addScore(friendOfFriend, 10);
    });
  }

  // 현재 사용자와 사용자의 친구들을 제외합니다.
  scores.delete(user);
  getFriends(friendRelations, user).forEach((friend) => {
    scores.delete(friend);
  });

  return [...scores.entries()]; // [사용자, 점수] 형태의 배열로 변환
};

/**
 * 사용자별 점수를 기준으로 추천 친구 목록을 반환합니다.
 * @param {[string, number][]} userScoreArr - 사용자별 점수 배열
 * @returns {string[]} - 추천 친구 목록
 */
const getRecommendedFriends = (userScoreArr) => {
  return userScoreArr
    .sort(
      ([usernameA, scoreA], [usernameB, scoreB]) =>
        scoreB - scoreA || usernameA.localeCompare(usernameB), // 점수가 같을 경우 알파벳 순으로 정렬
    )
    .slice(0, 5)
    .map((entry) => entry[0]);
};

/**
 * 사용자의 추천 친구 목록을 반환하는 함수
 * @param {string} user - 현재 사용자
 * @param {string[][]} friends - 친구 목록
 * @param {string[]} visitors - 방문자 목록
 * @returns {string[]} - 추천 친구 목록
 */
const problem7 = (user, friends, visitors) => {
  const friendRelations = new Map();

  friends.forEach((friend) => {
    const [userA, userB] = friend;
    addRelation(friendRelations, userA, userB);
    addRelation(friendRelations, userB, userA);
  });

  const userScoreArr = getScores(visitors, friendRelations, user);
  const recommendedFriends = getRecommendedFriends(userScoreArr);
  return recommendedFriends;
};

module.exports = problem7;
