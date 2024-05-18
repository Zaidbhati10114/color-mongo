import { useQuery } from '@tanstack/react-query';

interface LikeCountResponse {
  likeCount: number;
}

const fetchLikeCount = async (cardId: string): Promise<LikeCountResponse> => {
  const response = await fetch(`/api/cards/${cardId}/like`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useLikeCount = (cardId: string) => {
  return useQuery<LikeCountResponse, Error>({
    queryKey: ['likeCount', cardId],
    queryFn: () => fetchLikeCount(cardId),
  });
};
