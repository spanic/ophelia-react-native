import { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDownSelectIcon: FC = memo(() => (
  <Svg width={18} height={18} fill="none">
    <Path
      fill="#191D30"
      d="M4.707 5.793a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L9 10.086 4.707 5.793Z"
    />
  </Svg>
));

const GoBackChevronIcon: FC = memo(() => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill="#191D30"
      fillRule="evenodd"
      d="M10.607 2.807a1 1 0 0 0-1.415 0l-7.778 7.778a2 2 0 0 0 0 2.829l7.778 7.778a1 1 0 0 0 1.414-1.414L2.829 12l7.779-7.779a1 1 0 0 0 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
));

const CloseIcon: FC = memo(() => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#191D30"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.668 5.669 12.663 12.663m-12.662 0L18.33 5.669"
    />
  </Svg>
));

const SelectedIcon: FC = memo(() => (
  <Svg width={9} height={8} fill="none">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 1.813 3.625 6.188 1 3.562"
    />
  </Svg>
));

export { ChevronDownSelectIcon, GoBackChevronIcon, CloseIcon, SelectedIcon };
