export interface Products {
    slug: string;
    variations: Variation[];
  }
  
export interface Variation {
    variation_id: number;
    meta: {
      attribute_pa_treatment: string;
      attribute_pa_lens_thickness: string;
      attribute_pa_stock_type: string;
      attribute_pa_color: string;
      attribute_pa_size: string;
      price: number;
    };
}

export interface Lens {
    products: Products[];
    
}
export interface Frame {
    product: Product;
    
}
export interface Variations {
    variation_id: number;
    meta: {
      attribute_pa_treatment: string;
      attribute_pa_lens_thickness: string;
      attribute_pa_stock_type: string;
      attribute_pa_color: string;
      attribute_pa_size: string;
      region_product_ids: string;
      price: number;
    };
}
  
export interface Product {
    slug: string;
    variations: Variations[];
    
}
  
export interface Components {
    quantity_min:number
    Lens: Lens[];
    Frame: Frame;
    product: Product;
    products: Products[];
    variations: Variation[];
}
  
export interface GlassesResponse {
    components: Components[];
    colors: Colors[];
    
}
  
export interface SunGlassesResponse {
    components: SunComponents[];
    
}
  
export interface SunComponents {
    quantity_min:number
    Lens: Lens[];
    Frame: Frame;
    product: Product;
    products: Products[];
    variations: Variation[];
}

  
export interface nonPresComponents {
    quantity_min:number
    Lens: Lens[];
    Frame: Frame;
    product: Product;
    products: Products[];
    variations: Variation[];
}

export interface nonPresResponse {
    components: nonPresComponents[];
    
}


export interface Colors {
    slug: string;
    name: string;
    color: string;
}

export interface ColorsResponse {
    colors: Colors[];
}