import Card from './Card';

export default function CardsContainer() {
  return (
    <section className="flex flex-col items-center justify-between gap-4 w-full lg:w-[50%]">
      <span className="text-2xl">work in progress, sandbox, testing</span>

      <Card
        url="https://archiwumkulinarne.deadbrain.dev/"
        title="archwium kulinarne"
      />
      <Card url="https://lofi.today" title="lofi.today" />
      <Card url="/testpage" title="test page" />
      <Card url="bad-link" title="bad link" />
    </section>
  );
}
