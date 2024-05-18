import { useMutation, useQueryClient } from '@tanstack/react-query';

interface LikeCountResponse {
    likeCount: number;
}

const likeCard = async (cardId: string): Promise<LikeCountResponse> => {
    const response = await fetch(`/api/cards/${cardId}/like`, {
        method: 'POST',
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const useLikeMutation = (cardId: string) => {
    const queryClient = useQueryClient();

    return useMutation<LikeCountResponse, Error, void>({
        mutationFn: () => likeCard(cardId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['likeCount', cardId],
            });
        },
    });
};
