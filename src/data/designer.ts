import dsner01 from 'src/assets/imgs/dsner/dsner01.png';
import dsner02 from 'src/assets/imgs/dsner/dsner02.png';
import dsner03 from 'src/assets/imgs/dsner/dsner03.png';

type Designer = {
  img: string;
  title: string;
  description: string;
};

export const designers: Designer[] = [
  {
    img: dsner01,
    title: 'Designer',
    description:
      'We exist to serve organizations that are making a positive social impact.',
  },
  {
    img: dsner02,
    title: 'Designer',
    description:
      'We exist to serve organizations that are making a positive social impact.',
  },
  {
    img: dsner03,
    title: 'Designer',
    description:
      'We exist to serve organizations that are making a positive social impact.',
  },
];
