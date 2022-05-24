import member01 from 'src/assets/imgs/members/member01.png';
import member02 from 'src/assets/imgs/members/member02.png';
import member03 from 'src/assets/imgs/members/member03.png';
import member04 from 'src/assets/imgs/members/member04.png';

type Member = {
  img: string;
  title: string;
  description: string;
};

export const members: Member[] = [
  {
    img: member01,
    title: 'member',
    description:
      "By choosing a set of colors, you'll train a neural network powered algorithm .",
  },
  {
    img: member02,
    title: 'member',
    description:
      "By choosing a set of colors, you'll train a neural network powered algorithm .",
  },
  {
    img: member03,
    title: 'member',
    description:
      "By choosing a set of colors, you'll train a neural network powered algorithm .",
  },
  {
    img: member04,
    title: 'member',
    description:
      "By choosing a set of colors, you'll train a neural network powered algorithm .",
  },
];
