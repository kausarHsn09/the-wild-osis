import { useMutation, useQueryClient } from "@tanstack/react-query";
import {updateSetting as updateSettinApi} from '../../services/apiSettings'
import toast from "react-hot-toast";

export function useUpdateSetting (){
 const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn:updateSettinApi,
    onSuccess: () => {
      toast.success("Setting is Updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error) => toast.error(error.message),
  });
  return { isUpdating,updateSetting}
}