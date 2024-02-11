import { YouTubeEmbed } from '@next/third-parties/google';
import Card from './Card';

export default function CardsContainer() {
  return (
    <section className="flex flex-col items-center justify-between gap-4 w-full lg:w-[50%]">
      <Card
        url="https://archiwumkulinarne.deadbrain.dev/"
        title="archwium kulinarne"
      />
      <Card url="https://lofi.today" title="lofi.today" />
      <Card url="/testpage" title="test page" />
      <Card url="bad-link" title="bad link" />
      <div className="w-full">
        <YouTubeEmbed
          videoid="l0V2VWfsVNM"
          // height={480}
          params="controls=1&autoplay=1"
          playlabel="turn on the music"
        />
      </div>
    </section>
  );
}
