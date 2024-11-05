import { getGetApiHandlerViewQueryKey, useGetApiHandlerViewSuspense } from "@/generated/api";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export const useViewerRepository = () => {
    const queryClient = useQueryClient();

    const {
        data: {
            data: { result: viewerData },
        },
    } = useGetApiHandlerViewSuspense();

    const refetch = useCallback(async () => {
        queryClient.invalidateQueries({ queryKey: getGetApiHandlerViewQueryKey() });
    }, [queryClient]);

    return {
        data: viewerData,
        refetch,
    };
};
