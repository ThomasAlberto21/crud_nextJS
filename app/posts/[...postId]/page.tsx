import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Detail',
};

export default function PostDetail({ params }: { params: { postId: string } }) {
  return <div>Post Detail {params.postId[0]}</div>;
}
