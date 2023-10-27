import Link from 'next/link';
import {Hero} from "@/components";

export default function Home() {
    return (
        <main>
            <h1>{'Hello world'}</h1>
            <Link href={'/users'}>Users</Link>
            <Hero/>
        </main>
    );
}
