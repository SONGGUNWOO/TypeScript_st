function error(message: string): never {
  throw new Error(message);

}

function fail() {
  return error('failed');
}


function infinitedLoop(): never {
  while(true) { }
}

// let ai: string =  "hello";
declare  const ai: string | number;

if( typeof ai !== 'string'){
  ai;
}


type Indexable<T> = T extends string ? T & {[index: string]: any } :never;

type ObjectIndexable = Indexable<{}>;