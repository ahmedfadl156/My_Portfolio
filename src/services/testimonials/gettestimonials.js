import { useQuery } from "@tanstack/react-query";
import { getAllTestimonials } from "./testimonials";

export default function getTestimonials() {
    const {data: testimonials , isLoading , error} = useQuery({
        queryKey: ["testimonials"],
        queryFn: getAllTestimonials,
    });
    return {testimonials , isLoading , error};
}
