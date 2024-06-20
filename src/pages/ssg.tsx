import { NextPage } from 'next'
import Head from 'next/head'

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
    return (
        <div>
            {}
                <Head>
                    <title>Static Site Generation</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <p>
                        This page is SSG.
                    </p>
                </main>
        </div>
    )
}

export default SSG