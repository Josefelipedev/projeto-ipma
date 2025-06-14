import { Card } from '@/components/card';

export default function Index() {
  return (
    <div
      className="flex justify-center items-start h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/fundo.jpg")' }}
    >
      <div>
        <Card />
      </div>
    </div>
  );
}
