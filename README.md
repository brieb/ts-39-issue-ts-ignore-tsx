@ts-ignore comments in TSX are no longer suppressing errors on the following line.

```
      {/*
      // @ts-ignore */}
      <MyOtherComponent prop={123} />
```

Error occurs in TypeScript 3.9 but not 3.8

```
$ npx tsc -p tsconfig.json 
src/MyOtherComponent.tsx:12:25 - error TS2322: Type 'number' is not assignable to type 'string'.

12       <MyOtherComponent prop={123} />
                           ~~~~

  src/MyOtherComponent.tsx:4:3
    4   prop: string;
        ~~~~
    The expected type comes from property 'prop' which is declared here on type 'IntrinsicAttributes & Props'


Found 1 error.
```
