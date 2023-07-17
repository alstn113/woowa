type PathParams<Path extends string> =
  Path extends `:${infer Param}/${infer Rest}`
    ? Param | PathParams<Rest>
    : Path extends `:${infer Param}`
    ? Param
    : Path extends `${infer _Prefix}:${infer Rest}`
    ? PathParams<`:${Rest}`>
    : never;

type Params1 = PathParams<'/site/:siteId/user/:userId'>;
type Params2 = PathParams<'/dashboard'>;

type PathArgs<Path extends string> = { [K in PathParams<Path>]: string };

type Result1 = PathArgs<'/dashboard/:siteId/user:userId'>;
type Result2 = PathArgs<'/dashboard'>;

const a: Result2 | null = null;

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
      <Route
        path="/dashboard"
        params={{
          a: 1,
        }}
      />
    </>
  );
};
