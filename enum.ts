//字面量类型  Literal Types
interface Res {
  code: 10000 | 10001 | 50000;
  status: 'success' | 'failure';
  data: any;
}

interface Temp {
  user: {vip: true; expires: string;} | {vip: false; promote: string;}
}
