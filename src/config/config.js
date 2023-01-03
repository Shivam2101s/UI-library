export const getOrigin = () => global.origin;

export const getOriginByEnv = () => {
  let origin;
  if (process.env.ENV === 'staging') {
    origin = `https://mobileweb-stg.parkplus.io`;
  } else if (process.env.ENV === 'production') {
    origin = `https://parkplus.io`;
  } else {
    origin = `https://test.parkwheels.co.in:3002`;
  }
  return origin;
};

export const apiConfig = (repo, version = null) => {
  const apiHosts = process.env.API_HOST;
  let apiHost = apiHosts[repo];
  if (version !== null) apiHost += `/${version}`;
  return apiHost;
};

export const COLORS = {
  black: '#000000',
  blue: '#2B79FF',
  red: '#CC001B',
  green: '#00AD47',
  darkGreen: '#026d46',
  lightGreen: 'rgb(208 255 218)',
  yellow: '#ffd52a',
  darkYellow: '#F07D00',
  lightYellow: '#ffcf9a',
  warningYellow: '#f9f78e',
  lightRed: '#fce4ec',
  midRed: '#ff9a9a',
  orange: '#fd6e21',
  white: '#fff',
  greyShade1: '#F0F0F1',
  greyShade2: '#ABABB2',
  offWhite: 'rgb(247 247 247)',
  blueShade1: '#FAFCFF',
  lightBlue: '#DEEAFF',
  lightGreen2: '#CEFFED',
  lightOrange: '#FFEDCB',
  darkGreen2: '#00C07B',
  darkBlue: '#2B79FF',
  pendingYellow: '#FFE7DA',
  pendingTextColor: '#FF6100',
};

export const DEVICE_BREAK_POINT = {
  desktop: 1200,
  tablet: 991,
  phone: 767,
  smallPhone: 550,
};
