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