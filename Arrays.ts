//syntax 1
let heroes: string[] = [];
heroes.push("ironman");
heroes.push("batman");
//syntax 2
let powers: Array<number> = [1, 2, 3, 4];

type user = {
  name: string;
  isActive: boolean;
};

let users: user[] = [
  {
    name: "ali",
    isActive: false,
  },
  {
    name: "aman",
    isActive: true,
  },
];

//n-d arrays:
let matrix: number[][] = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 1],
];
