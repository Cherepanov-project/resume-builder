import VideoPlayer from './VideoPlayer';

export const props = {
  name: 'VideoPlayer',
  type: 'Media',
  // name: 'LayoutBlockVideoPlayer',
  // type: 'Composite Block',
  source: 'atoms',
  props: {
    text: 'https://www.youtube.com/embed/JGckbtbQThM?si=e3aN0ObSkZ1WoHuE',
    wrapperStyle: { textAlign: 'center' },
    textStyle: { width: '100%', height: '100%', border: 'none' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  layout: { i: null, x: 0, y: 0, w: 3, h: 10 },
};

export default VideoPlayer;
