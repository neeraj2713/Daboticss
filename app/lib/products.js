/** Product catalog from https://dabotics.com/product.html */

export const WHATSAPP_NUMBER = "917818002203";

export const shopProducts = [
  {
    id: 1,
    name: "Quarky-Explorer kit",
    price: 4699,
    stock: 119,
    image: "/images/products/product-1.jpg",
    category: "quarky",
  },
  {
    id: 2,
    name: "Quarky-Innovator kit",
    price: 6999,
    stock: 103,
    image: "/images/products/product-2.jpg",
    category: "quarky",
  },
  {
    id: 3,
    name: "Quarky-Ultimate kit",
    price: 11199,
    stock: 97,
    image: "/images/products/product-3.jpg",
    category: "quarky",
  },
  {
    id: 4,
    name: "Quarky-Mars Rover Add-on kit",
    price: 12990,
    stock: 94,
    image: "/images/products/product-4.jpg",
    category: "addons",
  },
  {
    id: 5,
    name: "Quarky-Humanoid Add-on Kit",
    price: 11199,
    stock: 94,
    image: "/images/products/product-5.jpg",
    category: "addons",
  },
  {
    id: 6,
    name: "Quarky-IoT House Add-on Kit",
    price: 11199,
    stock: 91,
    image: "/images/products/product-6.jpg",
    category: "addons",
  },
  {
    id: 7,
    name: "Dabotics PlayTrons Kit",
    price: 5500,
    stock: 91,
    image: "/images/products/product-7.jpg",
    category: "play",
  },
  {
    id: 8,
    name: "Dabotics PlayTronix kit",
    price: 5500,
    stock: 89,
    image: "/images/products/product-8.jpg",
    category: "play",
  },
  {
    id: 9,
    name: "Dabotics PlayDynamics Block Kit",
    price: 11990,
    stock: 123,
    image: "/images/products/product-9.jpg",
    category: "play",
  },
  {
    id: 10,
    name: "Dabotics PeeCee kit",
    price: 14990,
    stock: 123,
    image: "/images/products/product-10.jpg",
    category: "play",
  },
  {
    id: 11,
    name: "Dabotics ZING Robot",
    price: 65990,
    stock: 123,
    image: "/images/products/product-11.jpg",
    category: "advanced",
  },
  {
    id: 12,
    name: "Dabotics Crawl-e Robot",
    price: 62990,
    stock: 123,
    image: "/images/products/product-12.jpg",
    category: "advanced",
  },
];

export const shopCategories = [
  { id: "all", label: "All Products" },
  { id: "quarky", label: "Quarky Kits" },
  { id: "addons", label: "Quarky Add-ons" },
  { id: "play", label: "Dabotics Play Series" },
  { id: "advanced", label: "Advanced Robots" },
];

export const parentTestimonials = [
  {
    quote:
      "As a parent, I'm really impressed with the Dabotics STEM Kit. It makes learning fun and interactive for my child. Each activity teaches something valuable without feeling like study time.",
    name: "Er. Mayank Agarwal",
    location: "Ghaziabad",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "In today's digital world, it's hard to keep kids away from screens. But this kit has changed that! My child now prefers building and exploring with the Dabotics STEM Kit.",
    name: "Prof. Subhi Jain",
    location: "Lucknow",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "One thing I truly appreciate as a parent is how safe and well-designed the kit is. All components are durable and child-friendly, and the instructions are easy to follow.",
    name: "Dr. Parush Arora",
    location: "Delhi",
    image: "/images/testimonial-3.jpg",
  },
];

export function getWhatsAppOrderLink(productName, price) {
  const text = `Hi Dabotics, I would like to order: ${productName} (₹${price.toLocaleString("en-IN")})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
