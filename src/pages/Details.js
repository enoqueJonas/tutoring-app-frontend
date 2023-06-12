import { useParams } from 'react-router';

export default function Details() {
  const { subject } = useParams();
  return (
    <div>
      <p>{subject}</p>
    </div>
  );
}
