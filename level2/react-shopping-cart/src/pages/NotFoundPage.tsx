const NotFoundPage = () => {
  type ExtractHttpParams<
    THttpPath extends string,
    TParams extends unknown[] = [],
  > = THttpPath extends `/${infer Remain}`
    ? ExtractHttpParams<Remain, TParams>
    : THttpPath extends `:${infer Param}/${infer Remain}`
    ? ExtractHttpParams<Remain, [...TParams, unknown]>
    : THttpPath extends `${string}/${infer Remain}`
    ? ExtractHttpParams<Remain, TParams>
    : THttpPath extends `:${infer Param}`
    ? [...TParams, unknown]
    : TParams;

  // 사용 예시

  type PathParams = ExtractHttpParams<'/post/:postId/comment/:commentId'>;

  const a: PathParams = ['1', '2'];

  return <div>NotFoundPage</div>;
};

export default NotFoundPage;
