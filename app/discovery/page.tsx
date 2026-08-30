import { ClientDiscoveryForm } from '@/components/client-discovery-form';

export default function DiscoveryPage() {
  return (
    <main className='min-h-screen bg-black px-4 pb-20 pt-24 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10 text-center'>
          <p className='mb-3 text-sm uppercase tracking-[0.28em] text-blue-300'>Project Intake</p>
          <h1 className='text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl'>Build the right thing, faster.</h1>
          <p className='mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg'>
            Share your goals, timeline, and technical needs and I’ll turn it into a clear recommendation, pricing direction, and execution plan.
          </p>
        </div>

        <ClientDiscoveryForm />
      </div>
    </main>
  );
}
