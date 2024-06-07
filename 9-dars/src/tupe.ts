export type PaymentStatus = string;

export type ProductStatus = "Active" | "Inactive";

export type PaymentType = "NaqdPul" | "Click" | "Payme" | "UzumBank";

export type Product = {
  id: number;
  status: ProductStatus;
};

export type OrderGroup = {
  paymentTupe: PaymentType;
};

export type Products = Product[];
