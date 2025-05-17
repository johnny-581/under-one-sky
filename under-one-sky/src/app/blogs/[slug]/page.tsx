// import { notFound } from "next/navigation";
// import { BlogPost } from "@/app/blogs/page";

// async function getBlogPost(slug: string): Promise<BlogPost | null> {
//     // mock
//     const posts: Record<string, BlogPost> = {
//         "post-number-one": {
//             slug: "post-number-one",
//             title: "One",
//             content: "This is my first blog post.",
//             excerpt: "first blog post"
//         },
//         "post-number-two": {
//             slug: "post-number-two",
//             title: "TITLE TWO",
//             content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n Aenean massa.\n Cum sociis natoque penatibus et magnis dis parturient montes",
//             excerpt: "second blog post!!!!!"
//         },
//     }

//     return posts[slug] || null;
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//     const post = await getBlogPost(params.slug);

//     if (!post) {
//         return {
//             title: "Post Not Found"
//         }
//     }

//     return {
//         title: post.title,
//         description: `Read our blog post: ${post.title}`
//     }
// }

// export default async function BlogPage({ params }: { params: { slug: string } }) {
//     const post = await getBlogPost(params.slug);

//     if (!post) {
//         console.log("not found error in BlogPage!!")
//         notFound();
//     }

//     return (
//         <article className="max-w-2xl mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//             <div className="prose lg:prose-xl">
//                 {post.content.split("\n").map((paragraph, index) => (
//                     <p key={index} className="mb-4">
//                         {paragraph}
//                     </p>
//                 ))}
//             </div>
//         </article>
//     )
// }

// // import { notFound } from 'next/navigation';

// // // Mock blog data - replace with real data fetching
// // const mockPosts: { [key: string]: { title: string; content: string } } = {
// //     'first-post': {
// //         title: 'My First Blog Post',
// //         content: 'This is the content of my first blog post. Welcome to my blog!',
// //     },
// //     'second-post': {
// //         title: 'Another Post',
// //         content: 'Here are some more thoughts I wanted to share with you all.',
// //     },
// // };

// // export default function BlogPage({ params }: { params: { slug: string } }) {
// //     const post = mockPosts[params.slug];

// //     if (!post) {
// //         notFound();
// //     }

// //     console.log("!!!!!!!!!!");

// //     return (
// //         <div className="max-w-2xl mx-auto p-4">
// //             <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
// //             <p className="text-gray-600">{post.content}</p>
// //         </div>
// //     );
// // }

// // // Generate static paths for the mock posts
// // export async function generateStaticParams() {
// //     return Object.keys(mockPosts).map((slug) => ({
// //         slug,
// //     }));
// // }