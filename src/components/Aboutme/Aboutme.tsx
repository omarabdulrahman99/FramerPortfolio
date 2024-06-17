import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import './Aboutme.sass';

export default function Aboutme() {

  let myname: string;
  let mol: number;
  let album: string | number;
  let re: RegExp = /\w+/g
  // infers a return type;
  const sum = (a: number, b: string) => {
    return a + b;
  }
  let guitars = ['g1', 'g2', 'g3'];
  let mixed = ['EVH', 1984, true];
  // can't assign mixed arrays types, guitars = [mixed];
  let bands: string[] = [];
  bands.push('Van Halen');
  //  Tuple
  let myTuple: [string, number, boolean] = ['Dave', 42, true];
  let mexed = ['John', 1, false];
  // mexed isnt specific enough in array count types, cant assign directly:
  // myTuple = mexed;

  // type alias
  type stringOrNumberArray = (string | number)[];

  type Guitarist =  {
    name?: string,
    active: boolean,
    albums: (string | number)[]
  }
  let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
  }
  const greetGuitarist  = (guitarist: Guitarist): string => {
    return `Hello ${guitarist.name}!`
  }
  type mathFunction = (a: number, b: number) => number;

  let multiply: mathFunction = function (c, d) {
    return c * d;
  }
  interface mathFunc {
    (a: number, b: number): number
  }
  // obv can't use default values in interface or type alias, only in actual variable.
  const total = (a: number, ...restnums: number[]): number => {
    return a + restnums.reduce((total, currValue) => total + currValue);
  }

  const functotal = (): string => {
    // it knows what type this function returns
    if (total(4,5,6)) {
      return '5 i like';
    }
    return '';
  }
  // if you have a function, which returns either string or number. and you use it, it wont detect 
  // returning value:
  // let nextVal: number = addOrConcat(2,2,'concat') as number
  // type assertion

  // no typescript error within function, it can tell null cant be used with concat due to if check.
  function duplicate(text: string | null): string | null {
    if (text === null || text === undefined) {
      text = "";
    }
    return text.concat(text);
  }

  function greet(name: string) {
      console.log(`Hi ${name}`);
  }
  // can't tell if will return string or null in runtime, so using non-null assertion tells TS itll
  // never be null or undefined but wont force the variable to change, it can be null or undefined.
  greet(duplicate('jgjg')!); 

  // need to specify index type in object if you are oging to store string in variable for obj index
  // or use keyof
  interface TransactionObj {
    Pizza: number,
    Books: -5,
    Job: 50
  }

  const todaysTransaction: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
  }

  let prop: string = 'Books';
  console.log(todaysTransaction[prop as keyof TransactionObj]);
  Object.keys(todaysTransaction).map(key => {
    console.log(key as keyof typeof todaysTransaction); //typeof object
    console.log(key as keyof TransactionObj); //keyof interface
  })
  //utility types, Record<Keys, Types>. even with this, if you try to loop with key variable, still need keyof
  type Streams = 'salary' | 'bonus' | 'sidehustle';
  type Incomes = Record<Streams, number | string>; //use object keys from Strea,s use number | string as type of values
  const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
  } 


  interface BoolCheck<T> {
    value: T,
    is: boolean
  }
  /*
  const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
      if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
      }
      if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false}
      }
      return { value: arg, is: !!arg}
  }
  */
type mappedType = {
  abc: string,
  bcd: string,
  cde: string,
  def: string,
}
type something = 'abc' | 'bcd' | 'cde' | 'def';

/*
Omit utility type works on object type or interfaces to omit one of the key-value pair.
Exclude only works on union literal to exclude one of the property.
Omit uses Pick and Exclude under the hook. */
/* type mappedTypeWithOmit = {
    [k in Omit<something, "def">]: string;
} */
//type mappedTypeWithOmit = Omit<mappedType,'def'>

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}
const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  ).then(res => {
    return res.json()
  }).catch(err => {
    if (err instanceof Error) console.log(err.message)
  })
  return data
}
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
/*
  type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
  }
  const Counter = ({ setCount, children }: CounterProps) => {
    return (
      <>
        <h1>{children}</h1>
      </>
    )
  }
*/

