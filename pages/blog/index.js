import Layout from '../../components/Layout'
import Link from 'next/link'

const URI = 'https://jsonplaceholder.typicode.com/posts'

const Index = ({ data }) => {
    return (
        <Layout title="List Posts Next.js" description="Description List Posts">
            <div>
                <h1>Lista de Posts</h1>

                {data.map(({ id, title, body }) => (
                    <div key={id}>
                        <h3>
                            <Link href={`/blog/${id}`}>
                                <a>
                                    {id} - {title}
                                </a>
                            </Link>
                        </h3>
                        <p>{body}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch(URI)
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export default Index
