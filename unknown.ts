declare const maybe: unknown;

// const aNumber: number = maybe;                  

if(maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string =maybe; 할당 할수 없다  ture 이기 때문에
}

if(typeof  maybe === "string") {
  const aString: string = maybe; 

  // const aBoolean: boolean = maybe; 
}