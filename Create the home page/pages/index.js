import Head from 'next/head';
import Spreadsheet from '../components/Spreadsheet';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spreadsheet App</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen">
        <Spreadsheet />
      </main>
    </div>
  );
}
