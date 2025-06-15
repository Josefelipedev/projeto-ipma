import { CardApi } from '@/components/card_api';
import { CardIpma } from '@/components/card_ipma';

export default function Index() {
  return (
    <div
      className="flex justify-center items-start h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/fundo.jpg")' }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <CardApi />
        <CardIpma />
      </div>
    </div>
  );
}
