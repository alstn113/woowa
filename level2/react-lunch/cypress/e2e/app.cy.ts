/// <reference types="cypress" />

describe('js-lunch E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('헤더가 보인다.', () => {
    cy.get('header').should('be.visible');
    cy.get('header h1').should('contain', '점심 뭐 먹지');
  });

  it('메인 페이지가 보인다.', () => {
    cy.get('main').should('be.visible');
    cy.get('main section ul').should('be.visible');
  });

  it('카테고리로 정렬해 본다.', () => {
    cy.get('[name="category"]').select('한식');
    cy.get(':nth-child(1) > .css-1hf9wkq > .css-mm12io').should(
      'have.text',
      '피양콩할마니',
    );
  });

  it('거리 순으로 정렬해 본다.', () => {
    cy.get('[name="sort"]').select('distance');
    cy.get(':nth-child(1) > .css-1hf9wkq > .css-mm12io').should(
      'have.text',
      '친친',
    );
    cy.get(':nth-child(2) > .css-1hf9wkq > .css-mm12io').should(
      'have.text',
      '도스타코스 선릉점',
    );
  });

  it('레스토랑 상세 정보를 본다.', () => {
    cy.get(':nth-child(1) > .css-1hf9wkq > .css-mm12io').click();
    cy.get('.css-khnpka').should('be.visible');
    cy.get('.css-h4w38j > .css-1hf9wkq > .css-mm12io').should(
      'have.text',
      '도스타코스 선릉점',
    );
  });
});
