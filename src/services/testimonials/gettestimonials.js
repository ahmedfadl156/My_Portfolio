import { useQuery } from "@tanstack/react-query";
import { getAllTestimonials } from "./testimonials";

export default function getTestimonials() {
    const {data: testimonials , isLoading , error} = useQuery({
        queryKey: ["testimonials"],
        queryFn: getAllTestimonials,
        refetchOnWindowFocus: false,
        staleTime: 0,
    });
    return {testimonials , isLoading , error};
}
