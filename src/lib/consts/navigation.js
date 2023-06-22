import {
  FaFacebook, FaTwitter, FaGooglePlus, FaVine, FaPinterest,
} from 'react-icons/fa';

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'twitter',
    label: 'Twitter',
    path: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    path: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    key: 'google_plus',
    label: 'Google Plus',
    path: 'https://www.google.com',
    icon: <FaGooglePlus />,
  },
  {
    key: 'vine',
    label: 'Vine',
    path: 'https://www.vine.com',
    icon: <FaVine />,
  },
  {
    key: 'pinterest',
    label: 'Pinterest',
    path: 'https://www.pinterest.com',
    icon: <FaPinterest />,
  },
];

export default DASHBOARD_SIDEBAR_BOTTOM_LINKS;
