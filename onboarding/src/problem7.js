class Manager {
  friendRelations;
  user;
  friends;
  visitors;

  constructor(user, friends, visitors) {
    this.user = user;
    this.friends = friends;
    this.visitors = visitors;
    this.friendRelations = new Map();

    friends.forEach((friend) => {
      const [userA, userB] = friend;
      this.addRelation(userA, userB);
      this.addRelation(userB, userA);
    });
  }

  addRelation(userA, userB) {
    if (this.friendRelations.has(userA)) {
      this.friendRelations.get(userA).push(userB);
    } else {
      this.friendRelations.set(userA, [userB]);
    }
  }

  getFriends(user) {
    return this.friendRelations.get(user) ?? [];
  }

  getScores() {
    const scores = new Map();

    const addScore = (user, score) => {
      const currentScore = scores.get(user) ?? 0;
      scores.set(user, currentScore + score);
    };

    this.visitors.forEach((visitor) => {
      addScore(visitor, 1);
    });

    for (const friend of this.getFriends(this.user)) {
      this.getFriends(friend).forEach((friendOfFriend) => {
        addScore(friendOfFriend, 10);
      });
    }

    scores.delete(this.user);
    this.getFriends(this.user).forEach((friend) => {
      scores.delete(friend);
    });

    return [...scores.entries()];
  }

  getRecommendedFriends(scoreArr) {
    return scoreArr
      .sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
      })
      .slice(0, 5)
      .map((entry) => entry[0]);
  }
}

const problem7 = (user, friends, visitors) => {
  const manager = new Manager(user, friends, visitors);

  const scores = manager.getScores();
  const recommendedFriends = manager.getRecommendedFriends(scores);
  return recommendedFriends;
};

console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);

module.exports = problem7;
