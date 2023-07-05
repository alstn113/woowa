/**
 * @jest-environment jsdom
 */

import Selector from '../../src/components/common/Selector';
import { $ } from '../../src/utils/dom';

describe('Selector 렌더링 테스트', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="rendering-target"></div>
    `;
  });

  it('Selector가 렌더링된다.', () => {
    const $target = $('.rendering-target');
    new Selector($target, {
      info: {
        name: 'category',
        id: 'category-filter',
        className: 'restaurant-filter',
        options: [
          { value: '전체', name: '전체' },
          { value: '한식', name: '한식' },
          { value: '중식', name: '중식' },
          { value: '일식', name: '일식' },
          { value: '양식', name: '양식' },
          { value: '아시안', name: '아시안' },
          { value: '기타', name: '기타' },
        ],
      },
      onChange: () => {},
    }).render();

    expect($target.innerHTML).toMatchInlineSnapshot(`
      "
            <select name="category" id="category-filter" class="restaurant-filter">
              <option value="전체">전체</option><option value="한식">한식</option><option value="중식">중식</option><option value="일식">일식</option><option value="양식">양식</option><option value="아시안">아시안</option><option value="기타">기타</option>
            </select>
          
            <select name="category" id="category-filter" class="restaurant-filter">
              <option value="전체">전체</option><option value="한식">한식</option><option value="중식">중식</option><option value="일식">일식</option><option value="양식">양식</option><option value="아시안">아시안</option><option value="기타">기타</option>
            </select>
          "
    `);
  });
});
