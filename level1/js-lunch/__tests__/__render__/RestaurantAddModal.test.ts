/**
 * @jest-environment jsdom
 */

import Selector from '../../src/components/common/Selector';
import { $ } from '../../src/utils/dom';
import RestaurantAddModal from '../../src/components/RestaurantAddModal';

describe('RestaurantAddModal 렌더링 테스트', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="restaurant-add-modal"></div>
    `;
  });

  it('렌더링 테스트', () => {
    new RestaurantAddModal($('#restaurant-add-modal')).render();

    expect($('#restaurant-add-modal')).toMatchInlineSnapshot(`
      <div
        id="restaurant-add-modal"
      >
        
            
        <div
          class="modal-backdrop"
        />
        
            
        <div
          class="modal-container"
        >
          
              
          <h2
            class="modal-title text-title"
          >
            새로운 음식점
          </h2>
          
              
          <form>
            
                
            <div
              class="form-item form-item--required"
            >
              
                  
              <label
                for="category text-caption"
              >
                카테고리
              </label>
              
                  
              <select
                id="category"
                name="category"
                required=""
              >
                
                    
                <option
                  value=""
                >
                  선택해 주세요
                </option>
                
                    
                <option
                  value="한식"
                >
                  한식
                </option>
                
                    
                <option
                  value="중식"
                >
                  중식
                </option>
                
                    
                <option
                  value="일식"
                >
                  일식
                </option>
                
                    
                <option
                  value="양식"
                >
                  양식
                </option>
                
                    
                <option
                  value="아시안"
                >
                  아시안
                </option>
                
                    
                <option
                  value="기타"
                >
                  기타
                </option>
                
                  
              </select>
              
                
            </div>
            

                
            <div
              class="form-item form-item--required"
            >
              
                  
              <label
                for="restaurantName text-caption"
              >
                이름
              </label>
              
                  
              <input
                id="restaurantName"
                name="restaurantName"
                required=""
                type="text"
              />
              
                
            </div>
            

                
            <div
              class="form-item form-item--required"
            >
              
                  
              <label
                for="distance text-caption"
              >
                거리(도보 이동 시간) 
              </label>
              
                  
              <select
                id="distance"
                name="distance"
                required=""
              >
                
                    
                <option
                  value=""
                >
                  선택해 주세요
                </option>
                
                    
                <option
                  value="5"
                >
                  5분 내
                </option>
                
                    
                <option
                  value="10"
                >
                  10분 내
                </option>
                
                    
                <option
                  value="15"
                >
                  15분 내
                </option>
                
                    
                <option
                  value="20"
                >
                  20분 내
                </option>
                
                    
                <option
                  value="30"
                >
                  30분 내
                </option>
                
                  
              </select>
              
                
            </div>
            

                
            <div
              class="form-item"
            >
              
                  
              <label
                for="description text-caption"
              >
                설명
              </label>
              
                  
              <textarea
                cols="30"
                id="description"
                name="description"
                rows="5"
              />
              
                  
              <span
                class="help-text text-caption"
              >
                메뉴 등 추가 정보를 입력해 주세요.
              </span>
              
                
            </div>
            

                
            <div
              class="form-item"
            >
              
                  
              <label
                for="link text-caption"
              >
                참고 링크
              </label>
              
                  
              <input
                id="link"
                name="link"
                type="text"
              />
              
                  
              <span
                class="help-text text-caption"
              >
                매장 정보를 확인할 수 있는 링크를 입력해 주세요.
              </span>
              
                
            </div>
            

                
            <div
              class="button-container"
            >
              
                  
              <button
                class="button button--secondary text-caption"
                type="button"
              >
                
                    취소하기
                  
              </button>
              
                  
              <button
                class="button button--primary text-caption"
              >
                
                    추가하기
                  
              </button>
              
                
            </div>
            
              
          </form>
          
            
        </div>
        
          
      </div>
    `);
  });
});
