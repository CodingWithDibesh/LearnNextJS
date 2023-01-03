import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout"

import image from "../../public/images/profile.jpg"

export default function FirstPost() {
    return <>
        <Layout>
            <Head>
                <title>Dibesh's Blog</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">👈 Back to home</Link>
            </h2>
            <Image src={image} width={200} height={200} alt="Hello World" />
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </Layout>
    </>
}