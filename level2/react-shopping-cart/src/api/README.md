axios 참고해서 메소드 get, delete 와 post, put, patch 반복문으로 메소드 구현하기

class MyClass {
constructor() {
const methodsToAdd = ['method1', 'method2', 'method3'] as const;

    methodsToAdd.forEach((methodName) => {
      this[methodName] = () => {
        console.log(`Calling ${methodName}`);
      };
    });

}
}