/*
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)
*/

  type ChildrenType = {
    children: (num: number) => ReactNode
  }
  const Counter = ({ children }: ChildrenType) => {
    const [count, setCount] = useState<number>(1);
  }
  const getSomeValue = () => {
    return 5;
  }
  enum E {
    B,
    A = getSomeValue(), // computed value needs to fall underneath ununitialized value since counting starts
    // from nitialized value: 1 while I guess this one needs to wait for result
  }
  // https://www.typescriptlang.org/docs/handbook/enums.html

  return (
  	<div id="aboutmesection">
  	  <svg preserveAspectRatio="none" width="100%" height="300px" id="svgwaves" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,93 C 79.85128205128208,121.32820512820513 159.70256410256417,149.65641025641025 250,139 C 340.29743589743583,128.34358974358975 441.0410256410256,78.70256410256411 515,64 C 588.9589743589744,49.29743589743589 636.1333333333333,69.53333333333333 710,83 C 783.8666666666667,96.46666666666667 884.4256410256412,103.16410256410258 975,93 C 1065.5743589743588,82.83589743589742 1146.1641025641024,55.81025641025641 1222,53 C 1297.8358974358976,50.18974358974359 1368.9179487179488,71.59487179487179 1440,93 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fillOpacity="0.4"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,218 C 60.44102564102565,237.48717948717947 120.8820512820513,256.97435897435895 205,249 C 289.1179487179487,241.02564102564105 396.91282051282053,205.58974358974362 481,197 C 565.0871794871795,188.41025641025638 625.4666666666667,206.66666666666666 711,221 C 796.5333333333333,235.33333333333334 907.2205128205128,245.74358974358975 997,233 C 1086.7794871794872,220.25641025641025 1155.6512820512821,184.35897435897436 1226,178 C 1296.3487179487179,171.64102564102564 1368.174358974359,194.82051282051282 1440,218 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fillOpacity="0.53"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,343 C 74.91025641025641,357.20000000000005 149.82051282051282,371.40000000000003 243,360 C 336.1794871794872,348.59999999999997 447.6282051282051,311.6 520,305 C 592.3717948717949,298.4 625.6666666666669,322.20000000000005 689,333 C 752.3333333333331,343.79999999999995 845.7051282051282,341.5999999999999 934,335 C 1022.2948717948718,328.4000000000001 1105.5128205128206,317.4 1189,318 C 1272.4871794871794,318.6 1356.2435897435898,330.8 1440,343 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fill="#0d0d0d" fillOpacity="1"></path>
      </svg>
      <div className="aboutmemain">
        Hello
      </div>
      <svg preserveAspectRatio="none" width="100%" height="300px" id="svgwavesbottom" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,93 C 79.85128205128208,121.32820512820513 159.70256410256417,149.65641025641025 250,139 C 340.29743589743583,128.34358974358975 441.0410256410256,78.70256410256411 515,64 C 588.9589743589744,49.29743589743589 636.1333333333333,69.53333333333333 710,83 C 783.8666666666667,96.46666666666667 884.4256410256412,103.16410256410258 975,93 C 1065.5743589743588,82.83589743589742 1146.1641025641024,55.81025641025641 1222,53 C 1297.8358974358976,50.18974358974359 1368.9179487179488,71.59487179487179 1440,93 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fillOpacity="0.4"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,218 C 60.44102564102565,237.48717948717947 120.8820512820513,256.97435897435895 205,249 C 289.1179487179487,241.02564102564105 396.91282051282053,205.58974358974362 481,197 C 565.0871794871795,188.41025641025638 625.4666666666667,206.66666666666666 711,221 C 796.5333333333333,235.33333333333334 907.2205128205128,245.74358974358975 997,233 C 1086.7794871794872,220.25641025641025 1155.6512820512821,184.35897435897436 1226,178 C 1296.3487179487179,171.64102564102564 1368.174358974359,194.82051282051282 1440,218 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fillOpacity="0.53"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,343 C 74.91025641025641,357.20000000000005 149.82051282051282,371.40000000000003 243,360 C 336.1794871794872,348.59999999999997 447.6282051282051,311.6 520,305 C 592.3717948717949,298.4 625.6666666666669,322.20000000000005 689,333 C 752.3333333333331,343.79999999999995 845.7051282051282,341.5999999999999 934,335 C 1022.2948717948718,328.4000000000001 1105.5128205128206,317.4 1189,318 C 1272.4871794871794,318.6 1356.2435897435898,330.8 1440,343 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fill="#0d0d0d" fillOpacity="1"></path>
      </svg>
  	</div>
  )
}