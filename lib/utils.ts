import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export async function getPosts(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}
