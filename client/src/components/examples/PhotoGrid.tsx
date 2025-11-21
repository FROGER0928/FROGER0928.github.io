import PhotoGrid from '../PhotoGrid';

export default function PhotoGridExample() {
  const photos = Array.from({ length: 8 }, (_, i) => ({
    id: `photo-${i}`,
    caption: `照片 ${i + 1}`,
  }));

  return <PhotoGrid photos={photos} />;
}
