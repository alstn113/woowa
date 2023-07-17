const CartPage = () => {
  const path = '/post/:postId/comment/:commentId';
  const paramRegex = /:(\w+)/g;

  const matches = path.match(paramRegex);
  console.log(matches);
  const params: { [key: string]: string } = {};
  matches?.forEach((paramName) => {
    params[paramName.slice(1)] = 'some-value';
  });

  if (matches) {
    const paramName = matches[0].slice(1); // ":" 제외하고 파라미터 이름 추출
    console.log(paramName); // 출력: "postId"
  }

  return <div>CartPage</div>;
};

export default CartPage;
