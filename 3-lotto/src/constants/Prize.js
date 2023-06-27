const PRIZE_AMOUNTS = Object.freeze({
  FIRST_PRIZE: 2_000_000_000,
  SECOND_PRIZE: 30_000_000,
  THIRD_PRIZE: 1_500_000,
  FOURTH_PRIZE: 50_000,
  FIFTH_PRIZE: 5_000,
});

const PRIZE_DESCRIPTIONS = Object.freeze({
  FIRST_PRIZE: '6개 번호 일치',
  SECOND_PRIZE: '5개 번호 + 보너스 번호 일치',
  THIRD_PRIZE: '5개 번호 일치',
  FOURTH_PRIZE: '4개 번호 일치',
  FIFTH_PRIZE: '3개 번호 일치',
});

module.exports = {
  PRIZE_AMOUNTS,
  PRIZE_DESCRIPTIONS,
};
