describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('페이지가 보인다.', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('header').should('be.visible');
    cy.get('#root').should('be.visible');
    cy.get('[data-component="movie-list"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  it('검색어를 입력하면 검색 결과가 보인다.', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.search-input').clear('qn');
    cy.get('.search-input').type('분노{enter}');
    cy.get('h2.item-title').should('have.text', '"분노" 검색 결과');
    cy.get('[data-component="movie-list"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.search-input').clear('qn');
    cy.get('.search-input').type('분노{enter}');
    cy.get('h2.item-title').should('have.text', '"분노" 검색 결과');
    cy.get('[data-component="movie-list"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  it('검색 결과가 없으면 "검색 결과가 없습니다." 라는 문구가 보인다.', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.search-input').clear('ru');
    cy.get('.search-input').type('검색 결과가 없을 예정{enter}');
    cy.get('.empty').should('have.text', '검색 결과가 없습니다.');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.search-input').clear('ru');
    cy.get('.search-input').type('검색 결과가 없을 예정{enter}');
    cy.get('.empty').should('have.text', '검색 결과가 없습니다.');
    /* ==== End Cypress Studio ==== */
  });

  it('스크롤을 내리면 더 많은 결과가 보인다.', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.item-list').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.item-list').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  it('movie item을 클릭하면 상세 정보 모달이 보인다.', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-id="385687"] > a > .item-card > .item-thumbnail').click();
    cy.get('.modal-header').should(
      'have.text',
      '  \n          분노의 질주: 라이드 오어 다이\n          x\n        ',
    );
    /* ==== End Cypress Studio ==== */
  });

  it('상세 정보 모달에서 "닫기" 버튼을 클릭하면 모달이 닫힌다.', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-id="385687"] > a > .item-card > .item-thumbnail').click();
    cy.get('.modal-close-btn').click();
    cy.get('[data-component="modal"]').should('not.be.visible');
    /* ==== End Cypress Studio ==== */
  });

  it('평점을 클릭하면 문구가 변경된다.', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-id="385687"] > a > .item-card > .item-thumbnail').click();
    cy.get('[data-rating="2"] > img').click();
    cy.get('[data-rating="4"] > img').click();
    cy.get('[data-rating="6"] > img').click();
    cy.get('[data-rating="8"] > img').click();
    cy.get('[data-rating="10"] > img').click();
    cy.get('.rating-container').should('have.text', '\n              내 평점\n              \n              명작이에요\n            ');
    /* ==== End Cypress Studio ==== */
  });
});
