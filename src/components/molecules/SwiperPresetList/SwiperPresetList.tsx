import SwiperPreview from '@atoms/SwiperPreview';
import { swiperPresets } from '@/utils';

const SwiperPresetList = () => {
  const verticalParams = {
    name: swiperPresets.vertical.name,
    params: {
      ...swiperPresets.vertical.params,
      height: 30,
    }, // адаптация свайпера под превью, чтобы не ломался
  };
  return (
    <ul>
      <SwiperPreview {...swiperPresets.default} />
      <SwiperPreview {...swiperPresets.navigation} />
      <SwiperPreview {...swiperPresets.pagination} />
      <SwiperPreview {...verticalParams} />
      <SwiperPreview {...swiperPresets.multiple} />
    </ul>
  );
};

export default SwiperPresetList;
