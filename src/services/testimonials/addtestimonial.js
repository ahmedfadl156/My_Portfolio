import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTestimonial as addTestimonialService } from "./testimonials";
import toast from "react-hot-toast";

export default function useAddTestimonial() {
    const queryClient = useQueryClient();
    const {mutate: addTestimonial , isPending: isLoading , error} = useMutation({
        mutationFn: ({name , position , email , testimonial , rating}) => addTestimonialService({name , position , email , testimonial , rating}),
        onSuccess: (newTestimonial) => {
            toast.success("Testimonial added successfully");
            queryClient.invalidateQueries({queryKey: ["testimonials"]});
            queryClient.refetchQueries({queryKey: ["testimonials"]});
        },
        onError: (error) => {
            console.error("Error adding testimonial:", error);
            toast.error("Failed to add testimonial");
        }
    })
    return {addTestimonial , isLoading , error}
}