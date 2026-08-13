import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Product } from "@/types/product";

const PRODUCT_FIELDS = "id, name, name_en, price, original_price, image, category_id, unit, description, is_active, is_featured, sort_order";
const PAGE_SIZE = 1000;

async function fetchProducts(categoryId?: string, featuredOnly = false) {
  const all: Product[] = [];
  let from = 0;
  while (true) {
    let query = supabase
      .from("products")
      .select(PRODUCT_FIELDS)
      .eq("is_active", true)
      .order("sort_order")
      .range(from, from + PAGE_SIZE - 1);
    if (categoryId) query = query.eq("category_id", categoryId);
    if (featuredOnly) query = query.eq("is_featured", true);
    const { data, error } = await query;
    if (error) throw error;
    if (!data?.length) break;
    all.push(...(data as Product[]));
    if (data.length < PAGE_SIZE) break;
    from += PAGE_SIZE;
  }
  return all;
}

export const useProducts = (categoryId?: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", categoryId],
    enabled: !!categoryId,
    queryFn: () => fetchProducts(categoryId),
  });
};

export const useFeaturedProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["featured-products"],
    queryFn: () => fetchProducts(undefined, true),
  });
};

export const useProduct = (id?: string) => {
  return useQuery<Product | null>({
    queryKey: ["product", id],
    enabled: !!id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, name_en, price, original_price, image, category_id, unit, description, is_active, is_featured, sort_order")
        .eq("id", id!)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });
};

export const useAllProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["all-products"],
    queryFn: () => fetchProducts(),
  });
};
