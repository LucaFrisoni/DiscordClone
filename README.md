This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About this aplication

In this application, you will find an interface that closely resembles the giant Discord platform. After creating an account, you can create a customized server with your profile picture and an attractive name. Within this server, you can manage multiple channels, whether they are for audio, video, or text, as an administrator. To allow another user to join the server, you'll need to share an invitation URL, which, once they've logged into their account, they can paste into their browser's address bar, automatically granting them access to the server.

Additionally, you will have a search feature within each server, allowing you to search for channels and their members. This makes navigation and communication easier within servers with a large number of channels and members.

In particular, the video channel will give you access to your camera and microphone, enabling video conferences with contacts within the channel. As an administrator, you also have the privilege of managing the members of each server, including the ability to remove members and even grant them moderator permissions. A moderator, like an administrator, can delete messages and members.

Furthermore, we offer a personalized chat with a specific member, where you can exchange messages, emojis, images, or PDF files in real-time, thanks to the socket system implemented in the project and also there is an InfiniteLoading Logic so as to improve performance. Lastly, it's worth mentioning that you can edit both servers and channels, as well as individual messages.
