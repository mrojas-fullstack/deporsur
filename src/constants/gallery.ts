import SchMerced1 from '../assets/gallery/sub13/merced-sch/sch-merced-1.webp';
import SchMerced2 from '../assets/gallery/sub13/merced-sch/sch-merced-2.webp';
import SchMerced3 from '../assets/gallery/sub13/merced-sch/sch-merced-3.webp';
import SchMerced4 from '../assets/gallery/sub13/merced-sch/sch-merced-4.webp';
import SchMerced5 from '../assets/gallery/sub13/merced-sch/sch-merced-5.webp';
import SchMerced6 from '../assets/gallery/sub13/merced-sch/sch-merced-6.webp';

import Sch271 from '../assets/gallery/sub15/27-sch/sch-27-1.webp';
import Sch272 from '../assets/gallery/sub15/27-sch/sch-27-2.webp';
import Sch273 from '../assets/gallery/sub15/27-sch/sch-27-3.webp';
import Sch274 from '../assets/gallery/sub15/27-sch/sch-27-4.webp';
import Sch275 from '../assets/gallery/sub15/27-sch/sch-27-5.webp';
import Sch276 from '../assets/gallery/sub15/27-sch/sch-27-6.webp';

import SchEfar1 from '../assets/gallery/sub15/efar-sch/sch-efar-1.webp';
import SchEfar2 from '../assets/gallery/sub15/efar-sch/sch-efar-2.webp';
import SchEfar3 from '../assets/gallery/sub15/efar-sch/sch-efar-3.webp';
import SchEfar4 from '../assets/gallery/sub15/efar-sch/sch-efar-4.webp';
import SchEfar5 from '../assets/gallery/sub15/efar-sch/sch-efar-5.webp';
import SchEfar6 from '../assets/gallery/sub15/efar-sch/sch-efar-6.webp';

export const GALLERY = {
  sub13: [
    {
      title: 'Chalhuanca vs La Merced',
      images: [
        SchMerced1,
        SchMerced2,
        SchMerced3,
        SchMerced4,
        SchMerced5,
        SchMerced6,
      ],
    }
  ],
  sub15: [
    {
      title: 'Chalhuanca vs EFAR',
      images: [
        SchEfar1,
        SchEfar2,
        SchEfar3,
        SchEfar4,
        SchEfar5,
        SchEfar6,
      ],
    },
    {
      title: 'Chalhuanca vs La 27',
      images: [
        Sch271,
        Sch272,
        Sch273,
        Sch274,
        Sch275,
        Sch276,
      ],
    }
  ],
} as const;