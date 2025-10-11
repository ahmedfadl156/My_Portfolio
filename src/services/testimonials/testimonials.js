import supabase from "../../../supabase";

export async function getAllTestimonials() {
    const {data , error} = await supabase.from("testimonials").select("*");
    if(error) {
        throw new Error("Failed to fetch testimonials" + error.message);
    }
    return data;
}

export async function addTestimonial({name , position , email , testimonial , rating}) {
    const {data , error} = await supabase.from("testimonials").insert([
        {
            name,
            position,
            email,
            testimonial,
            rating
        }
    ]);
    if(error) {
        throw new Error("Failed to add testimonial" + error.message);
    }
    return data;
}
