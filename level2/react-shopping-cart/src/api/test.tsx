type PathParams<Path extends string> =
  Path extends `:${infer Param}/${infer Rest}`
    ? Param | PathParams<Rest>
    : Path extends `:${infer Param}`
    ? Param
    : Path extends `${infer _Prefix}:${infer Rest}`
    ? PathParams<`:${Rest}`>
    : never;

type Params = PathParams<':siteId/user/:userId'>;

type PathArgs<Path extends string> = { [K in PathParams<Path>]: string };

type Result = PathArgs<'/dashboard/:siteId/user:userId'>;

type Props<Path extends string> = {
  path: Path;
  params: PathArgs<Path>;
};

const Route = <Path extends string>(props: Props<Path>) => {
  return null;
};

const Test = () => {
  return (
    <>
      <Route
        path="/dashboard/:siteId/user/:userId"
        params={{ siteId: '1', userId: '1' }}
      />
      <Route path="/dashboard" params={{}} />
    </>
  );
};
