// import Link from "next/link";

// export type BlogPost = {
//     slug: string
//     title: string
//     content: string
//     excerpt: string
// }

// async function getBlogPosts(): Promise<BlogPost[]> {
//     // mock
//     return [
//         {
//             slug: "post-number-one",
//             title: "One",
//             content: "This is my first blog post.",
//             excerpt: "first blog post"
//         },
//         {
//             slug: "post-number-two",
//             title: "TITLE TWO",
//             content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n Aenean massa.\n Cum sociis natoque penatibus et magnis dis parturient montes",
//             excerpt: "second blog post!!!!!"
//         },
//     ]
// }

// export const metadata = {
//     title: "Blog Index",
//     description: "Read our latest blog posts!"
// }

// export default async function BlogIndex() {
//     const posts = await getBlogPosts();

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-6">All The Blogs</h1>
//             <ul className="space-y-4">
//                 {posts.map((post) => (
//                     <li key={post.slug} className="border-b pb-4">
//                         <Link href={`/blogs/${post.slug}`} className="group">
//                             <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
//                                 {post.title}
//                             </h2>
//                             <p className="text-gray-600">{post.excerpt}</p>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }