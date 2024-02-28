interface User {
  name: string;
  age: number;
  email?: string;
  status: "default" | "confirmed" | "denied";
  login: (params: { email: string }) => void;
}

const users: User[] = [
  {
    name: "John Doe",
    age: 34,
    email: "john.doe@gmail.com",
    status: "default",
    login: ({ email }) => {
      console.log(email);
    },
  },
  {
    name: "Burak Gozen",
    age: 24,
    status: "denied",
    login: ({ email }) => {
      console.log(email);
    },
  },
];

console.log(users);

function add(a: any, b: any) {
  return a + b;
}

let user: number;

user = 60;
